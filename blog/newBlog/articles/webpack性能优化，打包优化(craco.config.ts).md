---
categories:
  - React
  - Webpack
  - 性能优化
  - craco

tags:
  - React
  - Webpack
  - 性能优化
  - craco

date: 2022-10-20

author: 深海如梦

excerpt: webpack性能优化，打包优化(craco.config.ts)

---

# webpack性能优化，打包优化

## 插件

webpack-bundle-analyzer 打包进度条

webpackbar 分析打包工具



## craco.config.js

```typescript
const CracoLessPlugin = require('craco-less');
const WebpackBar = require('webpackbar'); //打包进度条
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //分析打包工具
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#5BB7E1' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    plugins: [
      /* 进度条展示 */
      new WebpackBar({
        profile: true,
        color: '#5BB7E1'
      }),
      /* 可以看到打包出来的所有文件所占的大小 */
      // new BundleAnalyzerPlugin({
      //   analyzerMode: "server",
      //   analyzerHost: "127.1.1.1",
      //   analyzerPort: 6666,
      //   openAnalyzer: true, // 构建完打开浏览器
      //   reportFilename: path.resolve(__dirname, `analyzer/index.html`),
      // }),
    ],
  }
};
```

