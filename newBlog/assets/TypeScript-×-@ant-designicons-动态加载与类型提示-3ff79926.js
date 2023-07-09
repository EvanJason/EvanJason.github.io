const n={title:"TypeScript × @ant-design/icons 动态加载与类型提示",categories:["typeScript","antd","图标"],tags:["typeScript","antd","图标"],date:"2023-06-25",author:"深海如梦",excerpt:"TypeScript × @ant-design/icons 动态加载与类型提示"},t=`<h1>TypeScript × @ant-design/icons 动态加载与类型提示</h1>
<p>组件</p>
<pre><code class="language-tsx">import React from &quot;react&quot;;
import * as AllIcons from &quot;@ant-design/icons&quot;;
import CustomIcon from &quot;@ant-design/icons&quot;;

type PickProps&lt;T&gt; = T extends (props: infer P1) =&gt; any
    ? P1
    : T extends React.ComponentClass&lt;infer P2&gt;
    ? P2
    : unknown;

type AllKeys = keyof typeof AllIcons;
//  获取大写开头的导出们, 认为是组件
type PickCapitalizeAsComp&lt;K extends AllKeys&gt; = K extends Capitalize&lt;K&gt;
    ? K
    : never;
// ------------------------------------------------^ typescript 4.1+ --------
type IconNames = PickCapitalizeAsComp&lt;AllKeys&gt;;
// 没有 4.1 的可以手动排除 小写开头的方法们
// type IconNames = Exclude&lt;
//   AllKeys,
//   &quot;createFromIconfontCN&quot; | &quot;default&quot; | &quot;getTwoToneColor&quot; | &quot;setTwoToneColor&quot;
// &gt;;

export type PickIconPropsOf&lt;K extends IconNames&gt; = PickProps&lt;
    typeof AllIcons[K]
&gt;;

export interface CustomIconComponentProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
}

type componentProps = React.ComponentType&lt;CustomIconComponentProps | React.SVGProps&lt;SVGSVGElement&gt;&gt; | React.ForwardRefExoticComponent&lt;CustomIconComponentProps&gt;

// 这里将不再能用 FC 来包裹, 原因的话 也可以再开一篇来讲了
// 支持antd图标 name，支持自定义svg图标 component
const MoIcon = &lt;T extends IconNames, P extends Object = PickIconPropsOf&lt;T&gt;&gt;({
    name,
    component,
    ...props
}: {
    name?: T,
    component?: componentProps
} &amp; P
) =&gt; {
    if (component) {
        return &lt;CustomIcon component={component} /&gt;
    }
    const Comp = AllIcons[name] as React.ClassType&lt;any, any, any&gt;;
    return &lt;Comp {...props} /&gt;;
};

export default MoIcon;
</code></pre>
<h2>使用</h2>
<pre><code class="language-tsx">&lt;Icon name=&quot;AccountBookFilled&quot; /&gt;
</code></pre>
<blockquote>
<p>来源自：https://juejin.cn/post/6922086052027072520</p>
</blockquote>
`;export{n as attributes,t as html};
