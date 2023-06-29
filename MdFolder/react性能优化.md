---
title: react性能优化

categories:
  - 并发
  - promise

tags:
  - 并发
  - promise

date: "2023-06-16"

author: 深海如梦

excerpt: react性能优化

---
# react性能优化

## prefetch

#### 使用`preload`，`prefetch`,`dns-prefetch`等指定提早请求指定文件，或者根据状况，浏览器自行决定是否提早`dns`预解析或者按需请求某些资源。

- 这里也能够`webpack4`插件实现,目前京东在使用这个方案～



```typescript
const PreloadWebpackPlugin = require('preload-webpack-plugin')
 new PreloadWebpackPlugin({
     rel: 'preload',
     as(entry) {
         if (/\.css$/.test(entry)) return 'style';
         if (/\.woff$/.test(entry)) return 'font';
         if (/\.png$/.test(entry)) return 'image';
         return 'script';
     },
     include:'allChunks'
     //include: ['app']
 }),
```

