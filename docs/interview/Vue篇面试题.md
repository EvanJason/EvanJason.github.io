---
title: Vue篇面试题
categories:
  - interview
tags:
  - interview
date: "2026-03-27"
authors: lin
excerpt: Vue篇面试题

---

# Vue篇面试题

## 1.请描述下对 vue 生命周期的理解

**Vue 2 生命周期:**

- **beforeCreate**: 实例初始化之后，数据观测和事件配置之前。此时 `data`和`events` 都未创建。
- **created**: 实例创建完成，数据观测、属性和方法的运算、watch/event 事件回调都已完成。可以访问 `data`和`methods`,但 DOM 还未生成。
- **beforeMount**: 挂载开始之前被调用，相关的 render 函数首次被调用。
- **mounted**: 实例被挂载后调用，这时 el 被新创建的 `vm.$el`替换了。可以访问 DOM 进行操作。
- **beforeUpdate**: 数据更新时调用，发生在虚拟 DOM 打补丁之前。
- **updated**: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。
- **beforeDestroy**: 实例销毁之前调用。在这一步，实例仍然完全可用。
- **destroyed**: Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

**Vue 3 生命周期变化:**

- `beforeDestroy` → `beforeUnmount`
- `destroyed` → `unmounted`
- 新增 `setup()` 钩子，在 `beforeCreate` 之前执行
- Composition API 中使用 `onMounted`、`onUpdated`、`onUnmounted` 等函数

## 2.双向数据绑定是什么

**原理:** Vue 的双向数据绑定是通过**数据劫持 + 发布订阅模式**实现的。

**Vue 2 实现方式:**
- 使用 `Object.defineProperty()` 劫持各个属性的 setter/getter
- 在数据变动时发布消息给订阅者 (视图)
- 触发相应的更新回调

**Vue 3 实现方式:**
- 使用 `Proxy` 对象代理整个对象
- 可以检测对象属性的增删改查
- 性能更好，支持数组索引修改和对象属性动态添加

**核心流程:**
1. Observer 监听数据变化
2. Dep 收集依赖 (Watcher)
3. 数据变化时通知所有 Watcher 更新视图

## 3.Vue 组件之间的通信方式都有哪些？

**父子组件通信:**
- **props / $emit**: 父传子用 props,子传父用$emit
- **$parent / $children**: 访问父/子实例
- **ref**: 父组件通过 ref 访问子组件实例

**跨级组件通信:**
- **provide / inject**: 祖先组件提供数据，后代组件注入
- **$attrs / $listeners**: 传递属性和事件 (Vue 3 中$listeners 已移除)

**全局状态管理:**
- **Vuex / Pinia**: 集中式状态管理
- **EventBus**: 事件总线 (Vue 3 推荐用 mitt 等第三方库)

**其他方式:**
- **$refs**: 直接访问组件实例
- **localStorage/sessionStorage**: 持久化存储
- **cookie**: 少量数据存储

## 4.为什么 data 属性是一个函数而不是一个对象？

**原因:**
```javascript
// ❌ 错误示例 - data 是对象
data: {
  count: 0
}
// 问题：多个组件实例共享同一个 data 对象，会相互影响

// ✅ 正确示例 - data 是函数
data() {
  return {
    count: 0
  }
}
// 优势：每个组件实例都有自己独立的 data 副本
```

**核心原理:**
- 函数每次返回新的对象副本
- 保证组件实例之间的数据互不影响
- 符合组件的可复用性原则

**注意:** 根实例 (new Vue) 的 data 可以是对象，因为根实例只有一个。

## 5.动态给 vue 的数据添加一个新的属性时会发生什么？怎样解决？

**问题:**
```javascript
// ❌ 这样不会触发视图更新
this.obj.newProp = 'value'
this.arr[index] = newValue
```

**原因:**
- Vue 2 无法检测对象属性的添加或删除
- 无法检测数组索引和长度的变化

**解决方案:**

**Vue 2:**
```javascript
// 对象添加属性
this.$set(this.obj, 'newProp', 'value')
Vue.set(this.obj, 'newProp', 'value')

// 数组修改
this.$set(this.arr, index, newValue)
this.arr.splice(index, 1, newValue)

// 替换整个数组
this.arr = [...newArray]
```

**Vue 3:**
```javascript
// Proxy 自动检测，直接赋值即可
this.obj.newProp = 'value' // ✅ 响应式
this.arr[index] = newValue  // ✅ 响应式
```

## 6.v-if 和 v-for 的优先级是什么？

**结论:v-for 优先级高于 v-if**

**不推荐同时使用:**
```vue
<!-- ❌ 性能差：即使列表为空也会遍历 -->
<li v-for="item in list" v-if="item.isActive">
  {{ item.name }}
</li>
```

**优化方案:**
```vue
<!-- ✅ 方案 1:计算属性过滤 -->
<li v-for="item in activeList" :key="item.id">
  {{ item.name }}
</li>

computed: {
  activeList() {
    return this.list.filter(item => item.isActive)
  }
}

<!-- ✅ 方案 2:外层 v-if -->
<ul v-if="list.length">
  <li v-for="item in list" :key="item.id">
    {{ item.name }}
  </li>
</ul>
```

**Vue 3 变化:** v-if 和 v-for 不再推荐同时使用，会产生编译警告。

## 7.v-show 和 v-if 有什么区别？使用场景分别是什么？

**区别对比:**

| 特性 | v-if | v-show |
|------|------|--------|
| 实现方式 | 添加/删除 DOM 元素 | 切换 display 样式 |
| 编译开销 | 高 (条件切换时重新渲染) | 低 (初始就渲染) |
| 切换开销 | 低 | 低 |
| 惰性渲染 | 是 (初始为 false 不渲染) | 否 (始终渲染) |
| 支持 `<template>` | ✅ | ❌ |

**使用场景:**
```vue
<!-- ✅ 频繁切换用 v-show -->
<div v-show="isVisible">内容</div>

<!-- ✅ 条件很少改变用 v-if -->
<div v-if="userRole === 'admin'">管理面板</div>

<!-- ✅ 需要真实 DOM 不存在用 v-if -->
<dialog v-if="showModal">对话框</dialog>
```

## 8.你知道 vue 中 key 的原理吗？说说你对它的理解

**作用:**
- 帮助 Vue 识别节点身份，优化 diff 算法
- 决定是复用现有元素还是创建新元素

**diff 算法规则:**
```javascript
// ❌ 错误：使用 index 作为 key
<li v-for="(item, index) in list" :key="index">
  <!-- 问题：列表排序/删除时会导致状态错乱 -->
</li>

// ✅ 正确：使用唯一 ID
<li v-for="item in list" :key="item.id">
  <!-- 优势：元素身份稳定 -->
</li>
```

**底层原理:**
1. Vue 通过 key 建立旧节点和新节点的映射关系
2. key 相同：比较内容，决定是否复用
3. key 不同：销毁旧节点，创建新节点

**特殊场景:**
```vue
<!-- 强制重新渲染组件 -->
<UserProfile :key="userId" />

<!-- 触发过渡效果 -->
<transition>
  <div :key="animationKey">动画内容</div>
</transition>
```

## 9.说说你对 vue 的 mixin 的理解，有什么应用场景？

**定义:** mixin 是一种分发 Vue 组件可复用功能的非常灵活的方式。

**使用方式:**
```javascript
// mixin.js
export const loadingMixin = {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    showLoading() {
      this.loading = true
    },
    hideLoading() {
      this.loading = false
    }
  }
}

// 组件中使用
export default {
  mixins: [loadingMixin],
  mounted() {
    this.showLoading()
  }
}
```

**应用场景:**
- 表单验证逻辑
- 权限控制
- 数据加载状态管理
- 通用方法封装 (防抖、节流)

**Vue 3 替代方案:**
```javascript
// ✅ 推荐:Composition API (Composables)
// composables/useLoading.js
export function useLoading() {
  const loading = ref(false)
  
  const showLoading = () => loading.value = true
  const hideLoading = () => loading.value = false
  
  return { loading, showLoading, hideLoading }
}

// 组件中使用
import { useLoading } from '@/composables/useLoading'

setup() {
  const { loading, showLoading } = useLoading()
  return { loading }
}
```

**mixin 缺点:**
- 来源不清晰 (命名冲突)
- 属性来源不明确
- 难以 TypeScript 推断

## 10.Vue 常用的修饰符有哪些？有什么应用场景

**事件修饰符:**
```vue
<!-- .stop - 阻止事件冒泡 -->
<button @click.stop="handleClick">按钮</button>

<!-- .prevent - 阻止默认行为 -->
<form @submit.prevent="onSubmit">表单</form>

<!-- .capture - 使用事件捕获模式 -->
<div @click.capture="handleCapture">捕获</div>

<!-- .self - 只在 event.target 是当前元素自身时触发 -->
<div @click.self="handleSelf">只有点击 div 本身</div>

<!-- .once - 只触发一次 -->
<button @click.once="handleOnce">只点一次</button>

<!-- .passive - 滚动事件不阻止默认行为 -->
<div @scroll.passive="onScroll">滚动</div>

<!-- 链式调用 -->
<a @click.stop.prevent="handleLink">组合修饰符</a>
```

**按键修饰符:**
```vue
<!-- 回车键 -->
<input @keyup.enter="submit">

<!-- Tab 键 -->
<input @keyup.tab="focusNext">

<!-- 自定义 keyCode -->
<input @keyup.13="submit">

<!-- 系统修饰键 -->
<input @keyup.ctrl.c="copy">
<input @keyup.alt.enter="special">
```

**v-model 修饰符:**
```vue
<!-- .lazy - 失去焦点或回车时才更新 -->
<input v-model.lazy="msg">

<!-- .number - 自动转数字 -->
<input v-model.number="age">

<!-- .trim - 自动去除首尾空格 -->
<input v-model.trim="name">
```

## 11.Vue 中的$nextTick 有什么作用？

**作用:** 在下次 DOM 更新循环结束之后执行延迟回调。

**使用场景:**
```vue
// 场景 1:修改数据后立即操作 DOM
this.message = 'new value'
this.$nextTick(() => {
  // DOM 已经更新，可以安全操作
  this.$refs.input.focus()
})

// 场景 2:连续多次修改数据
this.count++
this.count++
this.$nextTick(() => {
  // 只触发一次更新，获取最终 DOM 状态
  console.log(this.$el.textContent)
})

// 场景 3:异步操作后更新 DOM
async saveData() {
  await api.save(this.data)
  this.$nextTick(() => {
    this.showMessage()
  })
}
```

**Vue 3 用法:**
```javascript
import { nextTick } from 'vue'

// 方式 1:回调函数
nextTick(() => {
  // DOM 已更新
})

// 方式 2:Promise
await nextTick()
// DOM 已更新

// setup 语法糖
const message = ref('')
const updateAndFocus = async () => {
  message.value = 'new'
  await nextTick()
  inputRef.value?.focus()
}
```

**原理:** Vue 将 DOM 更新放入微任务队列，批量处理更新。

## 12.Vue 实例挂载的过程

**挂载流程:**

```
1. 创建实例 (new Vue)
   ↓
2. 初始化选项 (合并 options)
   ↓
3. 初始化数据 (data, computed, methods...)
   ↓
4. 编译模板 (template → render 函数)
   ↓
5. 创建虚拟 DOM
   ↓
6. 挂载到 el (调用$mount)
   ↓
7. 触发 mounted 钩子
```

**详细过程:**
```javascript
new Vue({
  el: '#app',
  template: '<div>{{ msg }}</div>',
  data: { msg: 'Hello' }
})

// 内部步骤:
// 1. 调用_init() 初始化实例
// 2. initState() 初始化数据观测
// 3. compile() 编译模板
// 4. new Watcher() 创建观察者
// 5. $mount() 挂载 DOM
// 6. 触发 beforeMount → mounted
```

**手动挂载:**
```javascript
const vm = new Vue({
  template: '<div>{{ msg }}</div>',
  data: { msg: 'Hello' }
})

// 手动挂载到指定元素
vm.$mount('#app')
```

## 13.你了解 vue 的 diff 算法吗？

**核心思想:** 同层比较，深度优先。

**diff 策略:**
1. **同级比较**: 只比较同一层级的节点
2. **类型判断**: 标签名不同直接替换
3. **key 值对比**: 通过 key 确定是否复用节点

**比对流程:**
```
oldVNode vs newVNode
  ↓
1. 比较标签名
   - 不同：销毁旧节点，创建新节点
   - 相同：进入下一步
  ↓
2. 比较 key
   - 不同：创建新节点
   - 相同：复用节点，更新属性
  ↓
3. 比较子节点 (递归)
```

**Vue 3 优化:**
- **静态标记 (Patch Flag)**: 跳过静态节点
- **hoistStatic**: 静态节点提升
- **CacheHandlers**: 事件缓存
- **Fragment**: 多根节点支持

```vue
<!-- Vue 3 编译优化 -->
<div>
  <h1>{{ title }}</h1>        <!-- 动态文本 -->
  <p class="static">静态内容</p> <!-- PatchFlag=0, 跳过 -->
  <button @click="save">保存</button> <!-- 事件缓存 -->
</div>
```

## 14.Vue 中组件和插件有什么区别？

**组件 (Component):**
```javascript
// 用于 UI 展示和交互
export default {
  name: 'UserProfile',
  props: ['userId'],
  template: '<div>{{ user.name }}</div>',
  data() {
    return { user: {} }
  }
}

// 使用：在模板中引入
import UserProfile from './UserProfile.vue'
components: { UserProfile }
```

**插件 (Plugin):**
```javascript
// 用于扩展 Vue 功能
export default {
  install(Vue, options) {
    // 1. 添加全局方法
    Vue.prototype.$toast = function(msg) {
      // ...
    }
    
    // 2. 添加全局组件
    Vue.component('Modal', ModalComponent)
    
    // 3. 添加全局指令
    Vue.directive('focus', {...})
    
    // 4. 添加实例选项
    Vue.mixin({ ... })
  }
}

// 使用:Vue.use()
Vue.use(MyPlugin, { option: 'value' })
```

**核心区别:**

| 特性 | 组件 | 插件 |
|------|------|------|
| 用途 | UI 组件 | 功能扩展 |
| 注册 | components / 全局注册 | Vue.use() |
| 使用 | 模板中 `<component>` | 安装后全局可用 |
| 示例 | Button, Table, Form | Router, Vuex, i18n |

## 15.Vue 项目中你是如何解决跨域的呢？

**开发环境解决方案:**

**方案 1:Vite 代理**
```javascript
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://backend.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
```

**方案 2:Webpack 代理**
```javascript
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend.com',
        changeOrigin: true
      }
    }
  }
}
```

**生产环境解决方案:**

**方案 1:Nginx 反向代理**
```nginx
server {
  listen 80;
  server_name frontend.com;
  
  location /api/ {
    proxy_pass http://backend.com/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

**方案 2:CORS(后端配置)**
```javascript
// Node.js Express
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
```

**方案 3:JSONP(仅 GET)**
```vue
<script>
// 已不推荐，现代项目用 CORS 或代理
function jsonp(url, callback) {
  const script = document.createElement('script')
  script.src = `${url}?callback=${callback}`
  document.body.appendChild(script)
}
</script>
```

## 16.有写过自定义指令吗？自定义指令的应用场景有哪些？

**自定义指令基础:**
```vue
// 全局注册
Vue.directive('focus', {
  // 钩子函数
  inserted(el) {
    el.focus()
  }
})

// 局部注册
directives: {
  focus: {
    inserted(el) {
      el.focus()
    }
  }
}

// 使用
<input v-focus>
```

**常用应用场景:**

**场景 1:防抖指令**
```javascript
Vue.directive('debounce', {
  bind(el, binding) {
    let timer = null
    el.addEventListener('click', (e) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        binding.value(e)
      }, 300)
    })
  }
})

// 使用
<button v-debounce="handleClick">防抖按钮</button>
```

**场景 2:权限指令**
```javascript
Vue.directive('permission', {
  inserted(el, binding) {
    const userRole = store.state.user.role
    if (!binding.value.includes(userRole)) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
})

// 使用
<button v-permission="['admin']">删除</button>
```

**场景 3:懒加载指令**
```javascript
Vue.directive('lazyload', {
  inserted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.src = binding.value
          observer.disconnect()
        }
      })
    })
    observer.observe(el)
  }
})

// 使用
<img v-lazyload="imageUrl">
```

**Vue 3 变化:**
```vue
<script setup>
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <input v-focus />
</template>
```

## 17.说说你对 slot 的理解？slot 使用场景有哪些？

**基础插槽:**
```vue
<!-- 子组件 MyCard.vue -->
<div class="card">
  <slot>默认内容</slot>
</div>

<!-- 父组件使用 -->
<MyCard>
  <p>自定义内容</p>
</MyCard>
```

**具名插槽:**
```vue
<!-- 子组件 Layout.vue -->
<div class="layout">
  <header><slot name="header"></slot></header>
  <main><slot></slot></main>
  <footer><slot name="footer"></slot></footer>
</div>

<!-- 父组件使用 -->
<Layout>
  <template #header>
    <h1>标题</h1>
  </template>
  <p>主要内容</p>
  <template #footer>
    <span>页脚</span>
  </template>
</Layout>
```

**作用域插槽:**
```vue
<!-- 子组件 UserList.vue -->
<ul>
  <li v-for="user in users">
    <slot :user="user">{{ user.name }}</slot>
  </li>
</ul>

<!-- 父组件使用 -->
<UserList :users="userList">
  <template #default="{ user }">
    <div class="user-card">
      <img :src="user.avatar">
      <p>{{ user.name }} - {{ user.email }}</p>
    </div>
  </template>
</UserList>
```

**使用场景:**

1. **通用组件封装**: Modal、Dialog、Card
2. **布局组件**: Header、Sidebar、Footer
3. **列表定制**: Table、List 的单元格自定义
4. **表单组件**: Form 的 label 和 content 分离

**Vue 3 简化:**
```vue
<!-- Vue 3 简写语法 -->
<MyComponent>
  <template #item="{ data }">
    {{ data.name }}
  </template>
</MyComponent>
```

---

# Vue 3 专项面试题

## 18.Vue 2 和 Vue 3 的主要区别有哪些？

**核心差异:**

| 特性 | Vue 2 | Vue 3 |
|------|-------|-------|
| 响应式原理 | Object.defineProperty | Proxy |
| API 风格 | Options API | Composition API |
| 生命周期 | beforeDestroy/destroyed | beforeUnmount/unmounted |
| 多根节点 | ❌ | ✅ (Fragment) |
| Teleport | ❌ | ✅ |
| Suspense | 实验性 | ✅ |
| TypeScript 支持 | 一般 | 优秀 |
| 体积 | 较大 | 减小 41% |
| 性能 | 基准 | 快 1.3-2 倍 |

**代码对比:**
```vue
<!-- Vue 2 Options API -->
<script>
export default {
  data() {
    return {
      count: 0,
      user: null
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  created() {
    this.fetchUser()
  }
}
</script>

<!-- Vue 3 Composition API -->
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)
const user = ref(null)

const increment = () => count.value++

const fetchUser = async () => {
  user.value = await api.getUser()
}

onMounted(fetchUser)
</script>
```

## 19.Composition API 和 Options API 有什么区别？

**Options API 特点:**
- 按选项组织代码 (data, methods, computed)
- 逻辑分散，大组件难以维护
- this 指向复杂
- TypeScript 推断困难

**Composition API 优势:**
- 按逻辑功能组织代码
- 更好的代码复用 (Composables)
- 更清晰的 this(无 this)
- 优秀的 TypeScript 支持

**对比示例:**
```vue
<!-- Options API - 逻辑分散 -->
<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      pagination: { page: 1, size: 10 }
    }
  },
  methods: {
    search() { /* ... */ },
    loadPage() { /* ... */ }
  },
  computed: {
    totalPages() { /* ... */ }
  }
}
</script>

<!-- Composition API - 逻辑聚合 -->
<script setup>
import { ref, computed } from 'vue'
import { useSearch } from '@/composables/useSearch'

const { searchQuery, searchResults, search } = useSearch()
const { pagination, totalPages, loadPage } = usePagination()

// 搜索相关逻辑在一个地方
</script>
```

## 20.Vue 3 的响应式原理有什么变化？

**Vue 2 限制:**
```javascript
// ❌ 无法检测
obj.newProp = 'value'
arr[0] = 'new'

// ✅ 需要用$set
Vue.set(obj, 'newProp', 'value')
```

**Vue 3 Proxy 实现:**
```javascript
import { reactive, ref } from 'vue'

// 对象响应式
const state = reactive({
  count: 0,
  nested: { value: 1 }
})
state.count++ // ✅ 自动追踪
state.newProp = 'value' // ✅ 支持动态添加

// 基本类型用 ref
const count = ref(0)
count.value++ // ✅

// 底层原理
const handler = {
  get(target, key, receiver) {
    track(target, key) // 收集依赖
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    trigger(target, key) // 触发更新
    return result
  }
}
```

## 21.setup() 和 setup 语法糖有什么区别？

**基础 setup():**
```vue
<script>
import { ref } from 'vue'

export default {
  setup(props, context) {
    const count = ref(0)
    const increment = () => count.value++
    
    // 必须返回
    return {
      count,
      increment
    }
  }
}
</script>

**setup 语法糖:**
```vue
<script setup>
import { ref } from 'vue'

// 自动暴露，无需 return
const count = ref(0)
const increment = () => count.value++

// 直接使用 props
const props = defineProps(['userId'])
const emit = defineEmits(['update'])
</script>
```

**setup 语法糖优势:**
- 更简洁的代码
- 自动类型推导
- 顶层绑定自动暴露
- 减少样板代码

## 22.Vue 3 中如何使用 TypeScript？

**类型定义:**
```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

// Props 类型
interface UserProps {
  userId: number
  name?: string
}

const props = withDefaults(defineProps<UserProps>(), {
  name: 'Guest'
})

// Emits 类型
interface Emits {
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}

const emit = defineEmits<Emits>()

// 响应式数据
interface User {
  id: number
  name: string
  email: string
}

const user = ref<User | null>(null)
const userList = ref<User[]>([])

// 计算属性
const userName = computed<string>(() => {
  return user.value?.name || 'Unknown'
})
</script>
```

## 23.Pinia 和 Vuex 有什么区别？

**Vuex 特点:**
```javascript
// 复杂的 mutation
export default createStore({
  state: { count: 0 },
  mutations: {
    increment(state) { state.count++ }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => commit('increment'), 1000)
    }
  }
})
```

**Pinia 优势:**
```typescript
// 更简洁的 API
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    async incrementAsync() {
      await api.increment()
      this.count++ // 直接修改 state
    }
  }
})

// 组件中使用
const store = useCounterStore()
store.count++ // 直接修改
store.incrementAsync()
```

**核心区别:**
- Pinia 移除 mutations(更简洁)
- 更好的 TypeScript 支持
- 更小的体积 (1KB)
- 支持模块化 (无需嵌套)
- Devtools 集成更好

## 24.Vue 3 的性能优化有哪些？

**编译时优化:**
```vue
<!-- 1. Patch Flags - 静态标记 -->
<div>
  <h1>{{ title }}</h1>        <!-- 动态文本 -->
  <p class="static">静态</p>   <!-- PatchFlag=0, 跳过 -->
</div>

<!-- 2. 静态提升 -->
<div>
  <span class="icon"></span>   <!-- 提升到 render 外 -->
</div>

<!-- 3. 事件缓存 -->
<button @click="handler"></button> <!-- 缓存 handler -->
```

**运行时优化:**
```vue
<script setup>
import { shallowRef, markRaw } from 'vue'

// 1. shallowRef - 浅响应式
const largeList = shallowRef([]) // 不深度监听

// 2. markRaw - 非响应式
const chart = markRaw(new Chart()) // 不转为响应式

// 3. v-show 替代 v-if
<div v-show="visible">内容</div>

// 4. 组件懒加载
const AsyncComp = defineAsyncComponent(() => import('./Comp.vue'))
</script>
```

## 25.Teleport 是什么？有什么使用场景？

**定义:** Teleport 可以将组件内容传送到指定的 DOM 节点。

**基础用法:**
```vue
<teleport to="body">
  <div class="modal">
    <slot></slot>
  </div>
</teleport>

<!-- 也可以传送到其他选择器 -->
<teleport to="#modal-root">
  <div>内容</div>
</teleport>
```

**使用场景:**

**场景 1:模态框**
```vue
<template>
  <button @click="show = true">打开</button>
  
  <Teleport to="body">
    <div v-if="show" class="modal-overlay">
      <div class="modal">
        <slot></slot>
        <button @click="show = false">关闭</button>
      </div>
    </div>
  </Teleport>
</template>
```

**场景 2:Toast 提示**
```vue
<Teleport to=".toast-container">
  <div v-for="toast in toasts" :key="toast.id">
    {{ toast.message }}
  </div>
</Teleport>
```

**场景 3:下拉菜单**
```vue
<Teleport to="body">
  <div v-show="isOpen" class="dropdown-menu">
    <!-- 避免被父容器 overflow:hidden 裁剪 -->
  </div>
</Teleport>
```

## 26.Suspense 组件的作用是什么？

**作用:** 协调组件树中多个异步依赖的加载状态。

**基础用法:**
```vue
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() => import('./Comp.vue'))
</script>
```

**配合 async setup:**
```vue
<!-- AsyncComponent.vue -->
<script setup>
const data = await fetchData()
</script>

<template>
  <div>{{ data }}</div>
</template>
```

**实际应用场景:**
```vue
<Suspense>
  <template #default>
    <DashboardLayout>
      <UserProfile />
      <UserPosts />
    </DashboardLayout>
  </template>
  <template #fallback>
    <SkeletonLoader />
  </template>
</Suspense>
```

## 27.Vue 3 中如何实现过渡和动画？

**基础过渡:**
```vue
<transition name="fade">
  <div v-if="show">内容</div>
</transition>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

**列表过渡:**
```vue
<transition-group name="list">
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</transition-group>

<style>
.list-move {
  transition: transform 0.3s;
}
</style>
```

**JavaScript 钩子:**
```vue
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
>
  <div>内容</div>
</transition>

<script setup>
const beforeEnter = (el) => {
  el.style.opacity = 0
}

const enter = (el, done) => {
  el.animate({ opacity: [0, 1] }, { duration: 300 })
  done()
}
</script>
```

## 28.Vue 3 项目如何配置 Vite？

**基础配置:**
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia']
        }
      }
    }
  }
})
```

**CSS 预处理:**
```javascript
// vite.config.js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables.scss";
          @mixin flex-center { display: flex; justify-content: center; align-items: center; }
        `
      }
    }
  }
})
```

## 29.Vue 3 生态系统中有哪些常用库？

**状态管理:**
- Pinia(官方推荐)
- Vuex 4(兼容 Vue 3)

**路由:**
- Vue Router 4

**UI 组件库:**
- Element Plus
- Ant Design Vue 3.x
- Naive UI
- Vant 4(移动端)

**工具库:**
- VueUse(Composition API 工具集)
- Axios(HTTP 请求)
- Day.js(日期处理)

**构建工具:**
- Vite(官方推荐)
- Vue CLI(已停止新功能开发)

**测试工具:**
- Vitest(Vite 原生测试框架)
- Vue Test Utils
- Testing Library

---

# 实战编码题

## 30.实现一个支持防抖的搜索输入框

```vue
<script setup>
import { ref, watch } from 'vue'
import { debounce } from 'lodash-es'

const query = ref('')
const results = ref([])
const loading = ref(false)

// 防抖搜索函数
const debouncedSearch = debounce(async (searchQuery) => {
  if (!searchQuery) {
    results.value = []
    return
  }
  
  loading.value = true
  try {
    const response = await fetch(`/api/search?q=${searchQuery}`)
    results.value = await response.json()
  } catch (error) {
    console.error('Search failed:', error)
  } finally {
    loading.value = false
  }
}, 300)

// 监听输入变化
watch(query, (newValue) => {
  debouncedSearch(newValue)
})
</script>

<template>
  <div class="search-box">
    <input
      v-model="query"
      type="text"
      placeholder="搜索..."
      :disabled="loading"
    />
    <span v-if="loading">加载中...</span>
    
    <ul v-if="results.length">
      <li v-for="item in results" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
```

## 31.实现一个可复用的 Composable 函数

```typescript
// composables/useFetch.js
import { ref } from 'vue'

export function useFetch(url, options = {}) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)
  
  const execute = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(url, options)
      if (!response.ok) throw new Error(response.statusText)
      data.value = await response.json()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }
  
  // 立即执行
  execute()
  
  return {
    data,
    error,
    loading,
    refresh: execute
  }
}

// 使用示例
<script setup>
import { useFetch } from '@/composables/useFetch'

const { data: users, loading, refresh } = useFetch('/api/users')
</script>
```

## 32.实现一个表格分页组件

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps({
  total: { type: Number, required: true },
  pageSize: { type: Number, default: 10 },
  currentPage: { type: Number, default: 1 }
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

const pages = computed(() => {
  const pages = []
  const start = Math.max(1, props.currentPage - 2)
  const end = Math.min(totalPages.value, props.currentPage + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:currentPage', page)
  }
}
</script>

<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      上一页
    </button>
    
    <button
      v-for="page in pages"
      :key="page"
      :class="{ active: currentPage === page }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
    
    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      下一页
    </button>
    
    <span class="total">
      共 {{ total }} 条
    </span>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  gap: 8px;
  align-items: center;
}

button.active {
  background-color: #409eff;
  color: white;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

---

# 高频面试知识点总结

## Vue 2 核心考点

1. **响应式原理**: Object.defineProperty + 发布订阅
2. **生命周期**: 8 个钩子的执行时机
3. **组件通信**: props/$emit、provide/inject、Vuex
4. **虚拟 DOM**: diff 算法、key 的作用
5. **指令系统**: v-if/v-for、v-show、自定义指令
6. **计算属性**: computed vs methods vs watch
7. **事件处理**: 事件修饰符、按键修饰符
8. **插槽机制**: 默认插槽、具名插槽、作用域插槽

## Vue 3 核心考点

1. **Composition API**: setup、ref、reactive、computed
2. **响应式升级**: Proxy 原理、ref vs reactive
3. **生命周期变化**: beforeUnmount、unmounted
4. **新组件**: Teleport、Suspense、Fragment
5. **性能优化**: Patch Flag、静态提升、事件缓存
6. **TypeScript**: 类型定义、泛型组件
7. **生态系统**: Pinia、Vue Router 4、Vite
8. **Composables**: 逻辑复用最佳实践

## 实战能力考察

1. **组件设计**: 职责单一、可复用性
2. **性能优化**: 懒加载、防抖节流、虚拟列表
3. **问题解决**: 内存泄漏、响应式陷阱
4. **工程化**: Vite 配置、代码分割、部署优化
5. **代码规范**: 命名规范、注释习惯、目录结构
