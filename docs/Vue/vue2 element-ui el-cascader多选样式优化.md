---
title: vue2 element-ui el-cascader多选样式优化

categories:
  - Vue

tags:
  - Vue
  - element-ui
  - el-cascader

date: "2024-05-15"

author: 深海如梦

excerpt: vue2 element-ui el-cascader多选样式优化

---



# vue2 element-ui el-cascader多选样式优化






 

* 参考：https://blog.csdn.net/Kyiiiii/article/details/130216370
* 参考2：https://www.cnblogs.com/canjiaXQD/p/15054267.html
* 解决问题：el-cascader 级联选择组件，父子节点不关联时，去除radio按钮





## 在main.js 全局样式中添加

隐藏el-cascader原先的radio样式，并扩大raido的点击范围

```css
.el-cascader-panel .el-radio {
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  top: 0px;
  right: 30px;
}
.el-cascader-panel .el-radio {
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  top: 0px;
  right: 30px;
}
.el-cascader-panel .el-radio__input {
  visibility: hidden;
}
.el-cascader-panel .el-radio__input {
  display: none;
}
```



## 使用

html中使用

```vue
<el-cascader
     filterable
     ref="undertakeConfigRef"
     v-model="dataSource.undertakeConfig"
     :options="undertakeConfigOptions"
     :props="{
        expandTrigger: 'hover',
        checkStrictly: true,
        emitPath: false,
     }"
     style="width: 50%;"
     placeholder="请选择"
     @change="changeUndertakeConfig"
></el-cascader>
```

然后在change事件中



```javascript
changeUndertakeConfig(value) {
      // 改变值时，关闭弹窗
      if (this.$refs.undertakeConfigRef) {
        this.$refs.undertakeConfigRef.dropDownVisible = false
      }
}
```

