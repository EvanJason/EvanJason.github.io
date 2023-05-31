---
title: 解决react项目生产环境部署，浏览器可以看到源码的问题

categories:
  - React

tags:
  - React
  - 打包

date: "2021-11-21"

author: 深海如梦

excerpt: React生产环境还有源代码的问题解决,并记录

---

# 解决 react 项目生产环境部署，浏览器可以看到源码的问题

React 生产环境还有源代码的问题解决

## 前言

create-react-app 创建的 react 项目，打包生成后仍有源代码，这是因为 source-map 的问题

## 解决方案一

1.在项目根目录下新建文件.env.production，内容:

```
GENERATE_SOURCEMAP=false
```

2.重新打包即可

## 解决方案二

1.寻找配置文件 webpack.config.js，代码如下

```
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
```

2.直接修改这行代码，写成配置（只针对于生产环境）

3.打包重新运行

## 更多

更多参考 https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/
