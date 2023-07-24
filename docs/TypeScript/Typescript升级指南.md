---
title: Typescript升级指南

categories:
  - Typescript

tags:
  - Typescript

date: "2023-03-10"

author: 深海如梦

excerpt: Typescript 升级指南

---

# Typescript 升级指南

### 版本变更

**4.0.8** => **4.1.6**

### 需要知道的更新内容

- 新增 模板字符串
- 新增 interface 键重映射的类型断言
- 新增 type 的自身调用 (递归)



```typescript
// 欢迎来到 TypeScript 演练场，
// 这是一个给你提供编写，分享和学习 TypeScript 的网站。

// v4.0.8 => v4.1.6 升级指南
// 这次更新对我们来说是一个里程碑，曾经 TS 无法概括的 JS 语法范围，现在可以动态生成

// 1. 模板字符串
// 1.1 常量应用
const red = "#ff0000";
const green = "#00ff00";
const blue = "#0000ff";

// returns "#ff0000" | "#00ff00" | "#0000ff"
type RGB = typeof red | typeof green | typeof blue;

// returns "background: #ff0000" | "background: #00ff00" | "background: #0000ff"
type BasicBackground = `background: ${RGB}`

// 1.2 函数应用
// refer @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";
 
// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"
 
declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;

setAlignment("top-left");   // works!
setAlignment("top-middel"); // error!

// 1.3 设计模式中的应用
// refer @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html
let person = makeWatchedObject({
  firstName: "Homer",
  age: 42, // give-or-take
  location: "Springfield",
});

type PropEventSource<T> = {
    on<K extends string & keyof T>
        (eventName: `${K}Changed`, callback: (newValue: T[K]) => void ): void;
};

/// Create a "watched object" with an 'on' method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

person.on("firstNameChanged", () => {}); // works!
person.on("lastNameChanged", () => {});  // error!

// works! 'newName' is typed as 'string'
person.on("firstNameChanged", newName => {
    // 'newName' has the type of 'firstName'
    console.log(`new name is ${newName.toUpperCase()}`);
});
 
// works! 'newAge' is typed as 'number'
person.on("ageChanged", newAge => {
    if (newAge < 0) {
        console.log("warning! negative age");
    }
})

// 2. 映射类型中的键重映射
// 2.1 回顾
// * 映射类型可以基于任意键创建新的对象类型
type Options = {
  [K in "noImplicitAny" | "strictNullChecks" | "strictFunctionTypes"]?: boolean;
};
// same as
//   type Options = {
//       noImplicitAny?: boolean,
//       strictNullChecks?: boolean,
//       strictFunctionTypes?: boolean
//   };

/// * 除此之外， 'Partial<T>' 我们一定不陌生，我们继承一个超集但仅使用部分必传属性时，它可以帮我们将超集的所有属性变为可选
interface BasicProps {
    name: string;
}
const partialProps: BasicProps = {}   // error!

type PartialProps = Partial<BasicProps>;
// same as
//   type PartialProps = {
//       name?: string,
//   }
const rewriteProps: PartialProps = {} // works!
// 但很多时候，我们需要使用创建的键去生成，而不是为每个重映射提供一个规定的键

// 2.2 在键的重映射中使用 as
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

// returns {
//    getName: () => string;
//    getAge: () => number;
//    getLocation: () => string;
// }
type LazyPerson = Getters<Person>;

// 2.3 在某些情况下我们需要过滤一部分不需要的属性，但我们不再需要使用额外的Omit帮助器类型
// Remove the 'kind' property
type RemoveKindField<T> = {
    [K in keyof T as Exclude<K, "kind">]: T[K]
};

interface Circle {
    kind: "circle";
    radius: number;
    size: number;
}
// returns {
//    radius: number;
//    size: number;
// }
type KindlessCircle = RemoveKindField<Circle>;

// 2.4 我们也可以将 2.3 进行扩展，从外部决定什么属性是应该被 shake 掉的
type RemoveKindFieldExclude<T, U = never> = {
    [K in keyof T as Exclude<K, U>]: T[K]
};
// returns {
//    size: number;
// }
type KindlessCircleA = RemoveKindFieldExclude<Circle, 'kind' | 'radius'>;

// 3. 递归条件类型
// 3.1 重复字符串
// refer @see https://juejin.cn/post/7039856272354574372#heading-17
type RepeatStr<Str extends string,
                Count, 
                Arr extends Str[] = [],
                ResStr extends string = ''> 
 = Arr['length'] extends Count 
 ? ResStr 
 : RepeatStr<Str,Count, [Str, ...Arr], `${Str}${ResStr}`>;

type ISOYear = RepeatStr<'Y', 4> | RepeatStr<'Y', 2>;
type ISOMonth = RepeatStr<'M', 2> | RepeatStr<'M', 1>;
type ISODay = RepeatStr<'D', 2> | RepeatStr<'D', 1>;
type ISODate = `${ISOYear}-${ISOMonth}-${ISODay}`;

// * 使用 ISODate
const today: ISODate = 'YYYY-M-D';
 
// 3.2 被滥用的递归: 获取加法运算静态结果值
// refer @see https://juejin.cn/post/7039856272354574372#heading-17
type createArray<Len, Ele, Arr extends Ele[] = []> =  Arr['length'] extends Len ? Arr : createArray<Len, Ele, [Ele, ...Arr]>

type Sum<A extends number, B extends number> = [...createArray<A, 1>, ...createArray<B, 1>]['length']

// * 使用 Sum 类型
const addend = 1;
const addition = 2;
const total = addend + addition;

// returns number
type GenericTotalQuantity = typeof total;
// returns 3
type RecursiveTotalQuantity = Sum<typeof addend, typeof addition>;

// * 任何语言的递归都会消耗执行栈，且执行栈存在上限，所以下段代码不会被 TS 执行，而是抛出错误并返回 plain type
// expected 2023, but returns number
type HappyNewYear = Sum<2022, 1>;

// 3.3 获取数组中每个元素可能的值类型
// * 获取静态的字面量类型可以给变量加上 常量类型断言 (as private)
const authEscapes = ['PM', 'Dev', 'Ops'] as const;
type AuthEscapesType = typeof authEscapes;

// ? T as Type, U as Tuple, E as Element (for Array)
type ElementOf<T extends readonly[...T], E = never, U extends never[] = []> = U['length'] extends T['length'] ? E : ElementOf<T, E | T[U['length']], [...U, never]>;

// returns "PM" | "Dev" | "Ops"
type ElementResult = ElementOf<AuthEscapesType>;

// * 扩展元素的可能性
// returns "PM" | "Dev" | "Ops" | "ZZX" | "97z"
type ElementExtend = ElementOf<AuthEscapesType, 'ZZX' | '97z'>;

// 使用 ElementResult
const role: ElementResult = 'Dev';  // works!
const me: ElementResult = 'ZZX';    // error!
const netMe: ElementExtend = '97z'; // works!

// 通过递归构造数组来计数，我们可以批量生成 2th 小节的其他类型定义

// 4. 结语
// Why ? 我只需要一个简单的类型 like type VeryEasy = "PM" | "DEV" | "Ops"
// 为什么我要搞得那么复杂，为什么我要为此浪费工时，Why? (黑人流汗、无语 + 摊手.gif)

/*
 * 这个类型的定义将是动态的，意味着无论以后如何改变我们的 const / enum / config / tuple 等等，都将不再需要更改 type 与 interface
 * 并且我们可以让它作用在 everywhere，这很棒不是吗，它可以帮助我们：
 * - 严格的 ts 检验帮我们规避了 bug
 * - 修改代码时不再需要查找并修改对应的静态类型
 * - 通过定义类型获得的智能补全菜单列表
 */

declare function Moment (date: number, format: ISODate): ISODate
// 在 quotes 中修改，试试这 everything is ok 的智能补全吧
const urRole: ElementResult = "Dev";
const urBirthday: ISODate = Moment(1678377600000, "YY-M-D");
const urFavBasicColorHex: RGB = "#ff0000"

```

