---
categories:
  - Vue

tags:
  - Vue
  - 条件判断
  - 多类名

date: 2020-06-24

author: 深海如梦

excerpt: Vue 动态绑定多个class 带上三元运算或其他条件

---



# Vue 动态绑定多个class 带上三元运算或其他条件

## 例子

**设置第一条数据的样式为one**

```html
<li v-for="(item,index) in items" :key="index">
	<span :class="index==0?'one':''">{{index+1}}</span>
</li>
```

**设置样式并判断**

```html
<li v-for="(item,index) in items" :key="index">
	<span :class="[index==0?'one':'','select-active':items.istrue]">{{index+1}}</span>
</li>
```

## 实现

```html
<li v-for="(item,index) in items" :key="index">
	<span :class="[index==0?'one':'',index==1?'two':'',index==2?'three':'']">{{index+1}}</span>
</li>
```