---
title: Vue实现分页功能

categories:
  - Vue

tags:
  - Vue 
  - 分页

date: "2020-07-03"

author: 深海如梦

excerpt: Vue实现分页功能

---



# Vue实现分页功能

## html

```html
<div class="page" v-if="pageCout > 0">
  <ul class="epages">
    <li class="page-item" v-if="curPage > 1">
      <button href="#9lala" @click="JumpTo(curPage -1)">&laquo;</button>
    </li>
    <li class="page-item" :class="{active: curPage == 1}" @click="JumpTo(1)">
      <button>1</button>
    </li>
    <li class="page-item" v-show="curPage  > 5 && pageCout > 10">
      <strong>...</strong>
    </li>
    <li class="page-item" :class="{active: curPage  == index+offset}"
      v-for="(item,index) in middlePages" @click="JumpTo(index+offset)">
      <button>{{index+offset}}</button>
    </li>
    <li class="page-item" v-show="curPage  < bigLimit && pageCout  > 10">
      <strong>...</strong>
    </li>
    <li class="page-item" :class="{active: curPage  == pageCout }"
      @click="JumpTo(pageCout )" v-if="pageCout  > 1">
      <button>{{pageCout }}</button>
    </li>
    <li class="page-item" :class="{disabled: curPage  == pageCout }"
      v-if="pageCout  > 1 &&curPage  < pageCout -1">
      <button href="#9lala" @click="JumpTo(curPage +1)">&raquo;</button>
    </li>
  </ul>

</div>
```

## js

```typescript
computed: {
  middlePages() {
    if (this.pageCout  <= 2) {
      return 0;
    } else if (this.pageCout  > 2 && this.pageCout  <= 10) {
      return this.pageCout  - 2;
    } else {
      return this.curPage   > 999 ? 5 : 8;
    }
  },
  bigLimit() {
    return this.middlePages > 5 ? this.pageCout  - 6 : this.pageCout  - 3;
  },
  offset() {
    if (this.curPage   <= 5) {
      return 2;
    } else if (this.curPage   >= this.bigLimit) {
      return this.bigLimit - 2;
    } else {
      return this.middlePages > 5 ? this.curPage   - 3 : this.curPage   - 2;
    }
  }
}
```

## 演示效果

[![img](https://willern.gitee.io/2020/07/03/20200703/show.gif)](https://willern.gitee.io/2020/07/03/20200703/show.gif)