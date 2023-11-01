---
title: react钩子函数

categories:
  - React

tags:
  - React

date: "2022-02-10"

author: 深海如梦

excerpt: react钩子函数

---

# react钩子函数

## react 函数组件的钩子函数（hook）

- hook函数是一个特殊的函数，目的是让函数组件也有类组件的特性
- 类组件中可能一个周期函数中有多个业务逻辑代码，不利于维护
- 类组件的学习成本相对较高，需要掌握es6的语法
- hook函数需要书写在函数组件最外层，也就是return之上

## 一、useState

- 用于在函数组件中保存状态的hook函数

- 参数

- 保存状态的初始值

- 返回值：一个数组

- 第一个保存当前保存的状态

- 第二个为修改当前保存状态的方法

- - 调用方法在参数中进行操作即可

- 这些方法为react8.0之后版本自带的方法，需要从react中引入

```js
// app.js
import React, {useState} from 'react'

function App() {
  const [state, setState] = useState(1)
  return (
    <div className="App">
      {state}
      <button onClick={() => {setState(state + 1)}}>+1</button>
      <button onClick={() => {setState(state - 1)}}>-1</button>
    </div>
  );
}

export default App;
```

### 1.1 useState注意点

- 最好在解构时创建有含义的变量
- 同一函数组建中可以保存多次调用useState方法保存状态
- 获取的setState参数可以传递方法，避免多次相同调用只执行一次的情况
- useState的数据是对象时，进行修改时需要解构其他的数据，然后再接上修改的属性名和数值

```js
import React, { useState } from 'react'

function App() {
  // const [state, setState] = useState(1)
  const [personState, setPersonState] = useState({ name: 'zhangsan', age: 22 })


  return (
    <div className="App">
      {personState.age}-name:{personState.name}
      <button onClick={() => { setPersonState({ ...personState, age: personState.age + 1 }) }}>+1</button>
      <button onClick={() => { setPersonState({ ...personState, age: personState.age - 1 }) }}>-1</button>
    </div>
  );
}

export default App;
```

## 二、useEffect

- 组件存在多个生命周期函数，组件挂在阶段、组件刷新阶段、组件卸载阶段

- useEffect相当于是这三个生命周期函数的集合

- useEffect第一个参数是内部传入的是一个方法

- - 直接操作的是在组件挂载或者刷新才会触发的操作
  - return执行的是在卸载时触发的内容，前提是return的是一个方法函数，否则依旧渲染

- 第二个参数是一个数组，内部存储数据更新**需要更新**的数据，也就是useEffect执行需要依赖于某一个参数

```js
// app组件控制引入组件的显示


import React, {useState, useEffect} from 'react'

function Header() {
  const [personState, setPersonState] = useState({name: 'zhangsan', age: 22})

  useEffect(() => {
    console.log('挂载与更新操作完成了');
    return () => {
      console.log('卸载时触发')
    }
  }, [personState.name])
  return (
    <div>
      <p>{personState.name}<button onClick={() => {setPersonState({...personState,name: '李四'})}}>修在姓名</button></p>
      <p>{personState.age} <button onClick={() => {setPersonState({...personState, age: personState.age + 1})}}>修在年龄</button></p>

    </div>
  )
}


function App() {
  const [showState, setShowState] = useState(true)
  return (
    <div>
      {showState && <Header />}
      <button onClick={() => {setShowState(!showState)}}>切换</button>
    </div>
  );
}

export default App;
```

### 2.1 useEffect优点

- 钩子函数是可以多次被重复调用的

```js
import React, {useState, useEffect} from 'react'

function Header() {
  const [personState, setPersonState] = useState({name: 'zhangsan', age: 22})

useEffect(() => {
  // 事件监听添加操作
  console.log('事件监听添加操作');
  return () => {
    console.log('移出事件监听');
  }
})
useEffect(() => {
  // 网络信息请求
  console.log('网络信息请求操作');
})
useEffect(() => {
  // 判断是否登录
  console.log('判断是否登录');
})

  useEffect(() => {
    console.log('挂载与更新操作完成了');
    return () => {
      console.log('卸载时触发')
    }
  }, [personState.name])
  return (
    <div>
      <p>{personState.name}<button onClick={() => {setPersonState({...personState,name: '李四'})}}>修在姓名</button></p>
      <p>{personState.age} <button onClick={() => {setPersonState({...personState, age: personState.age + 1})}}>修在年龄</button></p>

    </div>
  )
}


function App() {
  const [showState, setShowState] = useState(true)
  return (
    <div>
      {showState && <Header />}
      <button onClick={() => {setShowState(!showState)}}>切换</button>
    </div>
  );
}

export default App;
```



![img](E:\图片\v2-2a151331c6cec079c5b139a2bcf5f2be_720w.webp)

## 三、useContext

- 目的在于实现父组件与子组件之间的数据传递
- 传统的数据传递方式是通过引入createContext({})，进行创建，然后通过新方法Provider和UserConsumer进行传递和使用
- Provider需要包裹要传递的组件，并通过标签内的属性进行传递
- UserConsumer在子组件中包裹return的组件内容，并且可以通过jsx语法进行传参，参数是Provider传递的数据
- 如果存在多层不同数据的Provider数据的嵌套，那么子组件的书写会类似于回调地狱
- 新的方法通过useContext进行操作，不过父组件依旧需要Provider进行数据传递，直接在子组件中声明变量保存useContext()，参数为createContext创建的数据，可以多次声名
- 内部可以通过变量名直接使用

```js
import React, { createContext, useContext } from 'react'

const UserContext = createContext({})

function Header() {
  const useInfo = useContext(UserContext)
  return (
    // <Consumer>
    //   {
    //     // item 代表 value传递的数据
    //     item => {
    //       return (
    //         <div>
    //           <p>{item.name}</p>
    //           <p>{item.age}</p>
    //         </div>
    //       )
    //     }
    //   }
    // </Consumer>
    <div>
      <p>{useInfo.name}</p>
      <p>{useInfo.age}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <UserContext.Provider value={{ name: 'zs', age: 22 }}>
        <Header />
      </UserContext.Provider>
      根组件
    </div>
  );
}

export default App;
```

## 四、useReducer

- 从字面意思来说它是redux的替代方案，但是真正替换的是useState
- 在不同组件之中，数据是相互隔绝的，但是类似的方法没必要各自声名一次，于是乎便有了useReducer
- useReducer 在使用时需要传递两个参数
- 第一个参数是将来处理数据的手段，当作reducer即可
- 第二个参数是要操作的数值，当作store创建后，通过Provider传递到使用的组件，然后调用reducer的dispatch
- 需要解构的是数据和指令触发的方法

```js
import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, age: state.age + 1 }
    case 'remove':
      return { ...state, age: state.age - 1 }
    default:
      return state
  }
}

function Home() {
  const [useState, dispatch] = useReducer(reducer, { age: 12 })
  return (
    <div>
      <p>数据：{useState.age}</p>
      <button onClick={() => { dispatch({ type: 'add' }) }}>+1</button>
      <button onClick={() => { dispatch({ type: 'remove' }) }}>-1</button>
    </div >
  )
}

function About() {
  const [useState, dispatch] = useReducer(reducer, { age: 20 })
  return (
    <div>
      <p>数据：{ useState.age }</p>
      <button onClick={() => {dispatch({type: 'add'})}}>+1</button>
      <button onClick={() => {dispatch({type: 'remove'})}}>-1</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Home />
      <hr />
      <About />
    </div>
  );
}

export default App;
```

## 五、useCallback

- 目的是用于优化代码
- 当组件发生更新时，组件一定会被重新渲染，并且担当引入子组件时，子组件不发生变化也会重新渲染组件，因此会造成性能的浪费，于是引入了memo插件
- memo包裹组件并返回包装后的组件，子组件内部数据没有改变就不会进行渲染

```js
import React, { memo, useState } from 'react'

function Home() {
  console.log('触发Home刷新');
  return (
    <div>Home组件</div>
  )
}
function About() {
  console.log('触发About刷新');
  return (
    <div>About组件</div>
  )
}

const MemoHome = memo(Home)
const MemoAbout = memo(About)

function App() {
  console.log('app进行刷新');
  const [numState, setNumState] = useState(10)
  const [ageState, setAgeState] = useState(20)
  return (
    <div>
      <p>数据：{numState}</p>
      <button onClick={() => { setNumState(numState + 1) }}>+1</button>
      <button onClick={() => { setNumState(numState - 1) }}>-1</button>
      <hr />
      <p>数据：{ageState}</p>
      <button onClick={() => { setAgeState(ageState + 1) }}>+1</button>
      <button onClick={() => { setAgeState(ageState - 1) }}>-1</button>
      <hr />
      <MemoAbout />
      <hr />
      <MemoHome />
    </div>

  );
}

export default App;
```

- 当某一个子组件重新渲染时，所有的子组件都会被重新渲染
- 原因是因为子组件重新渲染，父组件也一定会重新渲染，父组件中的数据和方法也会重新渲染，所有传递的数据都会发生变化，虽说名称及数值是一样的，但是存储的地址是变化的，因此所有的子组件都会重新渲染
- 因此需要使用useCallback， useCallback有两个参数，并返回函数
- 参数一是函数方法，函数中的数据要有以来的 数据
- 参数二是依赖配置，用于存储触发事件的数据

```js
import React, { memo, useCallback, useState } from 'react'

function Home(props) {
  console.log('触发Home刷新');
  return (
    <div>
      <div>Home组件</div>
      <button onClick={() => { props.value[1](props.value[0] + 1) }}>+1</button>
      <button onClick={() => { props.value[1](props.value[0] - 1) }}>-1</button>
    </div>
  )
}
function About(props) {
  console.log('触发About刷新');
  return (
    <div>
      <div>About组件</div>
      <button onClick={() => { props.value[1](props.value[0] + 1) }}>+1</button>
      <button onClick={() => { props.value[1](props.value[0] - 1) }}>-1</button>
    </div>
  )
}

const MemoHome = memo(Home)
const MemoAbout = memo(About)

function App() {
  console.log('app进行刷新');
  const [numState, setNumState] = useState(10)
  const [ageState, setAgeState] = useState(20)
  useCallback(() => {
    setAgeState(numState)
  }, [numState])
  return (
    <div>
      <p>数据：{numState}</p>
      <hr />
      <p>数据：{ageState}</p>


      <hr />
      <MemoAbout value={[numState, setNumState]} />
      <hr />
      <MemoHome value={[ageState, setAgeState]} />
    </div>

  );
}

export default App;
```

## 六、useMemo

- 内部接收两个参数
- 参数1 是函数方法，并且方法返回的是什么，变量接收的就是什么
- 参数2 是是否重新渲染的依赖数组
- 相比而言，比useCallback传递的数据要多

```js
import React, { useMemo, useState } from 'react'


function App() {
  console.log('app进行刷新');
  function getData() {
    console.log('数据刷新');
    let data = 0
    for(let i = 0; i < 100; i++){
      data += i
    }
    return data
  }

  const [numState, setNumState] = useState(10)
  let num = useMemo(() => {
    return getData()
  }, [])
  return (
    <div>
      <p>数据：{numState}</p>
      <button onClick={() => {setNumState(numState + 1)}}>修改</button>
      <p>数据：{num}</p>
    </div>

  );
}

export default App;
```

## 七、useRef

- 获取元素的相关操作
- 通过createRef（）创建给ref属性赋值的信息，创建的信息中的current属性存储的就是当前的元素节点
- 函数组件无法通过该方法获取节点
- useRef（）与createRef（）几乎相同，但是useRef可以保存数据，依旧通过变量名.current进行获取
- useRef保存的数据，除非手动修改，不然不会发生变化

```js
import React, { useRef, useState } from 'react'

function App() {
  const [numState, setNumSate] = useState(10)
  const op = useRef(numState)
  console.log('app进行刷新');

  return (
    <div>
      <p>p元素{numState}</p>
      <p>p元素{op.current}</p>
      <button onClick={() => {setNumSate(numState + 1)}}>点击</button>
    </div>

  );
}

export default App;
```

## 八、useImperativeHandle的使用

- 子组件中使用useImperativehandle返回的数据是在父组件中创建的useRef的数据
- 可以通过该方法返回新的方法，并在外部执行

```js
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function Home(props, Ohome) {
  const inner = useRef()
  useImperativeHandle(Ohome, () => {
    return {
      reviseData() {
        inner.current.value = '123'
      }
    }
  })
  return (
    <div>
      <h2>home组件</h2>
      <input ref={inner} />
    </div>
  )
}

function App() {
  const oHome = useRef()
  console.log('app进行刷新');
  const ForwardHome = forwardRef(Home)
  function getEle() {
    console.log(oHome.current);
    oHome.current.reviseData()
  }
  return (
    <div>
      <ForwardHome ref={oHome} />
      <button onClick={() => { getEle() }}>点击</button>
    </div>

  );
}

export default App;
```

## 九、useLayoutEffect

- 和useEffect相似度很高，只是一些细节不同
- useLayouteffect先于useEffect执行

## 十、自定义Hooks实现

- 只要是use开头的函数都会默认是钩子函数
- 钩子函数必须在组件的最外层，但是可以在钩子函数中使用钩子函数

```js
import React, {  useEffect, useState } from 'react'

function useAddListener() {
  useEffect(() => {
    console.log('home, 组件挂载 | 更新');
    return () => {
      console.log('home 卸载');
    }
  })
}

function Home() {
  useAddListener()
  return (
    <div>
      home组件
    </div>
  )
}
function About() {
  return (
    <div>
      about组件
    </div>
  )
}

function App() {
  const [isshowState, setIsShow] = useState(true)
  return (
    <div>
      {isshowState && <Home />}
      <About />
      <button onClick={() => { setIsShow(!isshowState) }}>切换</button>
    </div>

  );
}

export default App;
```