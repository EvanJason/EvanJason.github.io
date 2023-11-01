---
title: React Hooks 18 useEffect 执行2次或多次的解决办法

categories:
  - useEffect
  - React

tags:
  - useEffect
  - React

date: "2023-10-13"

author: 深海如梦

excerpt: React Hooks 18 useEffect 执行2次或多次的解决办法

---

# React Hooks 18 useEffect 执行2次或多次的解决办法

> 开发的过程中发现我的axios在effect里始终都是执行2次。测试过多次，翻了很多代码，发现是18版本的。
>

1. **产生原因**
  当你在strict mode in development时，这是一个来自React18本身的问题。基本上，即使在React18中卸载之后，核心团队仍在试图改变组件的状态。`useEffect`两次被调用与此功能有关。

2. **解决方式**

  2.1 方式一：严格模式

  简单粗暴，一般是`StrictMode`导致的，就是`index.js`页面的代码：

  ```typescript
  <React.StrictMode>
  	<Router />
  </React.StrictMode>
  ```

  只需要去掉`React.StrictMode`标签就行了。网上查相关资料说是执行多次的行为是想提醒开发者，注意清除副作用，提前暴露问题等等。

  2.2 方式2：使用`useRef`

  ```tsx
  import { useRef, useEffect } from 'react'
  
  const Index = () => {
    // 重要!!!
    const renderRef = useRef(true)
  
    useEffect(() => {
      // 重要!!!
      if (renderRef.current) {
        renderRef.current = false
        return 
      }
      console.log('abc')
    }, [])
  
    return (<h1>hello world</h1>)
  }
  
  export default Index
  ```

  