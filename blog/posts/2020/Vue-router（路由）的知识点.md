---
categories:
  - Vue
tags:
  - Vue 
  -	vue-router
date: 2020/05/01
author: 深海如梦
excerpt: Vue-router（路由）的知识点
---



# Vue-router（路由）的知识点

## 一、安装

如果你用vue-cli脚手架来搭建项目，配置过程会选择是否用到路由（详细见vue-cli 脚手架），如果选择y，后面下载依赖会自动下载vue-router。
这里还是说一下安装：npm install vue-router

## 二、创建组件

如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能，在项目目录结构中，src文件目录下会有一个router文件夹，此处就是编写路由组件的地方。在src/router/index.js，这个文件就是路由的核心文件：

```typescript
import Vue from 'vue' //引入Vue
import Router from 'vue-router' //引入vue-router
// 设置路由
import routes from './routerConfig'  //引入同目录下的自定义路由

Vue.use(Router) //Vue全局使用Router

export default new Router({
  //大家都知道，路由地址都是以"#"形式展示，但是有些时候，我们又希望路由地址中不出现"#"，
  //那怎么办呢？  vue给我们提供了一个属性mode="history";代码如下
  mode: 'history', 
  //自定义路由
  routes
})
```

## 三、router-link制作导航

1. router-link 是一个组件，它默认会被渲染成一个带有链接的a标签，通过to属性指定链接地址。
   注意：被选中的router-link将自动添加一个class属性值.router-link-active。
   例：我们在App.vue中添加2个导航（你需要在components下创建2个vue文件）

   ```html
   <div>
     <router-link to="/First"><span>首页</span></router-link> |
     <router-link to="/About"><span>关于</span></router-link>
   </div>
   ```

2. router-view 用于渲染匹配到的组件。

   可以给router-view组件设置transition过渡（[Vue2.0 Transition常见用法全解惑](https://cn.vuejs.org/v2/guide/transitions.html)）。

   ```html
   <transition name="fade">
     <router-view ></router-view>
   </transition>
   ```

   **css过渡类名：**
   组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=“fade”,会有如下四个CSS类名：

    `fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。`

    `fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。`

    `fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。`

    `fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。`

   从上面四个类名可以看出，**fade-enter-active和fade-leave-active**在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。

   **过渡模式mode：**

   - in-out(mode默认in-out模式）：新元素先进入过渡，完成之后当前元素过渡离开。
   - out-in：当前元素先进行过渡离开，离开完成后新元素过渡进入。

   还可以配合使用，**keep-alive**可以缓存数据，这样不至于重新渲染路由组件的时候，之前那个路由组件的数据被清除了。比如对当前的路由组件a进行了一些DOM操作之后，点击进入另一个路由组件b，再回到路由组件a的时候之前的DOM操作还保存在，如果不加keep-alive再回到路由组件a时，之前的DOM操作就没有了，得重新进行。如果你的应用里有一个购物车组件，就需要用到keep-alive。

## 四、自定义路由

因为我们是自定义的路由所在我们需要在router文件夹下新建一个routerConfig.js的文件
然后填入引用的路由文件和相关参数，代码如下：

```typescript
import First from '@/components/First'
import About from '@/components/About'

export default [ // 导出路由配置
  {
    path: '/First',
    name: 'First',
    component: First
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '*',
    redirect: '/First' // 默认指定页面首页
  }
]
```

最后保存，然后 npm run dev 就可以看到可以切换不同的页面了

## 五、补充

[官方文档](https://router.vuejs.org/zh/api/#router-link)