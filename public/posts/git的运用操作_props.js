import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/git的运用操作.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/git的运用操作.html",
    'title': "git的运用操作",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>git的运用操作</h1>\n<h4 id="git-init-%E9%A1%B9%E7%9B%AE%E5%90%8D">git init 项目名<a class="anchor" href="#git-init-%E9%A1%B9%E7%9B%AE%E5%90%8D">§</a></h4>\n<p>ls 显示出内容</p>\n<h4 id="git-clone-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9C%B0%E5%9D%80">git clone 远程仓库地址<a class="anchor" href="#git-clone-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9C%B0%E5%9D%80">§</a></h4>\n<p>例子：git clone <a href="mailto:git@gitee.com">git@gitee.com</a>:willern/vue-demo.git</p>\n<p>使用 git clone 拷贝一个 Git 仓库到本地，让自己能够查看该项目，或者进行修改。</p>\n<p>如果你需要与他人合作一个项目，或者想要复制一个项目，看看代码，你就可以克隆那个项目。 执行命令：</p>\n<h2 id="%E5%9F%BA%E6%9C%AC%E5%BF%AB%E7%85%A7">基本快照<a class="anchor" href="#%E5%9F%BA%E6%9C%AC%E5%BF%AB%E7%85%A7">§</a></h2>\n<p>Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。本章将对有关创建与提交你的项目的快照的命令作介绍。</p>\n<p>git add 命令可将该文件添加到缓存，如我们添加以下两个文件：</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span>touch是新建文件的意思 \ntouch README\ntouch hello<span class="token punctuation">.</span>php\n</code></pre>\n<h3 id="git-add">git add<a class="anchor" href="#git-add">§</a></h3>\n<p>//代表添加当前项目的所有文件。</p>\n<p>git add .</p>\n<p>//只添加一个文件</p>\n<p>git add hello.text</p>\n<h4 id="git-status">git status<a class="anchor" href="#git-status">§</a></h4>\n<p>git status 以查看在你上次提交之后是否有修改。</p>\n<p>修改 README 文件：</p>\n<pre class="language-autoit"><code class="language-autoit">vim README\n</code></pre>\n<h3 id="git-diff">git diff<a class="anchor" href="#git-diff">§</a></h3>\n<p>执行 git diff 来查看执行 git status 的结果的详细信息。</p>\n<p>git diff 命令显示已写入缓存与已修改但尚未写入缓存的改动的区别。git diff 有两个主要的应用场景。</p>\n<h3 id="git-commit-%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BB%93%E5%BA%93">git commit 提交到仓库<a class="anchor" href="#git-commit-%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BB%93%E5%BA%93">§</a></h3>\n<p>使用 git add 命令将想要快照的内容写入缓存区， 而执行 git commit 将缓存区内容添加到仓库中。</p>\n<p>Git 为你的每一个提交都记录你的名字与电子邮箱地址，所以第一步需要配置用户名和邮箱地址。</p>\n<pre class="language-autoit"><code class="language-autoit">$ git config <span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">global</span> user<span class="token punctuation">.</span>name <span class="token string">\'runoob\'</span>\n$ git config <span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">global</span> user<span class="token punctuation">.</span>email test<span class="token variable">@runoob</span><span class="token punctuation">.</span>com\n</code></pre>\n<p>接下来我们写入缓存，并提交对 hello.php 的所有改动。在首个例子中，我们使用 -m 选项以在命令行中提供提交注释。</p>\n<pre class="language-autoit"><code class="language-autoit">$ git add hello<span class="token punctuation">.</span>php\n$ git status <span class="token operator">-</span>s\nA  README\nA  hello<span class="token punctuation">.</span>php\n$ git commit <span class="token operator">-</span>m <span class="token string">\'第一次版本提交\'</span>\n<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root<span class="token operator">-</span>commit<span class="token punctuation">)</span> d32cf1f<span class="token punctuation">]</span> 第一次版本提交\n <span class="token number">2</span> files changed<span class="token punctuation">,</span> <span class="token number">4</span> <span class="token function">insertions</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>\n create mode <span class="token number">100644</span> README\n create mode <span class="token number">100644</span> hello<span class="token punctuation">.</span>php\n \n</code></pre>\n<p>现在我们已经记录了快照。如果我们再执行 git status:</p>\n<pre class="language-autoit"><code class="language-autoit">$ git status\n# On branch master\nnothing <span class="token keyword">to</span> commit <span class="token punctuation">(</span>working directory clean<span class="token punctuation">)</span>\n</code></pre>\n<p>以上输出说明我们在最近一次提交之后，没有做任何改动，是一个&quot;working directory clean：干净的工作目录&quot;。</p>\n<p>如果你没有设置 -m 选项，Git 会尝试为你打开一个编辑器以填写提交信息。 如果 Git 在你对它的配置中找不到相关信息，默认会打开 vim。屏幕会像这样：</p>\n<h4 id="git-remote--v--%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%85%B3%E8%81%94%E7%9A%84%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%83%85%E5%86%B5">git remote -v  查看本地仓库关联的远程仓库情况<a class="anchor" href="#git-remote--v--%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%85%B3%E8%81%94%E7%9A%84%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%83%85%E5%86%B5">§</a></h4>\n<h4 id="git-push">git push<a class="anchor" href="#git-push">§</a></h4>\n<p>把本地文件推送到远程仓库下</p>\n<p>git push origin master</p>\n<p>master 代表默认的主干分支</p>\n<h4 id="%E6%9F%A5%E7%9C%8B%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF-git-branch--a">查看远程分支 git branch -a<a class="anchor" href="#%E6%9F%A5%E7%9C%8B%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF-git-branch--a">§</a></h4>\n<blockquote>\n<p>git branch 列出当前分支清单</p>\n<p>git branch -a 查看远程分支和本地分支</p>\n<p>git branch -v 查看各个分支最后一个提交信息</p>\n<p>git branch --merged 查看哪些分支已经合并入当前分支</p>\n</blockquote>\n<h4 id="%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF-git-checkout--b">创建分支 git checkout -b<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF-git-checkout--b">§</a></h4>\n<p>git checkout -b 分支名</p>\n<p>把本地分支推送到远程</p>\n<p>git push --set-upstream origin 分支名</p>\n<h4 id="%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF">切换分支<a class="anchor" href="#%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF">§</a></h4>\n<p>git checkout master</p>\n<h4 id="%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF">合并分支<a class="anchor" href="#%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF">§</a></h4>\n<p>git merge master</p>\n<h4 id="%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">删除远程分支<a class="anchor" href="#%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">§</a></h4>\n<p>git push origin --delete master</p>\n<h4 id="%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF">删除本地分支<a class="anchor" href="#%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF">§</a></h4>\n<p>git branch -d master</p>\n<h4 id=""><a class="anchor" href="#">§</a></h4>\n<p>删除远程分支</p>\n<p>git push origin --delete master</p>\n<h4 id="%E9%80%80%E5%9B%9E%E5%88%B0%E4%B9%8B%E5%89%8D%E7%9A%84%E7%89%88%E6%9C%AC">退回到之前的版本<a class="anchor" href="#%E9%80%80%E5%9B%9E%E5%88%B0%E4%B9%8B%E5%89%8D%E7%9A%84%E7%89%88%E6%9C%AC">§</a></h4>\n<p>git reset --hard head^</p>\n<h4 id="git-reflog%E6%88%96git-loggit%E8%AE%B0%E5%BD%95">git reflog或git log(git记录)<a class="anchor" href="#git-reflog%E6%88%96git-loggit%E8%AE%B0%E5%BD%95">§</a></h4>\n<p>查看记录回退版本</p>\n<p>git reset --hard HEAD@{1}</p>\n<p>git log （按字母q可以退出）</p>\n<h4 id="%E5%85%8B%E9%9A%86%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">克隆远程分支<a class="anchor" href="#%E5%85%8B%E9%9A%86%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">§</a></h4>\n<p>git clone -b &lt;指定分支名&gt; &lt;远程仓库地址&gt;</p>\n<h3 id="vs-code-git%E7%AE%A1%E7%90%86">Vs code git管理<a class="anchor" href="#vs-code-git%E7%AE%A1%E7%90%86">§</a></h3>\n<p>快捷方式</p>\n<p>第一步暂存所有更改</p>\n<p>第二部点击源代码管理中</p>\n<p>确认无误后，在消息中输入信息</p>\n<p>然后点击打勾或者快捷键提交，</p>\n<p>接着推送上去</p>\n<p>vscode git bash  清空屏幕 ctrl+L  快捷键</p>\n<h2 id="git%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83%E5%8C%96">git提交规范化<a class="anchor" href="#git%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83%E5%8C%96">§</a></h2>\n<p><img src="../pic/a145b3dc-f7ad-4797-afc3-1187e214a171.png" alt="img"></p>\n<p><img src="../pic/1eaf2edd-8edc-4f52-b8ad-2c44d1e70413.png" alt="img"></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "git\u7684\u8FD0\u7528\u64CD\u4F5C"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="git-init-%E9%A1%B9%E7%9B%AE%E5%90%8D">git init 项目名<a class="anchor" href="#git-init-%E9%A1%B9%E7%9B%AE%E5%90%8D">§</a></h4>\n<p>ls 显示出内容</p>\n<h4 id="git-clone-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9C%B0%E5%9D%80">git clone 远程仓库地址<a class="anchor" href="#git-clone-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9C%B0%E5%9D%80">§</a></h4>\n<p>例子：git clone <a href="mailto:git@gitee.com">git@gitee.com</a>:willern/vue-demo.git</p>\n<p>使用 git clone 拷贝一个 Git 仓库到本地，让自己能够查看该项目，或者进行修改。</p>\n<p>如果你需要与他人合作一个项目，或者想要复制一个项目，看看代码，你就可以克隆那个项目。 执行命令：</p>\n<h2 id="%E5%9F%BA%E6%9C%AC%E5%BF%AB%E7%85%A7">基本快照<a class="anchor" href="#%E5%9F%BA%E6%9C%AC%E5%BF%AB%E7%85%A7">§</a></h2>\n<p>Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。本章将对有关创建与提交你的项目的快照的命令作介绍。</p>\n<p>git add 命令可将该文件添加到缓存，如我们添加以下两个文件：</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span>touch是新建文件的意思 \ntouch README\ntouch hello<span class="token punctuation">.</span>php\n</code></pre>\n<h3 id="git-add">git add<a class="anchor" href="#git-add">§</a></h3>\n<p>//代表添加当前项目的所有文件。</p>\n<p>git add .</p>\n<p>//只添加一个文件</p>\n<p>git add hello.text</p>\n<h4 id="git-status">git status<a class="anchor" href="#git-status">§</a></h4>\n<p>git status 以查看在你上次提交之后是否有修改。</p>\n<p>修改 README 文件：</p>\n<pre class="language-autoit"><code class="language-autoit">vim README\n</code></pre>\n<h3 id="git-diff">git diff<a class="anchor" href="#git-diff">§</a></h3>\n<p>执行 git diff 来查看执行 git status 的结果的详细信息。</p>\n<p>git diff 命令显示已写入缓存与已修改但尚未写入缓存的改动的区别。git diff 有两个主要的应用场景。</p>\n<h3 id="git-commit-%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BB%93%E5%BA%93">git commit 提交到仓库<a class="anchor" href="#git-commit-%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BB%93%E5%BA%93">§</a></h3>\n<p>使用 git add 命令将想要快照的内容写入缓存区， 而执行 git commit 将缓存区内容添加到仓库中。</p>\n<p>Git 为你的每一个提交都记录你的名字与电子邮箱地址，所以第一步需要配置用户名和邮箱地址。</p>\n<pre class="language-autoit"><code class="language-autoit">$ git config <span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">global</span> user<span class="token punctuation">.</span>name <span class="token string">\'runoob\'</span>\n$ git config <span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">global</span> user<span class="token punctuation">.</span>email test<span class="token variable">@runoob</span><span class="token punctuation">.</span>com\n</code></pre>\n<p>接下来我们写入缓存，并提交对 hello.php 的所有改动。在首个例子中，我们使用 -m 选项以在命令行中提供提交注释。</p>\n<pre class="language-autoit"><code class="language-autoit">$ git add hello<span class="token punctuation">.</span>php\n$ git status <span class="token operator">-</span>s\nA  README\nA  hello<span class="token punctuation">.</span>php\n$ git commit <span class="token operator">-</span>m <span class="token string">\'第一次版本提交\'</span>\n<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root<span class="token operator">-</span>commit<span class="token punctuation">)</span> d32cf1f<span class="token punctuation">]</span> 第一次版本提交\n <span class="token number">2</span> files changed<span class="token punctuation">,</span> <span class="token number">4</span> <span class="token function">insertions</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>\n create mode <span class="token number">100644</span> README\n create mode <span class="token number">100644</span> hello<span class="token punctuation">.</span>php\n \n</code></pre>\n<p>现在我们已经记录了快照。如果我们再执行 git status:</p>\n<pre class="language-autoit"><code class="language-autoit">$ git status\n# On branch master\nnothing <span class="token keyword">to</span> commit <span class="token punctuation">(</span>working directory clean<span class="token punctuation">)</span>\n</code></pre>\n<p>以上输出说明我们在最近一次提交之后，没有做任何改动，是一个&quot;working directory clean：干净的工作目录&quot;。</p>\n<p>如果你没有设置 -m 选项，Git 会尝试为你打开一个编辑器以填写提交信息。 如果 Git 在你对它的配置中找不到相关信息，默认会打开 vim。屏幕会像这样：</p>\n<h4 id="git-remote--v--%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%85%B3%E8%81%94%E7%9A%84%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%83%85%E5%86%B5">git remote -v  查看本地仓库关联的远程仓库情况<a class="anchor" href="#git-remote--v--%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%85%B3%E8%81%94%E7%9A%84%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%83%85%E5%86%B5">§</a></h4>\n<h4 id="git-push">git push<a class="anchor" href="#git-push">§</a></h4>\n<p>把本地文件推送到远程仓库下</p>\n<p>git push origin master</p>\n<p>master 代表默认的主干分支</p>\n<h4 id="%E6%9F%A5%E7%9C%8B%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF-git-branch--a">查看远程分支 git branch -a<a class="anchor" href="#%E6%9F%A5%E7%9C%8B%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF-git-branch--a">§</a></h4>\n<blockquote>\n<p>git branch 列出当前分支清单</p>\n<p>git branch -a 查看远程分支和本地分支</p>\n<p>git branch -v 查看各个分支最后一个提交信息</p>\n<p>git branch --merged 查看哪些分支已经合并入当前分支</p>\n</blockquote>\n<h4 id="%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF-git-checkout--b">创建分支 git checkout -b<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF-git-checkout--b">§</a></h4>\n<p>git checkout -b 分支名</p>\n<p>把本地分支推送到远程</p>\n<p>git push --set-upstream origin 分支名</p>\n<h4 id="%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF">切换分支<a class="anchor" href="#%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF">§</a></h4>\n<p>git checkout master</p>\n<h4 id="%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF">合并分支<a class="anchor" href="#%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF">§</a></h4>\n<p>git merge master</p>\n<h4 id="%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">删除远程分支<a class="anchor" href="#%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">§</a></h4>\n<p>git push origin --delete master</p>\n<h4 id="%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF">删除本地分支<a class="anchor" href="#%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF">§</a></h4>\n<p>git branch -d master</p>\n<h4 id=""><a class="anchor" href="#">§</a></h4>\n<p>删除远程分支</p>\n<p>git push origin --delete master</p>\n<h4 id="%E9%80%80%E5%9B%9E%E5%88%B0%E4%B9%8B%E5%89%8D%E7%9A%84%E7%89%88%E6%9C%AC">退回到之前的版本<a class="anchor" href="#%E9%80%80%E5%9B%9E%E5%88%B0%E4%B9%8B%E5%89%8D%E7%9A%84%E7%89%88%E6%9C%AC">§</a></h4>\n<p>git reset --hard head^</p>\n<h4 id="git-reflog%E6%88%96git-loggit%E8%AE%B0%E5%BD%95">git reflog或git log(git记录)<a class="anchor" href="#git-reflog%E6%88%96git-loggit%E8%AE%B0%E5%BD%95">§</a></h4>\n<p>查看记录回退版本</p>\n<p>git reset --hard HEAD@{1}</p>\n<p>git log （按字母q可以退出）</p>\n<h4 id="%E5%85%8B%E9%9A%86%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">克隆远程分支<a class="anchor" href="#%E5%85%8B%E9%9A%86%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF">§</a></h4>\n<p>git clone -b &lt;指定分支名&gt; &lt;远程仓库地址&gt;</p>\n<h3 id="vs-code-git%E7%AE%A1%E7%90%86">Vs code git管理<a class="anchor" href="#vs-code-git%E7%AE%A1%E7%90%86">§</a></h3>\n<p>快捷方式</p>\n<p>第一步暂存所有更改</p>\n<p>第二部点击源代码管理中</p>\n<p>确认无误后，在消息中输入信息</p>\n<p>然后点击打勾或者快捷键提交，</p>\n<p>接着推送上去</p>\n<p>vscode git bash  清空屏幕 ctrl+L  快捷键</p>\n<h2 id="git%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83%E5%8C%96">git提交规范化<a class="anchor" href="#git%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83%E5%8C%96">§</a></h2>\n<p><img src="../pic/a145b3dc-f7ad-4797-afc3-1187e214a171.png" alt="img"></p>\n<p><img src="../pic/1eaf2edd-8edc-4f52-b8ad-2c44d1e70413.png" alt="img"></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9F%BA%E6%9C%AC%E5%BF%AB%E7%85%A7" }, "\u57FA\u672C\u5FEB\u7167"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#git-add" }, "git add"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#git-diff" }, "git diff")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#git-commit-%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BB%93%E5%BA%93" }, "git commit \u63D0\u4EA4\u5230\u4ED3\u5E93"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#vs-code-git%E7%AE%A1%E7%90%86" }, "Vs code git\u7BA1\u7406")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#git%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83%E5%8C%96" }, "git\u63D0\u4EA4\u89C4\u8303\u5316")))),
    'author': "深海如梦",
    'contributors': [],
    'date': "Sat Apr 10 2021 14:20:13 GMT+0800 (中国标准时间)",
    'updated': null,
    'excerpt': "git的运用操作",
    'cover': "../pic/a145b3dc-f7ad-4797-afc3-1187e214a171.png",
    'categories': [
        "git"
    ],
    'tags': [
        "git"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/数组的深浅拷贝.md",
                "title": "数组的深浅拷贝",
                "link": "posts/数组的深浅拷贝.html",
                "date": "Fri Aug 20 2021 10:26:12 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "tags": [
                    "深浅拷贝"
                ],
                "excerpt": "数组的深浅拷贝"
            },
            {
                "pagePath": "posts/Vs Code 前端常用插件.md",
                "title": "前端常用插件",
                "link": "posts/Vs Code 前端常用插件.html",
                "date": "2021-08-11T14:15:56.581Z",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "vscode"
                ],
                "tags": [
                    "vscode",
                    "插件"
                ],
                "excerpt": "前端常用插件",
                "cover": "../pic/image-20210409094037510.png"
            },
            {
                "pagePath": "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.md",
                "title": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
                "link": "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.html",
                "date": "Thu May 27 2021 15:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "tags": [
                    "webpack",
                    "ie",
                    "defineProperty"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/antd表格穿梭框功能.html",
                "date": "Sat May 15 2021 13:46:09 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "穿梭框",
                    "表格"
                ],
                "excerpt": "angular-antd穿梭框功能实现"
            },
            {
                "pagePath": "posts/git的运用操作.md",
                "title": "git的运用操作",
                "link": "posts/git的运用操作.html",
                "date": "Sat Apr 10 2021 14:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "git"
                ],
                "tags": [
                    "git"
                ],
                "excerpt": "git的运用操作",
                "cover": "../pic/a145b3dc-f7ad-4797-afc3-1187e214a171.png"
            },
            {
                "pagePath": "posts/Echarts 配置和知识点.md",
                "title": "Echarts 配置和知识点",
                "link": "posts/Echarts 配置和知识点.html",
                "date": "Mon Dec 28 2020 10:00:21 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular",
                    "Echarts"
                ],
                "tags": [
                    "知识点",
                    "配置",
                    "Echarts"
                ],
                "excerpt": "Echarts 配置和知识点"
            },
            {
                "pagePath": "posts/树形控件功能实现.md",
                "title": "树形控件功能",
                "link": "posts/树形控件功能实现.html",
                "date": "Wed Dec 23 2020 09:45:45 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "树形控件",
                    "功能"
                ],
                "excerpt": "树形控件功能",
                "cover": "../pic/image-20210415160710543.png"
            },
            {
                "pagePath": "posts/angular项目 页面加水印.md",
                "title": "angular项目 页面加水印",
                "link": "posts/angular项目 页面加水印.html",
                "date": "Sun Dec 6 2020 20:25:12 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "水印",
                    "页面水印",
                    "Angular"
                ],
                "excerpt": "html 使用 <div style=\"position: fixed;top: 0;left: 0;\"> <div *ngFor=\"let item of watermarkList\" class=\"watermarkList\"> <div [ngStyle]=\"item.objStyle\"> {{item.txt}} </div> </div> </div> ts // 页面水印 watermarkL..."
            },
            {
                "pagePath": "posts/wangEditor富文本编辑器.md",
                "title": "wangEditor富文本编辑器",
                "link": "posts/wangEditor富文本编辑器.html",
                "date": "Mon Nov 23 2020 16:20:21 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "wangEditor",
                    "Angular",
                    "富文本"
                ],
                "tags": [
                    "wangEditor",
                    "富文本"
                ],
                "excerpt": "wangEditor富文本编辑器"
            },
            {
                "pagePath": "posts/angular 复制粘贴事件.md",
                "title": "angular 复制粘贴事件",
                "link": "posts/angular 复制粘贴事件.html",
                "date": "‎‎Fri Nov 20 2020 11:03:08 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular",
                    "ngx-clipboard"
                ],
                "tags": [
                    "antd",
                    "复制粘贴"
                ],
                "excerpt": "angular 复制粘贴事件"
            },
            {
                "pagePath": "posts/Angular 多类名条件判断.md",
                "title": "Angular 多类名条件判断",
                "link": "posts/Angular 多类名条件判断.html",
                "date": "‎Thu Oct 22 2020 14:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Angular 多类名条件判断"
            }
        ],
        "categories": [
            {
                "name": "Angular",
                "count": 7
            },
            {
                "name": "antd",
                "count": 2
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "ngx-clipboard",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "Angular",
                "count": 1
            },
            {
                "name": "defineProperty",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "ie",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "webpack",
                "count": 1
            },
            {
                "name": "功能",
                "count": 1
            },
            {
                "name": "复制粘贴",
                "count": 1
            },
            {
                "name": "多类名",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "条件判断",
                "count": 1
            },
            {
                "name": "树形控件",
                "count": 1
            },
            {
                "name": "水印",
                "count": 1
            },
            {
                "name": "深浅拷贝",
                "count": 1
            },
            {
                "name": "知识点",
                "count": 1
            },
            {
                "name": "穿梭框",
                "count": 1
            },
            {
                "name": "表格",
                "count": 1
            },
            {
                "name": "配置",
                "count": 1
            },
            {
                "name": "页面水印",
                "count": 1
            }
        ]
    }
};
