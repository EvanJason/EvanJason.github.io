---

title: 优雅的if else

categories:
  - Typescript
tags:
  - Typescript

date: "2023-09-05"

authors: lin

excerpt: 优雅的if else

---

# 优雅的if else

## 前言

最近在网上冲浪时看到了这样一段代码：

```typescript
function getUserDescribe(name) {
    if (name === "小刘") {
        console.log("刘哥哥");
    } else if (name === "小红") {
        console.log("小红妹妹");
    } else if (name === "陈龙") {
        console.log("大师");
    } else if (name === "李龙") {
        console.log("师傅");
    } else if (name === "大鹏") {
        console.log("恶人");
    } else {
        console.log("此人比较神秘！");
    }
}
```

咋一看没感觉有什么异常，但如果有1000个判断条件，按照这种写法难不成要写1000个 `if` 分支？

如果写了大量的 `if` 分支，并且可能还具有**分支套分支**，可以想象到整个代码的可读性和可维护都会大大降低，这在实际开发中，确实是一个比较头疼的问题，那有没有什么办法能够即实现需求又能避免这些问题呢？

## 简单分支优化

这就涉及到**分支优化**，让我们转换思维，去优化一下上面的代码结构：

```typescript
function getUserDescribe(name) {
    const describeForNameMap = {
        小刘: () => console.log("刘哥哥"),
        小红: () => console.log("小红妹妹"),
        陈龙: () => console.log("大师"),
        李龙: () => console.log("师傅"),
        大鹏: () => console.log("恶人"),
    };
    describeForNameMap[name] ? describeForNameMap[name]() : console.log("此人比较神秘！");
}
```

问题代码中的判断都是简单的**相等判断**，那么我们就可以将这些判断条件作为一个属性写到对象`describeForNameMap` 中去，这些属性对应的值就是条件成立后的处理函数。

之后我们就只需通过`getUserDescribe`函数接收到的参数去获取`describeForNameMap`对象中对应的值，如果该值存在就运行该值（因为值是一个函数）。

这样一来原本的 `if` 分支判断就转换成了简单的`key value`对应值，条件与处理函数一一对应，一目了然。

## 复杂分支优化

那如果我们的 `if` 分支中的判断条件不只是简单的相等判断，还具有一些需要计算的表达式时，我们该怎么办呢？（如下所示）

```typescript
function getUserDescribe(name) {
    if (name.length > 3) {
        console.log("名字太长");
    } else if (name.length < 2) {
        console.log("名字太短");
    } else if (name[0] === "陈") {
        console.log("小陈");
    } else if (name[0] === "李" && name !== "李鹏") {
        console.log("小李");
    } else if (name === "李鹏") {
        console.log("管理员");
    } else {
        console.log("此人比较神秘！");
    }
}
```

对于这种结构的代码就不能引入对象来进行分支优化了，我们可以引入**二维数组**来进行分支优化：

```typescript
function getUserDescribe(name) {
    const describeForNameMap = [
        [
            (name) => name.length > 3, // 判断条件
            () => console.log("名字太长") // 执行函数
        ],
        [
            (name) => name.length < 2, 
            () => console.log("名字太短")
        ],
        [
            (name) => name[0] === "陈", 
            () => console.log("小陈")
        ],
        [
            (name) => name === "大鹏", 
            () => console.log("管理员")
        ],
        [
            (name) => name[0] === "李" && name !== "李鹏",
            () => console.log("小李"),
        ],
    ];
    // 获取符合条件的子数组
    const getDescribe = describeForNameMap.find((item) => item[0](name));
    // 子数组存在则运行子数组中的第二个元素（执行函数）
    getDescribe ? getDescribe[1]() : console.log("此人比较神秘！");
}
```

上面我们定义了一个`describeForNameMap`数组，数组内的每一个元素代表一个判断条件与其执行函数的集合（也是一个数组），之后我们通过数组的`find`方法查找`describeForNameMap`数组中符合判断条件的子数组即可。



### 更复杂分支优化

当存在数组，且判断条件复杂时，如下所示

```typescript
// 需要给定入参数组，以及过滤条件数组
/**
 * 过滤条件数组
 * 数组：[[判断条件，过滤函数],...rest]
 */
const filterConditions: any[] = [
    [isGroup, it => !it.id.includes('group')],
    [!isShowMore, it => it.propertyOrigin !== 'more'],
];
const result = filterConditions.reduce((result, [condition, filterFunction]) => {
   return condition ? result.filter(filterFunction) : result;
}, attList);
console.log(`结果：${result}`)
```



## 抽离分支

上面例子中我们定义的这个`describeForNameMap`对象是一个独立的结构，我们完全可以将它抽离出去：

```typescript
const describeForNameMap = {
    小刘: () => console.log("刘哥哥"),
    小红: () => console.log("小红妹妹"),
    陈龙: () => console.log("大师"),
    李龙: () => console.log("师傅"),
    大鹏: () => console.log("恶人"),
};

function getUserDescribe(name) {
    describeForNameMap[name] ? describeForNameMap[name]() : console.log("此人比较神秘！");
}
```

```typescript
const describeForNameMap = [
    [
        (name) => name.length > 3, // 判断条件
        () => console.log("名字太长") // 执行函数
    ],
    [
        (name) => name.length < 2, 
        () => console.log("名字太短")
    ],
    [
        (name) => name[0] === "陈", 
        () => console.log("小陈")
    ],
    [
        (name) => name === "大鹏", 
        () => console.log("管理员")
    ],
    [
        (name) => name[0] === "李" && name !== "李鹏",
        () => console.log("小李"),
    ],
];
    
function getUserDescribe(name) {
    // 获取符合条件的子数组
    const getDescribe = describeForNameMap.find((item) => item[0](name));
    // 子数组存在则运行子数组中的第二个元素（执行函数）
    getDescribe ? getDescribe[1]() : console.log("此人比较神秘！");
}
```

> 通过模块化的开发也可以将这个`map`对象写进一个单独的`js`文件，之后在需要使用的地方导入即可。



## 结语

**分支优化**在各种语言中都有不同的实现方式和应用场景，本篇通过`JavaScript`介绍了两种代码分支优化的思想，代码的实现非常简单，重点在于这种思想的应用。

其实关于分支优化这个问题一直存在争议，目前存在两种观点：

- **观点1**：压根不需要多此一举去优化它，并且优化后的代码因为多创建了一个`对象/数组`，对`对象/数组`进行检索反而比单纯的`if else`还是废性能。
- **观点2**：分支优化后的代码`可读性/可维护性`更好，并且引入`对象/数组`所带来的性能问题在当今时代根本不值一提。