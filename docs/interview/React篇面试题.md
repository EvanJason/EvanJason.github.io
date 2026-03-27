---
title: React篇面试题
categories:
  - interview
tags:
  - interview
date: "2026-03-27"
authors: lin
excerpt: React篇面试题

---

# React篇面试题

## 一、React 基础

### 1. 什么是 React？它的优缺点是什么？

**React 简介：**
React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开源并维护。它采用组件化思想，使用虚拟 DOM 技术，主要用于开发单页应用（SPA）。

**优点：**
- **组件化开发**：代码可复用、易维护、易测试
- **虚拟 DOM**：性能优化，减少直接操作真实 DOM 的开销
- **单向数据流**：数据流向清晰，易于调试
- **JSX 语法**：JavaScript 与 HTML 结合，开发效率高
- **生态系统强大**：丰富的第三方库和工具支持
- **跨平台能力**：React Native 可开发移动应用

**缺点：**
- **学习曲线较陡**：需要掌握 JSX、组件生命周期、Hooks 等概念
- **体积较大**：相比 Vue 等框架，React 核心库体积较大
- **过度依赖第三方库**：路由、状态管理等需要额外安装
- **频繁的版本更新**：API 变化较快，需要持续学习

### 2. React 的生命周期有哪些？（Class 组件）

**React 16.3 之前的生命周期：**
```
mounting（挂载阶段）:
  - componentWillMount
  - render
  - componentDidMount

updating（更新阶段）:
  - componentWillReceiveProps
  - shouldComponentUpdate
  - componentWillUpdate
  - render
  - componentDidUpdate

unmounting（卸载阶段）:
  - componentWillUnmount
```

**React 16.4 之后的生命周期：**
```
mounting（挂载阶段）:
  - constructor
  - static getDerivedStateFromProps
  - render
  - componentDidMount

updating（更新阶段）:
  - static getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate

unmounting（卸载阶段）:
  - componentWillUnmount
```

**废弃的三个生命周期及原因：**
- `componentWillMount`：在 SSR 场景下会被调用两次，容易导致 bug
- `componentWillReceiveProps`：容易产生副作用，不利于异步渲染
- `componentWillUpdate`：同上，无法安全地访问 DOM

**替代方案：**
- `componentWillMount` → `constructor` 或 `componentDidMount`
- `componentWillReceiveProps` → `static getDerivedStateFromProps` 或在 `componentDidUpdate` 中处理
- `componentWillUpdate` → `getSnapshotBeforeUpdate` 或 `componentDidUpdate`

### 3. React Hooks 有哪些？分别有什么作用？

**常用 Hooks：**

#### （1）useState - 状态管理
```javascript
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
```

#### （2）useEffect - 副作用处理
```javascript
// 组件挂载和每次更新时执行
useEffect(() => {
  console.log('组件挂载或更新');
  return () => {
    console.log('组件卸载或下次更新前');
  };
});

// 只在挂载时执行一次
useEffect(() => {
  console.log('组件挂载');
}, []);

// 依赖特定变量
useEffect(() => {
  console.log('count 变化时执行');
}, [count]);
```

#### （3）useContext - 上下文订阅
```javascript
const theme = useContext(ThemeContext);
```

#### （4）useReducer - 复杂状态管理
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

#### （5）useCallback - 函数记忆化
```javascript
const handleClick = useCallback(() => {
  console.log('clicked');
}, [dependency]);
```

#### （6）useMemo - 值记忆化
```javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

#### （7）useRef - 引用 DOM 或保存可变值
```javascript
const inputRef = useRef(null);
const timerRef = useRef(null);
```

#### （8）useImperativeHandle - 自定义暴露给父组件的方法
```javascript
useImperativeHandle(ref, () => ({
  focus: () => {
    inputRef.current.focus();
  }
}));
```

#### （9）useLayoutEffect - DOM 变更后同步执行
```javascript
useLayoutEffect(() => {
  // 测量 DOM 布局
  const rect = element.getBoundingClientRect();
}, [element]);
```

#### （10）useDebugValue - 调试工具显示标签
```javascript
useDebugValue(isOnline ? 'Online' : 'Offline');
```

### 4. useEffect 和 useLayoutEffect 的区别？

| 特性 | useEffect | useLayoutEffect |
|------|-----------|----------------|
| **执行时机** | 渲染完成后异步执行（不阻塞渲染） | DOM 变更后同步执行（阻塞渲染） |
| **适用场景** | 数据获取、订阅、日志记录 | DOM 测量、动画、同步更新 |
| **性能影响** | 不影响页面渲染性能 | 可能影响渲染性能 |
| **推荐使用** | 99% 的场景 | 需要同步测量 DOM 的特殊场景 |

```javascript
// ✅ useEffect - 数据请求
useEffect(() => {
  fetchData().then(setData);
}, []);

// ✅ useLayoutEffect - DOM 测量
useLayoutEffect(() => {
  const { width } = containerRef.current.getBoundingClientRect();
  setWidth(width);
}, []);
```

### 5. useMemo 和 useCallback 的区别和使用场景？

**区别：**
- `useMemo`：缓存计算结果（值）
- `useCallback`：缓存函数引用

**使用场景：**

#### useMemo 使用场景：
```javascript
// 1. 昂贵的计算
const filteredList = useMemo(() => {
  return list.filter(item => item.status === status);
}, [list, status]);

// 2. 对象/数组作为依赖
const styleObj = useMemo(() => ({ color: 'red', fontSize: '14px' }), []);
```

#### useCallback 使用场景：
```javascript
// 1. 传递给子组件的回调函数（避免不必要的重渲染）
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);

// 2. 作为其他 Hook 的依赖
const fetchUser = useCallback((userId) => {
  return api.getUser(userId);
}, []);

useEffect(() => {
  fetchUser(1).then(setUser);
}, [fetchUser]);
```

**注意事项：**
- 不要过度使用，只有在性能优化必要时才使用
- 原始值不需要使用 useMemo/useCallback
- 依赖数组要写完整，避免遗漏

### 6. React 合成事件的原理是什么？

**合成事件（SyntheticEvent）原理：**

1. **事件委托**：React 不会直接在每个 DOM 节点上绑定事件，而是在根节点（document 或 root）上统一监听
2. **事件池化**：合成事件对象会被复用，提高性能（React 17 后已移除）
3. **跨浏览器兼容**：统一了不同浏览器的事件 API
4. **自动阻止默认行为**：某些事件会自动调用 `preventDefault()`

**事件流程：**
```
用户点击 → 原生事件触发 → React 捕获 → 
创建合成事件 → 遍历虚拟 DOM 树 → 
找到对应组件的事件处理函数 → 执行
```

```javascript
// 示例：事件委托机制
<div onClick={(e) => console.log('div 点击')}>
  <button onClick={(e) => console.log('button 点击')}>点击</button>
</div>
// 输出顺序：button 点击 → div 点击（冒泡）
```

**React 17 事件系统变化：**
- 事件不再挂载到 `document`，而是挂载到 root DOM 容器
- 移除了事件池化机制
- 所有事件都变为原生事件

### 7. 受控组件和非受控组件的区别？应用场景？

**受控组件（Controlled Component）：**
- 表单数据由 React state 管理
- 通过 `value` 和 `onChange` 控制输入

```javascript
function ControlledInput() {
  const [value, setValue] = useState('');
  
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

**非受控组件（Uncontrolled Component）：**
- 表单数据由 DOM 自身管理
- 使用 `ref` 来获取值

```javascript
function UncontrolledInput() {
  const inputRef = useRef(null);
  
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  
  return (
    <input
      defaultValue="初始值"
      ref={inputRef}
    />
  );
}
```

**对比：**

| 特性 | 受控组件 | 非受控组件 |
|------|----------|------------|
| **数据来源** | React state | DOM |
| **即时验证** | ✅ 支持 | ❌ 不支持 |
| **条件禁用** | ✅ 支持 | ❌ 困难 |
| **强制格式** | ✅ 支持 | ❌ 不支持 |
| **性能** | 每次输入都重渲染 | 性能更好 |
| **代码量** | 较多 | 较少 |

**应用场景：**
- **受控组件**：实时验证、条件禁用按钮、强制输入格式、多个字段联动
- **非受控组件**：简单表单、文件上传、集成非 React 库

## 二、React 进阶

### 8. setState 是同步还是异步的？为什么？

**答案：既有同步也有异步，取决于调用环境**

**异步场景：**
- React 控制的事件处理函数中
- 生命周期函数中

```javascript
// 异步场景
handleClick = () => {
  this.setState({ count: this.state.count + 1 });
  console.log(this.state.count); // 旧值
};
```

**同步场景：**
- `setTimeout` 回调中
- 原生 DOM 事件处理函数中
- Promise 回调中

```javascript
// 同步场景
setTimeout(() => {
  this.setState({ count: this.state.count + 1 });
  console.log(this.state.count); // 新值
}, 0);
```

**原因：**
- React 为了性能优化，会批量更新 state
- 在 React 控制的环境中，setState 会将更新操作放入队列，批量处理
- 在非 React 控制的环境中，无法批量更新，只能同步执行

**React 18 后的变化：**
- 引入了自动批处理（Automatic Batching）
- setTimeout、Promise 中的 setState 也会批量更新
- 可通过 `flushSync` 强制同步更新

```javascript
import { flushSync } from 'react-dom';

handleClick = () => {
  flushSync(() => {
    this.setState({ count: this.state.count + 1 });
  });
  console.log(this.state.count); // 新值
};
```

### 9. React 性能优化方法有哪些？

**组件层面优化：**

#### （1）使用 React.memo 避免不必要的重渲染
```javascript
const Child = React.memo(({ data }) => {
  console.log('Child rendered');
  return <div>{data}</div>;
});
```

#### （2）使用 useMemo 和 useCallback
```javascript
const expensiveValue = useMemo(() => compute(a, b), [a, b]);
const handleClick = useCallback(() => {}, []);
```

#### （3）使用 PureComponent
```javascript
class Parent extends PureComponent {
  render() {
    return <Child data={this.state.data} />;
  }
}
```

**代码层面优化：**

#### （4）路由懒加载
```javascript
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
```

#### （5）列表虚拟化
```javascript
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={10000}
  itemSize={35}
  width="100%"
>
  {({ index, style }) => <Item index={index} style={style} />}
</FixedSizeList>
```

#### （6）防抖节流
```javascript
const debouncedSearch = useMemo(
  () => debounce((query) => handleSearch(query), 300),
  [handleSearch]
);
```

**构建优化：**

#### （7）代码分割
```javascript
// webpack 配置
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors'
      }
    }
  }
}
```

#### （8）Tree Shaking
```javascript
// 使用 ES6 模块语法
import { Button } from 'antd'; // ✅
import * as Antd from 'antd'; // ❌
```

### 10. React 中 keys 的作用是什么？为什么不能用 index？

**key 的作用：**
- 帮助 React 识别哪些元素改变了、添加了或移除了
- 用于虚拟 DOM 的 diff 算法优化
- 保持组件状态的稳定性

**为什么不建议用 index 作为 key：**

```javascript
// ❌ 错误示例
{items.map((item, index) => (
  <Item key={index} data={item} />
))}

// ✅ 正确示例
{items.map((item) => (
  <Item key={item.id} data={item} />
))}
```

**问题场景：**
```javascript
// 初始状态
items: [{id: 1, text: 'A'}, {id: 2, text: 'B'}, {id: 3, text: 'C'}]

// 删除第一个元素后
items: [{id: 2, text: 'B'}, {id: 3, text: 'C'}]

// 如果使用 index 作为 key:
// React 认为 key=0 的元素还在，只是内容从 A 变成了 B
// 导致不必要的更新和潜在的状态混乱
```

**可以使用 index 的情况：**
- 列表是静态的，不会增删改
- 列表没有排序功能
- 列表项没有内部状态

### 11. 高阶组件（HOC）是什么？使用场景？

**定义：**
高阶组件是一个函数，接收一个组件并返回一个新组件。

```javascript
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
    }, []);
    
    return <WrappedComponent {...props} />;
  };
}

// 使用
const LoggedHome = withLogging(Home);
```

**使用场景：**

#### （1）权限控制
```javascript
function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const { isLogin } = useAppContext();
    
    if (!isLogin) {
      return <LoginRedirect />;
    }
    
    return <WrappedComponent {...props} />;
  };
}
```

#### （2）数据获取
```javascript
function withData(WrappedComponent, fetchData) {
  return function DataComponent(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      fetchData().then(setData).finally(() => setLoading(false));
    }, []);
    
    if (loading) return <Loading />;
    return <WrappedComponent {...props} data={data} />;
  };
}
```

#### （3）代码复用
```javascript
function withToggle(WrappedComponent) {
  return function ToggleComponent(props) {
    const [on, setOn] = useState(false);
    return (
      <WrappedComponent
        {...props}
        on={on}
        toggle={() => setOn(!on)}
      />
    );
  };
}
```

**HOC 的缺点：**
- 组件嵌套层级深，难以调试
- 静态方法丢失
- ref 传递问题
- 命名冲突

**现代替代方案：**
- 使用 Custom Hooks
- 使用 Render Props

### 12. Redux 的工作原理？核心概念有哪些？

**Redux 三大原则：**
1. **单一数据源**：整个应用的 state 存储在一棵 object tree 中
2. **State 只读**：不能直接修改 state，只能通过 action 触发
3. **纯函数修改**：reducer 必须是纯函数，返回新的 state

**核心概念：**

#### （1）Store - 数据存储
```javascript
import { createStore } from 'redux';
const store = createStore(reducer);
```

#### （2）Action - 动作描述
```javascript
const ADD_TODO = 'ADD_TODO';

{
  type: ADD_TODO,
  text: 'Learn Redux'
}
```

#### （3）Reducer - 状态变更逻辑
```javascript
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    default:
      return state;
  }
}
```

#### （4）Dispatch - 触发 action
```javascript
store.dispatch({ type: ADD_TODO, text: 'Learn Redux' });
```

#### （5）Subscribe - 订阅状态变化
```javascript
store.subscribe(() => {
  console.log('state changed:', store.getState());
});
```

**Redux Toolkit（推荐用法）：**
```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});
```

### 13. Context API 和 Redux 如何选择？

**Context API 适用场景：**
- 中小型项目
- 简单的全局状态（主题、语言、用户信息）
- 不需要时间旅行调试
- 不想引入额外依赖

```javascript
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}
```

**Redux 适用场景：**
- 大型复杂项目
- 频繁变更的全局状态
- 需要时间旅行调试
- 需要中间件支持（thunk、saga）
- 多个组件共享复杂状态

**选择建议：**
```
简单状态 → useState/useReducer
     ↓
跨组件共享 → Context API
     ↓
复杂状态管理 → Redux/Zustand/Recoil
```

### 14. React 18 有哪些新特性？

#### （1）并发渲染（Concurrent Rendering）
```javascript
startTransition(() => {
  setSearchQuery(input);
});
```

#### （2）自动批处理（Automatic Batching）
```javascript
// React 17
setTimeout(() => {
  setCount(c => c + 1); // 触发重渲染
  setFlag(f => !f);     // 再次触发重渲染
}, 0);

// React 18 - 只会触发一次重渲染
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
}, 0);
```

#### （3）useTransition
```javascript
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  const value = e.target.value;
  setInput(value);
  
  startTransition(() => {
    setSearchQuery(value);
  });
}
```

#### （4）useDeferredValue
```javascript
const deferredQuery = useDeferredValue(query);

useEffect(() => {
  // 使用 deferredQuery 进行昂贵操作
}, [deferredQuery]);
```

#### （5）Suspense 支持服务端渲染
```javascript
<Suspense fallback={<Loading />}>
  <ProfilePage />
</Suspense>
```

#### （6）createRoot
```javascript
// React 17
ReactDOM.render(<App />, document.getElementById('root'));

// React 18
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

#### （7）useId - 生成唯一 ID
```javascript
function PasswordField() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Password:</label>
      <input id={id} type="password" />
    </>
  );
}
```

## 三、React 实战

### 15. 如何在 useEffect 中正确处理异步请求？

**错误示例：**
```javascript
// ❌ useEffect 不支持 async/await
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);
```

**正确写法：**

#### （1）IIFE（立即调用函数表达式）
```javascript
useEffect(() => {
  (async () => {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      setError(error);
    }
  })();
}, []);
```

#### （2）单独定义函数
```javascript
useEffect(() => {
  async function fetchDataAsync() {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      setError(error);
    }
  }
  
  fetchDataAsync();
}, []);
```

#### （3）使用 Promise.then
```javascript
useEffect(() => {
  fetchData()
    .then(setData)
    .catch(setError);
}, []);
```

**竞态条件处理：**
```javascript
useEffect(() => {
  let cancelled = false;
  
  async function load() {
    const data = await fetchData();
    if (!cancelled) {
      setData(data);
    }
  }
  
  load();
  
  return () => {
    cancelled = true;
  };
}, [userId]);
```

**使用 AbortController 取消请求：**
```javascript
useEffect(() => {
  const controller = new AbortController();
  
  async function load() {
    try {
      const data = await fetchData({ signal: controller.signal });
      setData(data);
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error);
      }
    }
  }
  
  load();
  
  return () => {
    controller.abort();
  };
}, [userId]);
```

### 16. React Hooks 的闭包陷阱是什么？如何解决？

**闭包陷阱示例：**
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleAlert = () => {
    setTimeout(() => {
      alert(count); // 总是弹出旧值
    }, 3000);
  };
  
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={handleAlert}>Alert</button>
    </>
  );
}
```

**原因：**
- `handleAlert` 函数在创建时捕获了当时的 `count` 值
- 即使 `count` 更新了，`handleAlert` 仍然使用旧的值

**解决方案：**

#### （1）使用 useRef
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  
  useEffect(() => {
    countRef.current = count;
  }, [count]);
  
  const handleAlert = () => {
    setTimeout(() => {
      alert(countRef.current); // 最新值
    }, 3000);
  };
  
  return <button onClick={handleAlert}>Alert</button>;
}
```

#### （2）使用函数式更新
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  return <button onClick={handleIncrement}>+1</button>;
}
```

#### （3）将依赖添加到依赖数组
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(count); // 每次 count 变化都会重新设置定时器
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>+1</button>;
}
```

### 17. 父组件如何调用子组件的方法？

#### （1）使用 forwardRef 和 useImperativeHandle
```javascript
// 子组件
const Input = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    getValue: () => {
      return inputRef.current.value;
    }
  }));
  
  return <input ref={inputRef} {...props} />;
});

// 父组件
function Parent() {
  const childRef = useRef(null);
  
  const handleClick = () => {
    childRef.current.focus();
    const value = childRef.current.getValue();
  };
  
  return (
    <>
      <Input ref={childRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}
```

#### （2）使用回调 props
```javascript
// 子组件
function Child({ onMethodCall }) {
  const method = () => {
    console.log('child method called');
  };
  
  useEffect(() => {
    onMethodCall(method);
  }, [onMethodCall]);
  
  return <div>Child</div>;
}

// 父组件
function Parent() {
  const childMethodRef = useRef(null);
  
  const handleClick = () => {
    childMethodRef.current?.();
  };
  
  return (
    <>
      <Child onMethodCall={(method) => childMethodRef.current = method} />
      <button onClick={handleClick}>Call Child Method</button>
    </>
  );
}
```

### 18. 如何进行 React 错误边界处理？

**Class 组件错误边界：**
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // 可以上报错误到监控服务
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.toString()}</p>
          <button onClick={() => window.location.reload()}>
            Reload
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// 使用
<ErrorBoundary>
  <ChildComponent />
</ErrorBoundary>
```

**函数组件错误处理（React 18+）：**
```javascript
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {/* reset logic */}}
    >
      <ChildComponent />
    </ErrorBoundary>
  );
}
```

### 19. React 服务端渲染（SSR）怎么做？原理是什么？

**SSR 原理：**
1. 服务器端渲染 React 组件为 HTML 字符串
2. 发送到客户端，快速展示首屏内容
3. 客户端下载 JS bundle 后，进行 hydration（水合）
4. 页面变为可交互状态

**Next.js 实现 SSR：**
```javascript
// pages/index.js
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return {
    props: {
      data
    }
  };
}

function HomePage({ data }) {
  return <div>{data.title}</div>;
}

export default HomePage;
```

**手动实现 SSR：**
```javascript
// server.js
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const app = express();

app.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000);
```

**hydration（客户端激活）：**
```javascript
// client.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);
```

**SSR 优缺点：**
- ✅ SEO 友好
- ✅ 首屏加载快
- ❌ 服务器压力大
- ❌ 开发复杂度增加

### 20. React 项目目录结构如何组织？

**推荐目录结构：**
```
src/
├── components/         # 通用组件
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── Modal/
├── pages/             # 页面组件
│   ├── Home/
│   └── User/
├── hooks/             # 自定义 Hooks
│   ├── useFetch.ts
│   └── useLocalStorage.ts
├── services/          # API 服务
│   ├── api.ts
│   └── userApi.ts
├── store/             # 状态管理
│   ├── slices/
│   └── store.ts
├── utils/             # 工具函数
│   ├── format.ts
│   └── validate.ts
├── types/             # TypeScript 类型
│   └── index.ts
├── styles/            # 全局样式
│   └── variables.css
├── assets/            # 静态资源
│   └── images/
├── App.tsx
└── index.tsx
```

**按功能模块划分：**
```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── store/
│   └── user/
├── shared/
│   ├── components/
│   └── hooks/
└── app/
    ├── store.ts
    └── App.tsx
```

## 四、高频手写题

### 21. 手写 useState

```javascript
let state = [];
let cursor = 0;

function MyuseState(initialValue) {
  const _cursor = cursor;
  
  if (!state[_cursor]) {
    state[_cursor] = initialValue;
  }
  
  const setState = (newValue) => {
    state[_cursor] = newValue;
    render(); // 重新渲染
  };
  
  cursor++;
  return [state[_cursor], setState];
}

function render() {
  cursor = 0;
  // 模拟重新渲染
}
```

### 22. 手写 useEffect

```javascript
let lastDeps = null;

function MyUseEffect(callback, deps) {
  const currentDeps = deps;
  
  if (!lastDeps || !depsEqual(lastDeps, currentDeps)) {
    callback();
  }
  
  lastDeps = currentDeps;
}

function depsEqual(deps1, deps2) {
  if (!deps1 || !deps2) return false;
  if (deps1.length !== deps2.length) return false;
  return deps1.every((dep, i) => dep === deps2[i]);
}
```

### 23. 手写 memo

```javascript
function MyMemo(Component, propsAreEqual) {
  let prevProps = null;
  let prevResult = null;
  
  return function MemoizedComponent(props) {
    if (
      prevProps && 
      (!propsAreEqual || propsAreEqual(prevProps, props))
    ) {
      return prevResult;
    }
    
    prevProps = props;
    prevResult = <Component {...props} />;
    return prevResult;
  };
}

// 浅比较
function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (!obj1 || !obj2) return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  
  return true;
}
```

### 24. 手写防抖和节流

**防抖（Debounce）：**
```javascript
function debounce(fn, delay = 300) {
  let timer = null;
  
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 使用
input.addEventListener('input', debounce(handleInput, 300));
```

**节流（Throttle）：**
```javascript
function throttle(fn, interval = 300) {
  let lastTime = 0;
  
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// 使用
window.addEventListener('scroll', throttle(handleScroll, 300));
```

### 25. 手写发布订阅模式

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  // 订阅
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  // 发布
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => {
        callback.apply(this, args);
      });
    }
  }
  
  // 取消订阅
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(
        cb => cb !== callback
      );
    }
  }
  
  // 一次性订阅
  once(event, callback) {
    const wrapper = (...args) => {
      callback.apply(this, args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

// 使用
const emitter = new EventEmitter();

emitter.on('click', (data) => {
  console.log('clicked:', data);
});

emitter.emit('click', { x: 100, y: 200 });
```

---

## 总结

本文整理了 React 面试中的高频考点，涵盖：

1. **基础概念**：生命周期、Hooks、合成事件、受控/非受控组件
2. **进阶原理**：setState 机制、性能优化、key 的作用、HOC
3. **状态管理**：Redux 原理、Context API 对比
4. **新特性**：React 18 并发特性
5. **实战应用**：异步请求、闭包陷阱、错误边界、SSR
6. **手写代码**：核心 API 实现、设计模式

建议结合实际项目经验理解这些知识点，做到知其然也知其所以然。