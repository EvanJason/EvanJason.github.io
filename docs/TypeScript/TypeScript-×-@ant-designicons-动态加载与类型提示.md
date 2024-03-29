---
title: TypeScript × @ant-design/icons 动态加载与类型提示

categories:
  - typeScript
  - antd
  - 图标

tags:
  - typeScript
  - antd
  - 图标

date: "2023-06-25"

author: 深海如梦

excerpt: TypeScript × @ant-design/icons 动态加载与类型提示

---



# TypeScript × @ant-design/icons 动态加载与类型提示







组件

```tsx
import React from "react";
import * as AllIcons from "@ant-design/icons";
import CustomIcon from "@ant-design/icons";

type PickProps<T> = T extends (props: infer P1) => any
    ? P1
    : T extends React.ComponentClass<infer P2>
    ? P2
    : unknown;

type AllKeys = keyof typeof AllIcons;
//  获取大写开头的导出们, 认为是组件
type PickCapitalizeAsComp<K extends AllKeys> = K extends Capitalize<K>
    ? K
    : never;
// ------------------------------------------------^ typescript 4.1+ --------
type IconNames = PickCapitalizeAsComp<AllKeys>;
// 没有 4.1 的可以手动排除 小写开头的方法们
// type IconNames = Exclude<
//   AllKeys,
//   "createFromIconfontCN" | "default" | "getTwoToneColor" | "setTwoToneColor"
// >;

export type PickIconPropsOf<K extends IconNames> = PickProps<
    typeof AllIcons[K]
>;

export interface CustomIconComponentProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
}

type componentProps = React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | React.ForwardRefExoticComponent<CustomIconComponentProps>

// 这里将不再能用 FC 来包裹, 原因的话 也可以再开一篇来讲了
// 支持antd图标 name，支持自定义svg图标 component
const Icon = <T extends IconNames, P extends Object = PickIconPropsOf<T>>({
    name,
    component,
    ...props
}: {
    name?: T,
    component?: componentProps
} & P
) => {
    if (component) {
        return <CustomIcon component={component} />
    }
    const Comp = AllIcons[name] as React.ClassType<any, any, any>;
    return <Comp {...props} />;
};

export default Icon;
```





## 使用

```tsx
<Icon name="AccountBookFilled" />
// 或者
const SankeyChartOutlinedSvg = () => (<svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 1024 1024">
    <path d="M533.504 529.92c31.744 33.792 62.464 67.584 94.208 99.328 11.776-5.632 23.552-11.264 35.84-16.384-38.912-29.696-74.752-64.512-111.104-99.84-6.656 5.632-12.8 11.264-18.944 16.896zM481.792 579.584C380.416 678.4 284.672 773.12 143.36 773.12v71.68c200.704 0 294.4-101.376 422.912-181.248-27.648-28.16-55.296-56.832-84.48-83.968zM771.072 580.096c38.912-7.68 81.408-11.776 130.048-11.776V358.4c-119.808 0-210.944 44.544-289.28 104.448 50.176 47.616 101.376 90.624 159.232 117.248zM143.36 604.16v87.04c142.848 0 231.424-61.44 316.416-131.584-24.064-20.992-49.152-40.448-76.288-57.344C313.856 560.64 239.104 604.16 143.36 604.16zM516.608 512c6.144-5.12 12.288-10.24 18.944-15.36-23.552-22.528-48.128-45.568-73.728-66.56-5.12 4.608-10.24 9.728-14.848 14.336 24.064 21.504 47.104 44.544 69.632 67.584z" fill="currentColor" p-id="2387"></path><path d="M519.68 374.272c26.624 25.088 52.736 51.2 78.336 75.776C675.328 398.336 767.488 358.4 901.12 358.4V189.44c-169.472 0-281.088 89.088-381.44 184.832z" fill="currentColor" p-id="2388"></path><path d="M143.36 194.56v117.248c142.848 0 238.08 52.224 318.464 118.272 18.944-18.432 38.4-37.376 57.856-55.808C420.352 280.576 309.76 194.56 143.36 194.56zM901.12 696.32v-87.04c-47.616 0-90.624-10.752-130.048-29.184-39.936 7.68-75.264 18.944-108.032 32.256 64.512 49.152 138.24 83.968 238.08 83.968zM551.936 513.024c18.944-17.408 38.912-34.304 59.392-49.664-4.608-4.096-9.216-8.704-13.824-12.8-22.016 14.848-42.496 30.72-62.464 46.592 6.144 5.12 11.776 10.24 16.896 15.872z" fill="currentColor" p-id="2389"></path><path d="M551.936 513.024c36.352 35.328 72.192 70.144 111.104 99.84 32.256-13.312 68.096-24.576 108.032-32.256-57.856-26.624-109.056-69.632-159.744-117.248-19.968 15.36-39.936 32.256-59.392 49.664zM598.016 450.048c-26.112-25.088-51.712-50.688-78.336-75.776-19.456 18.432-38.912 37.376-57.856 55.808 25.6 20.992 50.176 44.032 73.728 66.56 19.968-15.872 40.448-31.744 62.464-46.592z" fill="currentColor" p-id="2390"></path><path d="M901.12 844.8v-71.68c-110.592 0-193.536-64-273.408-144.384-21.504 10.752-41.984 22.528-61.952 34.816 91.648 93.696 182.272 181.248 335.36 181.248zM516.608 512l-56.832 47.616c7.68 6.656 14.848 13.312 22.016 19.968 16.896-16.384 34.304-33.28 51.712-49.664-5.632-6.144-11.264-11.776-16.896-17.92zM143.36 317.44v117.248c99.328 0 175.616 27.136 240.128 67.072 21.504-17.92 42.496-37.376 63.488-57.344C365.056 372.736 270.336 317.44 143.36 317.44z" fill="currentColor" p-id="2391"></path><path d="M481.792 579.584c29.184 27.136 56.832 55.808 83.968 83.968 19.456-12.288 39.936-24.064 61.952-34.816-31.232-31.744-61.952-65.536-94.208-99.328l-51.712 50.176zM446.976 444.416c-20.992 19.968-41.984 39.424-63.488 57.344 27.648 16.896 52.736 36.352 76.288 57.344 18.944-15.36 37.888-31.744 56.832-47.616-22.528-22.528-45.568-45.568-69.632-67.072z"
        fill="currentColor"
        p-id="2392"></path>
</svg>);
<Icon component={SankeyChartOutlinedSvg} />

```

Icon 中的 component 组件的接受的属性如下参考
https://ant-design.gitee.io/components/icon-cn#%E8%87%AA%E5%AE%9A%E4%B9%89-svg-%E5%9B%BE%E6%A0%87





> 来源自：https://juejin.cn/post/6922086052027072520