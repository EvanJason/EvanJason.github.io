---
title: nodejs反向代理

categories:
  - nodejs

tags:
  - nodejs

date: "2023-10-16"

author: 深海如梦

excerpt: nodejs反向代理

---

# nodejs反向代理



```javascript
const express = require("express");
const fs = require("fs");
const os = require("os");
const app = express();
const chalk = require("chalk");
const { createProxyMiddleware } = require("http-proxy-middleware");

let port = 8080;
const folderPath = __dirname + "/build";

if (fs.existsSync(folderPath)) {
    app.use(express.static(folderPath));
} else {
    console.error(chalk.red(`文件夹 ${folderPath} 不存在,请打包后重试`));
    return
}
app.use(
    createProxyMiddleware("/es", {
        target: "http://server.cn",
        changeOrigin: true,
        pathRewrite: {
            "^/es": "",
        },
    })
);
app.use(
    createProxyMiddleware("/es-websocket", {
        target: "ws://server.cn/ws/api",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            "^/es-websocket": "",
        },
    })
);
function getHost() {
    const networkInterfaces = os.networkInterfaces();
    const interfaces = Object.keys(networkInterfaces);
    for (const iface of interfaces) {
        const addresses = networkInterfaces[iface];
        for (const addr of addresses) {
            if (addr.family === "IPv4" && !addr.internal) {
                return addr.address;
            }
        }
    }
    return null;
}
function run() {
    try {
        const server = app.listen(port, () => {
            const host = getHost();
            const port = server.address().port;
            if (host) {
                console.log(
                    `启动服务成功\n请访问:   ${chalk.blueBright(
                        `http://${host}:${port}`
                    )} `
                );
            }
        });
        // 监听端口冲突或错误
        server.on('error', (error) => {
            if (error.syscall !== 'listen') {
                throw error;
            }
            if (error.code === 'EADDRINUSE') {
                port++;
                server.listen(port);
            } else {
                throw error;
            }
        });
    } catch (error) {
        console.log("启动服务失败");
    }
}
run();

```

