const t={title:"wangEditor富文本编辑器",categories:["wangEditor","Angular","富文本"],tags:["wangEditor","富文本"],author:"深海如梦",date:"2020-10-25",excerpt:"wangEditor富文本编辑器"},n=`<h1>wangEditor富文本编辑器</h1>
<p>npm i wangeditor</p>
<p>对应的页面</p>
<p>组件 ts</p>
<pre><code class="language-typescript">import wangEditor from 'wangeditor';


 //wang富文本编辑器
  wEditor: any;
  wangEditorInit() {
    this.wEditor = new wangEditor('#wangEditor');
    // 配置菜单栏，删减菜单，调整顺序
    this.wEditor.config.menus = [
      &quot;bold&quot;, // 粗体
      &quot;italic&quot;, // 斜体
      &quot;underline&quot;, // 下划线
      &quot;head&quot;, // 标题
      &quot;fontName&quot;, // 字体
      &quot;fontSize&quot;, // 字号
      &quot;strikeThrough&quot;, // 删除线
      &quot;foreColor&quot;, // 文字颜色
      &quot;backColor&quot;, // 背景颜色
      &quot;link&quot;, // 插入链接
      &quot;list&quot;, // 列表
      &quot;justify&quot;, // 对齐方式
      &quot;quote&quot;, // 引用
      &quot;table&quot;, // 表格
      // &quot;image&quot;, // 插入图片
      // 'video',  // 插入视频
      &quot;code&quot;, // 插入代码
      &quot;undo&quot;, // 撤销
      &quot;redo&quot;, // 重复
      &quot;fullscreen&quot;, // 全屏
    ];

    // 设置编辑区域高度为 500px
    this.wEditor.config.height = 500;

    // 提示语
    this.wEditor.config.placeholder = &quot; &quot;;

    /* --------------------图片上传------------------------------ */
    this.wEditor.config.uploadImgAccept = [&quot;jpg&quot;, &quot;jpeg&quot;, &quot;png&quot;, &quot;gif&quot;, &quot;bmp&quot;]; // 限制图片类型
    this.wEditor.config.uploadImgMaxLength = 5; // 一次最多上传 5 个图片
    this.wEditor.config.uploadImgServer =
      environment.customerManagementUrl + &quot;/chat/img/uploadImg&quot;; // 配置图片上传服务端接口
    this.wEditor.config.uploadImgParams = {
      adminId: this.adminId,
      gameUserId: &quot;-1&quot;,
    };
    // this.wEditor.config.uploadImgParamsWithUrl = true // 需要将参数拼接到 url 中，可再加上如下配置。
    // this.wEditor.config.uploadImgParams = {   // 自定义上传参数
    //   // gameUserId: -1,
    // }
    this.wEditor.config.uploadFileName = &quot;fileName&quot;; // 自定义 fileName
    this.wEditor.config.uploadImgShowBase64 = true; //使用 base64 格式保存图片

    this.wEditor.config.uploadImgHooks = {
      // 上传图片超时
      timeout: (xhr) =&gt; {
        console.log(&quot;超时&quot;);
      },

      customInsert: (insertImg, result, Editor) =&gt; {
        // result 即服务端返回的接口
        // console.log('customInsert', result);

        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        insertImg(result.data);
      },
    };

    // 配置 onchange 回调函数
    this.wEditor.config.onchange = (newHtml) =&gt; {
      // console.log('change后最新的 html：', newHtml);

      // 对图片进行处理
      let html = newHtml.replace(/100%/g, &quot;300px&quot;);
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

</code></pre>
<p>组件html</p>
<pre><code class="language-html">&lt;div id=&quot;wangEditor&quot;&gt;&lt;/div&gt;
</code></pre>
`;export{t as attributes,n as html};
