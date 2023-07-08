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
const MoIcon = <T extends IconNames, P extends Object = PickIconPropsOf<T>>({
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

export default MoIcon;
```





## 使用

```tsx
<Icon name="AccountBookFilled" />
```



> 来源自：https://juejin.cn/post/6922086052027072520