---
categories:
  - Vue
tags:
  - Vue
  - 路由高亮
  - 父子路由
date: 2020/07/11
author: 深海如梦
excerpt: Vue 父子路由的实现以及父子路由的高亮切换显示问题
---



# Vue 父子路由的实现以及父子路由的高亮切换显示问题





## 父子路由的实现

vue中，一般路由都是写在router中index.js下的,如

```typescript
routes: [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
]
```

父子的路由利用children来实现：

```typescript
{
  path: "/about",
  component: About,
  children: [
    {
      path: "/about/me",
      component: () => import("../pages/about/Me.vue") // 这里是利用懒加载方式
    },
    {
      path: "/about/edu",
      component: () => import("../pages/about/Edu.vue")
    }
  ]
},
```

## 父子路由的高亮切换

在vue中，我们默认控制高亮显示以及激活高亮的类名

***.router-link-active，\****.router-link-exact-active。***

这里我用active中代表router-link-active，

```typescript
linkActiveClass: "active", 
linkExactActiveClass: "",
// 控制router-link-active和router-link-exact-active的类名，当为""就是不用这个类名，也可以自己命名类名像active
```

## 问题

我们需要实现的效果，父路由默认选中第一个子路由，切换子路由让父路由高亮不会消失.
在实际开发中，可能遇到了当前路由下（父路由）在点击它的子路由时，他的（父路由）选中状态消失了

##### 原因

> 1、子路由router-link加了exac精确匹配路由

## 解决办法

- 在子路由前面加上父路由路径（使父路由高亮）,并重定向到子路由路径（使子路由高亮），如下：

```typescript
{
  path: "/rank",
  component: Rank,
  children: [
    {
      path: "/rank",  //父路由
      redirect: "/rank/android" //重定向 
    },
    {
      path: "/rank/android",
      component: () => import("../pages/ranking/Android.vue") //懒加载
    },
    {
      path: "/rank/vendor",
      component: () => import("../pages/ranking/Vendor.vue") //懒加载
    }
  ]
},
```

- 使用.router-link-active代替.router-link-exact-active

最后解决了问题。

## 补充

关于vue的相关知识请参考 [vue中文文档](https://cn.vuejs.org/)