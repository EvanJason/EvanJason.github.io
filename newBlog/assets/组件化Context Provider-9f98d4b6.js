const t={title:"组件化Context Provider",categories:["React","Context Provider"],tags:["React","Context Provider"],date:"2023-04-13",author:"深海如梦",excerpt:"组件化Context Provider"},e=`<h1>组件化Context Provider</h1>
<pre><code class="language-tsx">import React, { useState } from &quot;react&quot;;

//声明
interface AppStateValue {
    username: string;
    shoppingCart: { items: { id: number; name: string }[] };
}

//初始值
const defaultContextValue: AppStateValue = {
    username: &quot;&quot;,
    shoppingCart: { items: [] },
};

//子组件调用
export const appContext = React.createContext(defaultContextValue);

// 更新上下文值
export const appSetStateContext = React.createContext&lt;
    React.Dispatch&lt;React.SetStateAction&lt;AppStateValue&gt;&gt; | undefined
&gt;(undefined);

//父组件调用
export const AppStateProvider: React.FC = (props: any) =&gt; {
    const [state, setState] = useState(defaultContextValue);

    return (
        &lt;appContext.Provider value={state}&gt;
            &lt;appSetStateContext.Provider value={setState}&gt;
                {props.children}
            &lt;/appSetStateContext.Provider&gt;
        &lt;/appContext.Provider&gt;
    );
};


/* -------------------------------使用示例---------------------------------- */


//父组件
/*
    &lt;AppStateProvider&gt;
        &lt;App /&gt;
    &lt;/AppStateProvider&gt;
*/

//子组件

/*
    // 组件内部
    hook（函数式组件）内可直接获取
    const globalValueObj = useContext(appContext);
    const globalSetState = useContext(appSetStateContext)
    if(globalSetState) { // 思考: 同学们可以想一想如何化简这里的代码
      globalSetState(state =&gt; {
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
    &lt;appContext.Consumer&gt;
        {(globalValueObj) =&gt; {
            内容
            {globalValueObj.username}
        })
    &lt;/appContext.Consumer&gt;
*/
</code></pre>
`;export{t as attributes,e as html};
