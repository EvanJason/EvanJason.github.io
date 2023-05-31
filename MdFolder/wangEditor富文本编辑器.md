---
title: wangEditor富文本编辑器

categories:
  - wangEditor
  - Angular
  - 富文本

tags:
  - wangEditor
  - 富文本

author: 深海如梦

date: "2020-10-25"

excerpt: wangEditor富文本编辑器

---





# wangEditor富文本编辑器



npm i wangeditor



对应的页面



组件 ts

```typescript
import wangEditor from 'wangeditor';


 //wang富文本编辑器
  wEditor: any;
  wangEditorInit() {
    this.wEditor = new wangEditor('#wangEditor');
    // 配置菜单栏，删减菜单，调整顺序
    this.wEditor.config.menus = [
      "bold", // 粗体
      "italic", // 斜体
      "underline", // 下划线
      "head", // 标题
      "fontName", // 字体
      "fontSize", // 字号
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "table", // 表格
      // "image", // 插入图片
      // 'video',  // 插入视频
      "code", // 插入代码
      "undo", // 撤销
      "redo", // 重复
      "fullscreen", // 全屏
    ];

    // 设置编辑区域高度为 500px
    this.wEditor.config.height = 500;

    // 提示语
    this.wEditor.config.placeholder = " ";

    /* --------------------图片上传------------------------------ */
    this.wEditor.config.uploadImgAccept = ["jpg", "jpeg", "png", "gif", "bmp"]; // 限制图片类型
    this.wEditor.config.uploadImgMaxLength = 5; // 一次最多上传 5 个图片
    this.wEditor.config.uploadImgServer =
      environment.customerManagementUrl + "/chat/img/uploadImg"; // 配置图片上传服务端接口
    this.wEditor.config.uploadImgParams = {
      adminId: this.adminId,
      gameUserId: "-1",
    };
    // this.wEditor.config.uploadImgParamsWithUrl = true // 需要将参数拼接到 url 中，可再加上如下配置。
    // this.wEditor.config.uploadImgParams = {   // 自定义上传参数
    //   // gameUserId: -1,
    // }
    this.wEditor.config.uploadFileName = "fileName"; // 自定义 fileName
    this.wEditor.config.uploadImgShowBase64 = true; //使用 base64 格式保存图片

    this.wEditor.config.uploadImgHooks = {
      // 上传图片超时
      timeout: (xhr) => {
        console.log("超时");
      },

      customInsert: (insertImg, result, Editor) => {
        // result 即服务端返回的接口
        // console.log('customInsert', result);

        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        insertImg(result.data);
      },
    };

    // 配置 onchange 回调函数
    this.wEditor.config.onchange = (newHtml) => {
      // console.log('change后最新的 html：', newHtml);

      // 对图片进行处理
      let html = newHtml.replace(/100%/g, "300px");
      this.knowledgeContent = html;
      // console.log(this.knowledgeContent);
    };

    // 注意，先配置 height ，再执行 create()
    this.wEditor.create();
  }


ngOnInit() {
     this.wangEditorInit();
 	 this.wEditor.txt.html(this.knowledgeContent);
}

```

组件html

```html
<div id="wangEditor"></div>
```

