---
categories:
  - React
  - Context Provider

tags:
  - React
  - Context Provider

date: 2023-04-13

author: 深海如梦

excerpt: 组件化Context Provider

---

# 组件化Context Provider



```tsx
import React, { useState } from "react";

//声明
interface AppStateValue {
    username: string;
    shoppingCart: { items: { id: number; name: string }[] };
}

//初始值
const defaultContextValue: AppStateValue = {
    username: "",
    shoppingCart: { items: [] },
};

//子组件调用
export const appContext = React.createContext(defaultContextValue);

// 更新上下文值
export const appSetStateContext = React.createContext<
    React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

//父组件调用
export const AppStateProvider: React.FC = (props: any) => {
    const [state, setState] = useState(defaultContextValue);

    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    );
};


/* -------------------------------使用示例---------------------------------- */


//父组件
/*
    <AppStateProvider>
        <App />
    </AppStateProvider>
*/

//子组件

/*
    // 组件内部
    hook（函数式组件）内可直接获取
    const globalValueObj = useContext(appContext);
    const globalSetState = useContext(appSetStateContext)
    if(globalSetState) { // 思考: 同学们可以想一想如何化简这里的代码
      globalSetState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
    globalValueObj.username

    （class组件）内需要通过appContext.Consumer获取
    <appContext.Consumer>
        {(globalValueObj) => {
            内容
            {globalValueObj.username}
        })
    </appContext.Consumer>
*/
```

