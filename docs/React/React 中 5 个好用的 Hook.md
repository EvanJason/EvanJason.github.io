---
title: React 中 5 个好用的 Hook

categories:
  - React
  - Hook

tags:
  - React
  - Hook

date: "2023-10-10"

author: 深海如梦

excerpt: React 中 5 个好用的 Hook

---

# React 中 5 个好用的 Hook

React.js 目前是前端开发人员十分流行的 JavaScript 库。它由 Facebook 发明，但作为开源项目提供给世界各地的开发人员和企业使用。

React 真正改变了我们构建单页面应用程序的方式，其中最大的特点之一是函数组件的应用。Hooks 是19年推出的，使我们能够在处理状态时使用函数组件而不是基于类的组件。除了内置的 hooks 外，React 还提供了实现自定义 hooks 的方法。

这里是一些我最喜欢的自定义 hooks 实现，您也可以在自己的应用程序和项目中使用。

## 1. useTimeout

使用这个hooks，我们可以使用声明式方法来实现setTimeout。首先，我们创建一个自定义hooks子，其中包含回调函数和延迟参数。然后，我们使用useRef hooks为回调函数创建一个引用。最后，我们两次使用useEffect，一次用于记住上次的回调函数，一次用于设置超时并清理。

以下是一个计时器的实现示例：

```tsx
import {useEffect} from 'react'
const useTimeout = (callback,delay)=>{
  const savedCallback=React.useRef();
  useEffect(()=>{
      savedCallback.current=callback
  },[callback]);
  
  useEffect(()=>{
      const tick=()=>{
          savedCallback.current();
      }
      if(delay!==null){
          let id=setTimeout(tick,delay);
          return ()=>clearTimeout(id);
      }
  },[delay])
}
```

## 2. useInterval

如果你想以声明性的方式实现setInterval，你可以使用名为useInterval的hooks。

首先，我们需要创建一个自定义hooks，接受一个回调函数和一个延迟时间作为参数。然后，我们使用useRef为回调函数创建一个ref。最后，我们使用useEffect来记住最新的回调函数，并设置和清除间隔。

该示例展示了自定义ResourceCounter的实现。

```tsx
import {useRef,useEffect} from 'react';

const useInterval = (callback,delay)=>{
  const savedCallback=React.useRef();
  useEffect(()=>{
      savedCallback.current=callback
  },[callback]);
  
  useEffect(()=>{
      const tick=()=>{
          savedCallback.current();
      }
      if(delay!==null){
          let id=setInterval(tick,delay);
          return ()=>clearInterval(id);
      }
  },[delay])
}
```

## 3. usePrevious

这是另一个可以在我们的应用程序中使用的很棒的自定义钩子。通过它，我们可以存储props或先前的状态。首先，我们创建一个接受值的自定义钩子。然后，我们使用useRef钩子为该值创建一个ref。最后，我们使用useEffect来记住最新的值。这个示例展示了一个计数器的实现。

```tsx
import {useRef,useEffect} from 'react';

const usePrevious=value=>{
    const ref=useRef();
    useEffect(()=>{
        ref.current=value
    }, [])
    return ref.current;
}
```

## 4. useClickInside

如果你需要处理包装组件内部的点击事件处理，那么useClickInside hooks就是适合你的选择。首先，我们创建一个自定义hooks，它接受一个ref和一个回调函数来处理点击事件。然后，我们使用useEffect来附加和清除点击事件。最后，我们使用useRef为需要被点击的组件创建一个ref，并将其传递给useClickInside hooks。

```tsx
import {useEffect} from 'react';

const useClickInside = (ref,callback)=>{
    const handleClick=e=>{
        if(ref.current&&ref.current.contains(e.target)){
            callback();
        }
    };
    useEffect(()=>{
        document.addEventListener('click',handleClick);
        return ()=>{
            document.removeEventListener('click',handleClick);
        }
    }, [])
}
```

## 5. useClickOutside

useClickOutside hooks与useClickInside hooks非常相似，但它处理的是在包装组件外部的点击，而不是内部的点击。因此，我们再次创建一个自定义hooks，它接受一个ref和一个回调函数来处理点击事件。然后，我们使用useEffect来附加和清除点击事件。最后，我们使用useRef为组件创建一个ref，并将其传递给useClickOutside hooks。

```tsx
import {useEffect}from 'react';
const useClickOutside = (ref,callback)=>{
    const handleClick=e=>{
        if(ref.current&&!ref.current.contains(e.target)){
            callback();
        }
    };
    useEffect(()=>{
        document.addEventListener('click', handleClick);
        return ()=>{
          document.removeEventListener('click', handleClick);
        }
    }, [])
}
```