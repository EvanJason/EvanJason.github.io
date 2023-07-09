const t={title:"Typescript升级指南",categories:["Typescript"],tags:["Typescript"],date:"2023-03-10",author:"深海如梦",excerpt:"Typescript 升级指南"},e=`<h1>Typescript 升级指南</h1>
<h3>版本变更</h3>
<p><strong>4.0.8</strong> =&gt; <strong>4.1.6</strong></p>
<h3>需要知道的更新内容</h3>
<ul>
<li>新增 模板字符串</li>
<li>新增 interface 键重映射的类型断言</li>
<li>新增 type 的自身调用 (递归)</li>
</ul>
<pre><code class="language-typescript">// 欢迎来到 TypeScript 演练场，
// 这是一个给你提供编写，分享和学习 TypeScript 的网站。

// v4.0.8 =&gt; v4.1.6 升级指南
// 这次更新对我们来说是一个里程碑，曾经 TS 无法概括的 JS 语法范围，现在可以动态生成

// 1. 模板字符串
// 1.1 常量应用
const red = &quot;#ff0000&quot;;
const green = &quot;#00ff00&quot;;
const blue = &quot;#0000ff&quot;;

// returns &quot;#ff0000&quot; | &quot;#00ff00&quot; | &quot;#0000ff&quot;
type RGB = typeof red | typeof green | typeof blue;

// returns &quot;background: #ff0000&quot; | &quot;background: #00ff00&quot; | &quot;background: #0000ff&quot;
type BasicBackground = \`background: \${RGB}\`

// 1.2 函数应用
// refer @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html
type VerticalAlignment = &quot;top&quot; | &quot;middle&quot; | &quot;bottom&quot;;
type HorizontalAlignment = &quot;left&quot; | &quot;center&quot; | &quot;right&quot;;
 
// Takes
//   | &quot;top-left&quot;    | &quot;top-center&quot;    | &quot;top-right&quot;
//   | &quot;middle-left&quot; | &quot;middle-center&quot; | &quot;middle-right&quot;
//   | &quot;bottom-left&quot; | &quot;bottom-center&quot; | &quot;bottom-right&quot;
 
declare function setAlignment(value: \`\${VerticalAlignment}-\${HorizontalAlignment}\`): void;

setAlignment(&quot;top-left&quot;);   // works!
setAlignment(&quot;top-middel&quot;); // error!

// 1.3 设计模式中的应用
// refer @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html
let person = makeWatchedObject({
  firstName: &quot;Homer&quot;,
  age: 42, // give-or-take
  location: &quot;Springfield&quot;,
});

type PropEventSource&lt;T&gt; = {
    on&lt;K extends string &amp; keyof T&gt;
        (eventName: \`\${K}Changed\`, callback: (newValue: T[K]) =&gt; void ): void;
};

/// Create a &quot;watched object&quot; with an 'on' method
/// so that you can watch for changes to properties.
declare function makeWatchedObject&lt;T&gt;(obj: T): T &amp; PropEventSource&lt;T&gt;;

person.on(&quot;firstNameChanged&quot;, () =&gt; {}); // works!
person.on(&quot;lastNameChanged&quot;, () =&gt; {});  // error!

// works! 'newName' is typed as 'string'
person.on(&quot;firstNameChanged&quot;, newName =&gt; {
    // 'newName' has the type of 'firstName'
    console.log(\`new name is \${newName.toUpperCase()}\`);
});
 
// works! 'newAge' is typed as 'number'
person.on(&quot;ageChanged&quot;, newAge =&gt; {
    if (newAge &lt; 0) {
        console.log(&quot;warning! negative age&quot;);
    }
})

// 2. 映射类型中的键重映射
// 2.1 回顾
// * 映射类型可以基于任意键创建新的对象类型
type Options = {
  [K in &quot;noImplicitAny&quot; | &quot;strictNullChecks&quot; | &quot;strictFunctionTypes&quot;]?: boolean;
};
// same as
//   type Options = {
//       noImplicitAny?: boolean,
//       strictNullChecks?: boolean,
//       strictFunctionTypes?: boolean
//   };

/// * 除此之外， 'Partial&lt;T&gt;' 我们一定不陌生，我们继承一个超集但仅使用部分必传属性时，它可以帮我们将超集的所有属性变为可选
interface BasicProps {
    name: string;
}
const partialProps: BasicProps = {}   // error!

type PartialProps = Partial&lt;BasicProps&gt;;
// same as
//   type PartialProps = {
//       name?: string,
//   }
const rewriteProps: PartialProps = {} // works!
// 但很多时候，我们需要使用创建的键去生成，而不是为每个重映射提供一个规定的键

// 2.2 在键的重映射中使用 as
type Getters&lt;T&gt; = {
    [K in keyof T as \`get\${Capitalize&lt;string &amp; K&gt;}\`]: () =&gt; T[K]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

// returns {
//    getName: () =&gt; string;
//    getAge: () =&gt; number;
//    getLocation: () =&gt; string;
// }
type LazyPerson = Getters&lt;Person&gt;;

// 2.3 在某些情况下我们需要过滤一部分不需要的属性，但我们不再需要使用额外的Omit帮助器类型
// Remove the 'kind' property
type RemoveKindField&lt;T&gt; = {
    [K in keyof T as Exclude&lt;K, &quot;kind&quot;&gt;]: T[K]
};

interface Circle {
    kind: &quot;circle&quot;;
    radius: number;
    size: number;
}
// returns {
//    radius: number;
//    size: number;
// }
type KindlessCircle = RemoveKindField&lt;Circle&gt;;

// 2.4 我们也可以将 2.3 进行扩展，从外部决定什么属性是应该被 shake 掉的
type RemoveKindFieldExclude&lt;T, U = never&gt; = {
    [K in keyof T as Exclude&lt;K, U&gt;]: T[K]
};
// returns {
//    size: number;
// }
type KindlessCircleA = RemoveKindFieldExclude&lt;Circle, 'kind' | 'radius'&gt;;

// 3. 递归条件类型
// 3.1 重复字符串
// refer @see https://juejin.cn/post/7039856272354574372#heading-17
type RepeatStr&lt;Str extends string,
                Count, 
                Arr extends Str[] = [],
                ResStr extends string = ''&gt; 
 = Arr['length'] extends Count 
 ? ResStr 
 : RepeatStr&lt;Str,Count, [Str, ...Arr], \`\${Str}\${ResStr}\`&gt;;

type ISOYear = RepeatStr&lt;'Y', 4&gt; | RepeatStr&lt;'Y', 2&gt;;
type ISOMonth = RepeatStr&lt;'M', 2&gt; | RepeatStr&lt;'M', 1&gt;;
type ISODay = RepeatStr&lt;'D', 2&gt; | RepeatStr&lt;'D', 1&gt;;
type ISODate = \`\${ISOYear}-\${ISOMonth}-\${ISODay}\`;

// * 使用 ISODate
const today: ISODate = 'YYYY-M-D';
 
// 3.2 被滥用的递归: 获取加法运算静态结果值
// refer @see https://juejin.cn/post/7039856272354574372#heading-17
type createArray&lt;Len, Ele, Arr extends Ele[] = []&gt; =  Arr['length'] extends Len ? Arr : createArray&lt;Len, Ele, [Ele, ...Arr]&gt;

type Sum&lt;A extends number, B extends number&gt; = [...createArray&lt;A, 1&gt;, ...createArray&lt;B, 1&gt;]['length']

// * 使用 Sum 类型
const addend = 1;
const addition = 2;
const total = addend + addition;

// returns number
type GenericTotalQuantity = typeof total;
// returns 3
type RecursiveTotalQuantity = Sum&lt;typeof addend, typeof addition&gt;;

// * 任何语言的递归都会消耗执行栈，且执行栈存在上限，所以下段代码不会被 TS 执行，而是抛出错误并返回 plain type
// expected 2023, but returns number
type HappyNewYear = Sum&lt;2022, 1&gt;;

// 3.3 获取数组中每个元素可能的值类型
// * 获取静态的字面量类型可以给变量加上 常量类型断言 (as private)
const authEscapes = ['PM', 'Dev', 'Ops'] as const;
type AuthEscapesType = typeof authEscapes;

// ? T as Type, U as Tuple, E as Element (for Array)
type ElementOf&lt;T extends readonly[...T], E = never, U extends never[] = []&gt; = U['length'] extends T['length'] ? E : ElementOf&lt;T, E | T[U['length']], [...U, never]&gt;;

// returns &quot;PM&quot; | &quot;Dev&quot; | &quot;Ops&quot;
type ElementResult = ElementOf&lt;AuthEscapesType&gt;;

// * 扩展元素的可能性
// returns &quot;PM&quot; | &quot;Dev&quot; | &quot;Ops&quot; | &quot;ZZX&quot; | &quot;97z&quot;
type ElementExtend = ElementOf&lt;AuthEscapesType, 'ZZX' | '97z'&gt;;

// 使用 ElementResult
const role: ElementResult = 'Dev';  // works!
const me: ElementResult = 'ZZX';    // error!
const netMe: ElementExtend = '97z'; // works!

// 通过递归构造数组来计数，我们可以批量生成 2th 小节的其他类型定义

// 4. 结语
// Why ? 我只需要一个简单的类型 like type VeryEasy = &quot;PM&quot; | &quot;DEV&quot; | &quot;Ops&quot;
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
const urRole: ElementResult = &quot;Dev&quot;;
const urBirthday: ISODate = Moment(1678377600000, &quot;YY-M-D&quot;);
const urFavBasicColorHex: RGB = &quot;#ff0000&quot;

</code></pre>
`;export{t as attributes,e as html};
