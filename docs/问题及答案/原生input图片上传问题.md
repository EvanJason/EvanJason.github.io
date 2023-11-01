---
title: 原生input图片上传问题

categories:
  - input
  - javascript
  - 图片上传

tags:
  - input
  - javascript
  - 图片上传

date: "2023-10-13"

author: 深海如梦

excerpt: 原生input图片上传问题

---

# 原生js input 图片上传注意事项

## 属性参考

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7



## 代码部分

```typescript
/* 
  TODO 
  multiple属性在ios下测试支持，但在android下，并没有被完全支持。
  现在发现某些android机型（如华为）的图片app不支持多选功能，导致该multiple属性无法生效。 
  暂时去除多选功能，后续再考虑如何解决。
*/
<input 
    classname="upload_input"
    id="upload_input" 
    type="file"
	//multiple
	accept="image/*;capture=camera"
/>
const upload_input = document.getElementById('upload_input')

upload_btn_div.onclick = function (e) {
    /* 
       TODO
       先设置accept属性为image/*;capture=camera，
       然后在点击图片上传按钮时，再将accept属性设置为image/*，
       这样就可以实现选择相册或者拍照上传图片了
       另外可以参考 https://blog.csdn.net/yangxun9264986/article/details/131769367
    */
    upload_input.setAttribute('accept', 'image/*');
}
```

