---
title: 把本地 Node CLI 发布到 GitHub：我踩过的 6 个坑

categories:
  - Git
  - 踩坑

tags:
  - github
  - npm
  - playwright
  - 代理
  - cli

date: "2026-11-05"

author: 深海如梦

excerpt: 把一个在本机跑了很久的 web-render 技能包整理成开源仓库并发布到 GitHub。原以为 push 一下就完事，结果从 npm 打包到网络推送到 API 调用连踩 6 个坑——其中 4 个不报错，只是"结果不对"，最费时间。

---

# 把本地 Node CLI 发布到 GitHub：我踩过的 6 个坑

手头有个自用的无头浏览器小工具 `web-render`，平时靠一条命令截图、抓正文、导 PDF。用的时间久了，想把它整理成开源仓库发出去。

原以为流程很简单：整理文件 → `git push` → 完事。

实际做下来，卡了整整一个下午。而且最麻烦的不是"报错"，而是那些**不报错、只是结果不对**的地方。

这篇把过程记下来，按踩坑顺序排。

## 坑 1：还没开始就被结构打回

工具在本机是这么放的：

```
~/.workbuddy/skills/web-render/SKILL.md      # 技能说明书
~/.workbuddy/tools/web-render/render.js      # 真正的脚本
```

两个文件在两个目录。对本地使用没影响，因为命令是 shim 调用固定路径。但直接推上去，别人 clone 下来只有一半。

发布前必须先回答一个问题：**陌生人拿到这个仓库，能不能跑起来？**

我的答案是不能——没有 `package.json`，不能 `npm i -g`，路径还写死了 `AppData/Roaming/npm/node_modules`，Mac 和 Linux 用户直接报错。

于是先做重构：

```
web-render/
├── package.json
├── bin/web-render.js
├── scripts/postinstall.js
├── SKILL.md
└── README.md
```

关键是把 `loadPlaywright()` 改掉。原来的实现只认 Windows 上 npm 的全局目录：

```js
path.join(os.homedir(), 'AppData', 'Roaming', 'npm', 'node_modules')
```

改成按平台枚举候选目录，最后用 `npm root -g` 兜底：

```js
function globalNodeModuleDirs() {
  const dirs = [];
  if (process.env.PLAYWRIGHT_NODE_MODULES) dirs.push(process.env.PLAYWRIGHT_NODE_MODULES);
  if (process.platform === 'win32') {
    if (process.env.APPDATA) dirs.push(path.join(process.env.APPDATA, 'npm', 'node_modules'));
  } else {
    dirs.push(
      '/opt/homebrew/lib/node_modules',
      '/usr/local/lib/node_modules',
      path.join(home, '.npm-global', 'lib', 'node_modules'),
      // ...
    );
  }
  return dirs;
}
```

## 坑 2：`files` 字段漏目录，打包静默丢文件

`package.json` 里我用 `files` 白名单控制发布内容：

```json
"files": [
  "bin/",
  "SKILL.md",
  "README.md",
  "LICENSE"
]
```

同时加了个 `postinstall` 脚本，安装完检测 Chromium 是否就绪：

```json
"scripts": {
  "postinstall": "node scripts/postinstall.js"
}
```

问题来了：`scripts/` **不在 files 里**。

`files` 是白名单，不在里面的文件不会进 tarball。于是 `npm i -g` 之后，postinstall 去执行一个不存在的文件，安装直接失败。

这个坑最阴的地方是**本地完全正常**——因为你本地有 `scripts/` 目录，`npm run` 当然能跑。只有打包之后才会暴露。

发现它的方法很简单，一行命令：

```bash
npm pack --dry-run
```

输出里会列出 tarball 包含的所有文件：

```
npm notice Tarball Contents
npm notice 1.1kB LICENSE
npm notice 6.7kB README.md
npm notice 7.3kB SKILL.md
npm notice 18.6kB bin/web-render.js
npm notice 1.1kB package.json
npm notice total files: 5
```

5 个。应该是 6 个。

> **教训**：发布 npm 包之前，`npm pack --dry-run` 是必跑的一步。它不联网、不改任何东西，但能提前发现所有"本地有、包里没有"的文件。

## 坑 3：CRLF 把 shebang 弄坏了

Windows 上 git 默认会做换行转换。提交时 LF 转 CRLF，检出时再转回来——本地看起来毫无问题。

但 `bin/web-render.js` 第一行是 shebang：

```js
#!/usr/bin/env node
```

如果被转成 CRLF，实际内容变成 `#!/usr/bin/env node\r`。Linux 和 macOS 上执行会报：

```
bash: ./web-render.js: /usr/bin/env: bad interpreter: No such file or directory
```

因为 `node\r` 这个程序不存在。

解决办法是加 `.gitattributes` 强制走 LF：

```gitattributes
* text=auto eol=lf

# 二进制文件不做转换
*.png binary
*.jpg binary
*.zip binary

# 批处理保留 CRLF
*.bat text eol=crlf
*.cmd text eol=crlf
```

这类问题在纯 Windows 环境里永远发现不了，等用户提 issue 才知道。

## 坑 4：代理不是"通"或"不通"，是分域名的

真正的麻烦从这里开始。

本机挂着代理，环境变量里有 `http_proxy=127.0.0.1:13621`。我默认它"能用"。

然后 `gh auth login` 报错：

```
failed to authenticate via web browser: Post "https://github.com/login/device/code": Bad Gateway
```

Bad Gateway，说明代理收到了请求但上游失败。那就测一下：

```bash
curl -sI https://github.com          # HTTP 000  超时 10s
curl -sI https://api.github.com      # HTTP 200  0.6s
```

**同一个代理，一个域名不通，另一个通。**

这就是我最初判断错误的地方。我以为"代理挂了"或"GitHub 被墙了"，实际上这个代理是**按域名分流**的：`api.github.com` 放行，`github.com` 主站不覆盖。

后来翻系统配置才发现源头——注册表里记着 `ProxyServer: 127.0.0.1:7890`，那是个国内加速器，只对特定域名生效。

> **教训**：排查网络问题时，别笼统地测"能不能上 GitHub"。要把域名拆开测：
>
> ```bash
> for h in github.com api.github.com raw.githubusercontent.com objects.githubusercontent.com; do
>   printf "%-35s" "$h"
>   curl -sI -m 8 -o /dev/null -w "%{http_code}\n" "https://$h"
> done
> ```
>
> 结论可能是"部分可达"，而"部分可达"才是最需要精确处理的场景。

## 坑 5：`gh` 认 `HTTPS_PROXY`，不认 `ALL_PROXY`

知道了 socks5 代理能通 `github.com`，很自然地设上：

```bash
ALL_PROXY=socks5://127.0.0.1:7890 gh auth login --web
```

结果还是超时。

关键在于看报错里的 IP：

```
read tcp 10.81.154.156:6280->20.205.243.166:443: wsarecv: ...
```

`20.205.243.166` 是 GitHub 的真实 IP。**如果走了代理，这里不该出现真实 IP 的连接**——说明 `ALL_PROXY` 根本没生效，客户端直接连了。

换成 `HTTPS_PROXY`，立刻成功：

```bash
HTTPS_PROXY=socks5://127.0.0.1:7890 \
HTTP_PROXY=socks5://127.0.0.1:7890 \
gh auth login --web
```

> **教训**：判断代理是否生效，**看报错里的对端 IP**。出现真实 IP 就说明没走代理；出现 `127.0.0.1` 才算走通。这个判断比看退出码可靠得多。

## 坑 6：空仓库不允许调用 Git Data API

`gh` 认证通过、仓库建好之后，`git push` 又失败了：

```
fatal: unable to access '...': TLS connect error: error:0A000126:
SSL routines::unexpected eof while reading
```

schannel 后端和 openssl 后端都试了，SOCKS 通道上的 TLS 握手稳定失败（但同一条通道 `curl` 是通的，至今没搞清原因）。

那就换路：绕开 `git push`，直接用 GitHub 的 REST API 构造提交。

思路是 Git Data API 的标准四步：建 blob → 建 tree → 建 commit → 更新 ref。

第一步就撞墙：

```
POST /repos/{owner}/{repo}/git/blobs → 409
{"message":"Git Repository is empty."}
```

**完全空的仓库不允许创建 blob。** 因为 blob 需要挂在一棵树上，而这棵树还不存在。

解法是先用 Contents API 落一个文件，把仓库"激活"：

```js
// 先建立首个 commit
await api(`/repos/${owner}/${repo}/contents/README.md`, {
  method: 'PUT',
  body: JSON.stringify({
    message: 'chore: 初始化仓库',
    content: Buffer.from('# web-render\n').toString('base64'),
  }),
});
```

有了第一个 commit 之后，再走正常流程，并用 `base_tree` 指定基线，实现全量覆盖：

```js
const tree = await api(`/repos/${owner}/${repo}/git/trees`, {
  method: 'POST',
  body: JSON.stringify({ base_tree: baseTreeSha, tree: treeItems }),
});
```

> **教训**：GitHub 的 API 对"空状态"有额外限制，不只是这一处（空仓库不能建 issue 模板、不能设分支保护等）。遇到 409 先想想是不是仓库还没初始化。

## 附带一个：交互式授权的进程不能被杀

这条不算坑，但让整个流程白跑了一轮。

`gh auth login --web` 会打印一个验证码，然后**轮询**等待你在浏览器里完成授权：

```
! One-time code (979F-DE8E) copied to clipboard
Open this URL to continue in your web browser: https://github.com/login/device
```

我第一次把这条命令放在一个带 `timeout 25` 的环境里跑。25 秒后进程被杀，而我还在浏览器里操作。

结果很尴尬：GitHub 页面显示 **"Congratulations, you're all set!"**，本地却还是没登录。

因为授权在服务器侧完成了，但客户端没机会去换取 token。

> **教训**：任何交互式授权（OAuth device flow、`npm login`、`gh auth login`）都不要放在会被超时机制掐死的进程里。要么确认通道稳定再发起，要么给它足够长的存活时间。

## 最终可用的配置

折腾完之后，稳定可用的组合是：

| 场景 | 命令 |
|---|---|
| gh 认证 / API 调用 | `HTTPS_PROXY=socks5://127.0.0.1:7890 gh ...` |
| git fetch / push | `git -c http.proxy=socks5h://127.0.0.1:7890 push origin main` |
| 浏览器抓取（工具本身） | 直连，不需要代理 |

各通道的实际表现：

| 通道 | `github.com` | `api.github.com` |
|---|---|---|
| 直连 | ✗ 超时 | ✓ |
| 系统 HTTP 代理 | ✗ CONNECT 502 | ✓ |
| 加速器 HTTP 7890 | ✗ | ✓ |
| 加速器 SOCKS5 7890 | ✓ | ✓ |

另外有个反转：VPN 稳定之后，`git push` 其实是能用的，只是必须显式指定代理。我一开始判断"git push 不可用，只能走 API"，是因为没指定代理，默认退回直连然后超时。

**所以别急着下"某条路走不通"的结论，先确认是不是配置没传对。**

## 六条可以抄走的经验

1. **发布前跑 `npm pack --dry-run`**，它会告诉你 tarball 里到底有什么
2. **加 `.gitattributes` 强制 LF**，带 shebang 的脚本尤其必要
3. **排查网络要按域名拆**，"能上 GitHub"这种笼统判断会误导
4. **看报错里的对端 IP**，比看退出码更准确
5. **空仓库的 API 限制要单独处理**，先落一个文件再操作
6. **交互式授权别放在会超时的进程里**

顺带说一句，前两个坑（`files` 漏目录、CRLF）都属于"只在别人的机器上炸"的类型。本地怎么测都正常，所以真的只能靠发布前那两道检查。

仓库在这里：[EvanJason/web-render](https://github.com/EvanJason/web-render)
