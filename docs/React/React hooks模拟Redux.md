# React hooks全局状态管理的实现过程(模拟Redux)

------


### 1. 创建 Redux Action

#### `src/store/actions.ts`

```typescript
export enum ActionType {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
}
```

#### `src/store/constants.ts`

```typescript
import { Dispatch } from 'react';

interface IUserInfo {
    username?: string;
    userId?: string
}

export interface IState {
    isLogin: boolean;
    userInfo: IUserInfo;
}
export interface IAction<P = {}> {
    type: string;
    payload?: P
}
export interface ICreateContext {
    state: IState;
    dispatch: Dispatch<IAction<Partial<IState>>>
}
export const initialState: IState = {
    isLogin: false,
    userInfo: {},
};
```



### 2. 创建 Redux Reducer

#### `src/store/reducer.ts`

```typescript
import { Reducer } from 'react';
import { ActionType } from './actions';
import { IAction, IState } from './constants';

export const appReducer: Reducer<IState, IAction> = (state, action) => {
    switch (action.type) {
        case ActionType.LOGIN:
            return { ...state, isLogin: true, ...action.payload };
        case ActionType.LOGOUT:
            return { ...state, isLogin: false, userInfo: {} };
        default:
            return state;
    }
};
```

### 3. 创建 Redux Store

#### `src/store/store.tsx`

```tsx
import { createContext, useContext, useReducer } from 'react';
import { ICreateContext, initialState } from './constants';
import { appReducer } from './reducer';

const AppContext = createContext<ICreateContext>({ state: initialState, dispatch: () => { } });

interface IAppProvider {
    children?: React.ReactNode
}

export const AppStore = ({ children }: IAppProvider) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
```

### 4. 应用

#### `src/App.tsx`

```tsx
import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { AppStore } from './store/store';
import { LoginComp } from './component/Login';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppStore>
          <LoginComp />
        </AppStore>
      </div>
    );
  }
}
```

#### `src/component/Login/index.tsx`

```typescript
import { Button, Space, Spin, Typography } from "antd";
import { useEffect, useState } from 'react';
import { ActionType } from '../../store/actions';
import { IState } from '../../store/constants';
import { useAppContext } from '../../store/store';
import './index.less';

export const LoginComp = () => {
    const { state, dispatch } = useAppContext()
    const [loading, setLoading] = useState(false)
    const { isLogin } = state
    const payload: IState = {
        isLogin: true,
        userInfo: { username: "lwl测试", userId: "test" },
    }

    useEffect(() => {
        checkLogin()
        return () => {
            setLoading(false)
        }
    }, [])

    const onLogin = () => {
        dispatch({
            type: ActionType.LOGIN,
            payload
        })
        localStorage.setItem("appState", JSON.stringify(payload))
        checkLogin()
    }

    // 模拟登录验证
    const checkLogin = () => {
        setLoading(true)
        // 这里模拟登录认证，需写入全局数据（例如用户信息、菜单等等）
        new Promise((resolve, reject) => {
            setTimeout(() => {
                const appState = JSON.parse(localStorage.getItem("appState") || "null")
                if (appState) {
                    dispatch({ type: ActionType.LOGIN, payload: appState })
                    return resolve("success")
                }
                return reject("error")
            }, 500)
        }).catch((err) => {
            console.log("err:", err)
            setLoading(false)
            onLogout()
        }).finally(() => {
            setLoading(false)
        })
    }

    const onLogout = () => {
        dispatch({ type: ActionType.LOGOUT })
        localStorage.removeItem("appState")
    }

    return <div className='app-wrapper'>
        {
            loading ? <Spin size={"large"} /> : <div>
                {
                    isLogin ? <Space direction='vertical'>
                        <Typography.Title level={2}>欢迎您，{state.userInfo.username}</Typography.Title>
                        <Button type="primary" onClick={onLogout}>退出登录</Button>
                    </Space> : <Space direction='vertical'>
                        <Typography.Title level={2}>请登录</Typography.Title>
                        <Button type="primary" onClick={onLogin}>登录</Button>
                    </Space>
                }
            </div>
        }
    </div>
}
```

### `5.解释`

这个示例展示了如何使用 React Hooks 结合 Context API 和 useReducer 来实现全局状态管理。让我们逐步解释这个示例的每个部分：

### 1. 创建 Redux Action

在 `src/store/actions.ts` 中定义了一个枚举 `ActionType`，用来表示不同的 action 类型。

### 2. 创建 Redux Reducer

在 `src/store/reducer.ts` 中定义了一个名为 `appReducer` 的 reducer 函数，它接收当前状态和 action，并根据 action 类型来更新状态。

### 3. 创建 Redux Store

在 `src/store/store.tsx` 中创建了一个 `AppStore` 组件，它使用了 React 的 `createContext` 和 `useReducer` 来创建一个全局的应用状态和 dispatch 函数。在 `AppStore` 中，我们将状态和 dispatch 函数提供给 `AppContext.Provider`，这样整个应用中的组件都可以通过 `useAppContext` 自定义 hook 来获取状态和 dispatch 函数。

### 4. 应用

#### `src/App.tsx`

在 `src/App.tsx` 中，我们使用 `AppStore` 包裹了整个应用，并渲染了 `LoginComp` 组件。

#### `src/component/Login/index.tsx`

在 `src/component/Login/index.tsx` 中，我们定义了一个名为 `LoginComp` 的函数组件，它是一个简单的登录组件。在这个组件中，我们通过 `useAppContext` 自定义 hook 获取了全局状态 `state` 和 `dispatch` 函数。

在 `LoginComp` 组件中，我们使用了 `useState` 来定义了一个 `loading` 状态，用于控制加载状态。然后，在 `useEffect` 中调用了 `checkLogin` 函数来检查用户是否登录。在 `checkLogin` 函数中，我们模拟了一个登录验证的过程，如果用户已登录，就更新全局状态并保存到 localStorage 中。

在组件的 JSX 中，根据全局状态 `isLogin` 的值来渲染不同的内容，如果用户已登录，显示欢迎信息和退出按钮，否则显示登录按钮。

总结一下，这个示例中使用了 React Hooks 结合 Context API 和 useReducer 来实现了全局状态管理。`AppStore` 组件创建了一个全局的状态和 dispatch 函数，并通过 Context API 提供给整个应用。`LoginComp` 组件使用 `useAppContext` 自定义 hook 来获取全局状态和 dispatch 函数，实现了简单的登录逻辑，并根据登录状态来展示不同的内容。

这种方式的好处是，它可以将全局状态和状态更新逻辑集中管理，使得组件之间可以更方便地共享状态，并且减少了 prop drilling 的问题。同时，结合了 React Hooks 和 Context API，代码更加简洁和易读。

