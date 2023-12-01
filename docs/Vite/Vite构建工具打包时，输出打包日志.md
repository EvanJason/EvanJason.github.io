# Vite构建工具打包时，输出打包日志

## 打包日志自定义插件


在根目录新建 `buildLog.ts`
```typescript
import { PluginOption } from "vite";
import { execSync } from "child_process";
import moment from "moment";
import path, { resolve } from "path";
import fs from "fs";

export function getReactEnvCfg(cfgStr: string) {
    const cfgItems = cfgStr.split("\n").filter((e) => !e.startsWith("#"));
    let cfg = {};
    cfgItems.forEach((c) => {
        const cfgItem = c.split("=");
        if (c && cfgItem.length && cfgItem[0].startsWith("VITE_"))
            cfg[cfgItem[0].trim()] = cfgItem[1].trim();
    });
    return cfg;
}

export const buildLog = (): PluginOption => ({
    name: "buildLog",
    generateBundle(_, bundle) {
        try {
            // 使用Git命令获取用户名
            const gitUsername = execSync("git config user.name", {
                encoding: "utf-8",
            }).trim();

            const envPath = path.join(__dirname, ".env.production");
            const envCfg: any = getReactEnvCfg(
                fs.readFileSync(envPath, "utf-8")
            );
            // 获取实际的输出路径
            const outputDir = resolve(__dirname, 'dist'); // 修改为实际的输出目录
            const manifestPath = resolve(outputDir, 'manifest.json');
            const manifest = {
                short_name: '智能搜索后台系统',
                name: '智能搜索后台系统',
                build: {
                    name: gitUsername,
                    version: envCfg.VITE_VERSION,
                    env: envCfg.VITE_ENV,
                    updateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                },
            };
            fs.writeFileSync(
                manifestPath,
                JSON.stringify(manifest, null, 2)
            );
        } catch (error) {
            console.error(`记录打包日志失败: ${error}`);
        }
    }
});
```

## 使用

在 `vite.config.ts` 中应用该插件
```typescript
import { buildLog } from "./buildlog";
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [ //插件
      buildLog(),
      ...other
    ],
    ...other
  }
})
```

