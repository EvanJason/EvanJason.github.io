---
‎categories:
  - webpack
  - ie
  - defineProperty
tags:
  - webpack
  - ie
  - defineProperty
author: 深海如梦
date: 2021/05/27
excerpt: 解决webpack css和js分开打包后， ie不识别 defineProperty 的问题
---



# 解决webpack css和js分开打包后， ie不识别 defineProperty 的问题

```html
<!-- 直接放在html中 -->
<!-- 不用安装npm i object-defineproperty-ie8 直接复制改npm插件里的源码，如果出现问题了，再去看下最新版本的object-defineproperty-ie8 --> 
<script>
    var origDefineProperty = Object.defineProperty;

    var arePropertyDescriptorsSupported = function () {
      var obj = {};
      try {
        origDefineProperty(obj, "x", {
          enumerable: false,
          value: obj
        });
        for (var _ in obj) {
          return false;
        }
        return obj.x === obj;
      } catch (e) {
        /* this is IE 8. */
        return false;
      }
    };
    var supportsDescriptors =
      origDefineProperty && arePropertyDescriptorsSupported();

    if (!supportsDescriptors) {
      Object.defineProperty = function (a, b, c) {
        //IE8支持修改元素节点的属性
        if (origDefineProperty && a.nodeType == 1) {
          return origDefineProperty(a, b, c);
        } else {
          a[b] = c.value || (c.get && c.get());
        }
      };
    }
  </script>
```

