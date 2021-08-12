import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2020/wangEditor富文本编辑器.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2020/wangEditor富文本编辑器.html",
    'title': "wangEditor富文本编辑器",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>wangEditor富文本编辑器</h1>\n<p>npm i wangeditor</p>\n<p>对应的页面</p>\n<p>组件 ts</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> wangEditor <span class="token keyword">from</span> <span class="token string">\'wangeditor\'</span><span class="token punctuation">;</span>\n\n\n <span class="token comment">//wang富文本编辑器</span>\n  wEditor<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n  <span class="token function">wangEditorInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">wangEditor</span><span class="token punctuation">(</span><span class="token string">\'#wangEditor\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 配置菜单栏，删减菜单，调整顺序</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>menus <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token string">"bold"</span><span class="token punctuation">,</span> <span class="token comment">// 粗体</span>\n      <span class="token string">"italic"</span><span class="token punctuation">,</span> <span class="token comment">// 斜体</span>\n      <span class="token string">"underline"</span><span class="token punctuation">,</span> <span class="token comment">// 下划线</span>\n      <span class="token string">"head"</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span>\n      <span class="token string">"fontName"</span><span class="token punctuation">,</span> <span class="token comment">// 字体</span>\n      <span class="token string">"fontSize"</span><span class="token punctuation">,</span> <span class="token comment">// 字号</span>\n      <span class="token string">"strikeThrough"</span><span class="token punctuation">,</span> <span class="token comment">// 删除线</span>\n      <span class="token string">"foreColor"</span><span class="token punctuation">,</span> <span class="token comment">// 文字颜色</span>\n      <span class="token string">"backColor"</span><span class="token punctuation">,</span> <span class="token comment">// 背景颜色</span>\n      <span class="token string">"link"</span><span class="token punctuation">,</span> <span class="token comment">// 插入链接</span>\n      <span class="token string">"list"</span><span class="token punctuation">,</span> <span class="token comment">// 列表</span>\n      <span class="token string">"justify"</span><span class="token punctuation">,</span> <span class="token comment">// 对齐方式</span>\n      <span class="token string">"quote"</span><span class="token punctuation">,</span> <span class="token comment">// 引用</span>\n      <span class="token string">"table"</span><span class="token punctuation">,</span> <span class="token comment">// 表格</span>\n      <span class="token comment">// "image", // 插入图片</span>\n      <span class="token comment">// \'video\',  // 插入视频</span>\n      <span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token comment">// 插入代码</span>\n      <span class="token string">"undo"</span><span class="token punctuation">,</span> <span class="token comment">// 撤销</span>\n      <span class="token string">"redo"</span><span class="token punctuation">,</span> <span class="token comment">// 重复</span>\n      <span class="token string">"fullscreen"</span><span class="token punctuation">,</span> <span class="token comment">// 全屏</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 设置编辑区域高度为 500px</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 提示语</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>placeholder <span class="token operator">=</span> <span class="token string">" "</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/* --------------------图片上传------------------------------ */</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgAccept <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"jpg"</span><span class="token punctuation">,</span> <span class="token string">"jpeg"</span><span class="token punctuation">,</span> <span class="token string">"png"</span><span class="token punctuation">,</span> <span class="token string">"gif"</span><span class="token punctuation">,</span> <span class="token string">"bmp"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 限制图片类型</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgMaxLength <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 一次最多上传 5 个图片</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgServer <span class="token operator">=</span>\n      environment<span class="token punctuation">.</span>customerManagementUrl <span class="token operator">+</span> <span class="token string">"/chat/img/uploadImg"</span><span class="token punctuation">;</span> <span class="token comment">// 配置图片上传服务端接口</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgParams <span class="token operator">=</span> <span class="token punctuation">{</span>\n      adminId<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adminId<span class="token punctuation">,</span>\n      gameUserId<span class="token operator">:</span> <span class="token string">"-1"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">// this.wEditor.config.uploadImgParamsWithUrl = true // 需要将参数拼接到 url 中，可再加上如下配置。</span>\n    <span class="token comment">// this.wEditor.config.uploadImgParams = {   // 自定义上传参数</span>\n    <span class="token comment">//   // gameUserId: -1,</span>\n    <span class="token comment">// }</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadFileName <span class="token operator">=</span> <span class="token string">"fileName"</span><span class="token punctuation">;</span> <span class="token comment">// 自定义 fileName</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgShowBase64 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//使用 base64 格式保存图片</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgHooks <span class="token operator">=</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 上传图片超时</span>\n      <span class="token function-variable function">timeout</span><span class="token operator">:</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"超时"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token function-variable function">customInsert</span><span class="token operator">:</span> <span class="token punctuation">(</span>insertImg<span class="token punctuation">,</span> result<span class="token punctuation">,</span> Editor<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// result 即服务端返回的接口</span>\n        <span class="token comment">// console.log(\'customInsert\', result);</span>\n\n        <span class="token comment">// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可</span>\n        <span class="token function">insertImg</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 配置 onchange 回调函数</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newHtml<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// console.log(\'change后最新的 html：\', newHtml);</span>\n\n      <span class="token comment">// 对图片进行处理</span>\n      <span class="token keyword">let</span> html <span class="token operator">=</span> newHtml<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">100%</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"300px"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>knowledgeContent <span class="token operator">=</span> html<span class="token punctuation">;</span>\n      <span class="token comment">// console.log(this.knowledgeContent);</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 注意，先配置 height ，再执行 create()</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n\n<span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">wangEditorInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>knowledgeContent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre>\n<p>组件html</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wangEditor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "wangEditor\u5BCC\u6587\u672C\u7F16\u8F91\u5668"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>npm i wangeditor</p>\n<p>对应的页面</p>\n<p>组件 ts</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> wangEditor <span class="token keyword">from</span> <span class="token string">\'wangeditor\'</span><span class="token punctuation">;</span>\n\n\n <span class="token comment">//wang富文本编辑器</span>\n  wEditor<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n  <span class="token function">wangEditorInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">wangEditor</span><span class="token punctuation">(</span><span class="token string">\'#wangEditor\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 配置菜单栏，删减菜单，调整顺序</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>menus <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token string">"bold"</span><span class="token punctuation">,</span> <span class="token comment">// 粗体</span>\n      <span class="token string">"italic"</span><span class="token punctuation">,</span> <span class="token comment">// 斜体</span>\n      <span class="token string">"underline"</span><span class="token punctuation">,</span> <span class="token comment">// 下划线</span>\n      <span class="token string">"head"</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span>\n      <span class="token string">"fontName"</span><span class="token punctuation">,</span> <span class="token comment">// 字体</span>\n      <span class="token string">"fontSize"</span><span class="token punctuation">,</span> <span class="token comment">// 字号</span>\n      <span class="token string">"strikeThrough"</span><span class="token punctuation">,</span> <span class="token comment">// 删除线</span>\n      <span class="token string">"foreColor"</span><span class="token punctuation">,</span> <span class="token comment">// 文字颜色</span>\n      <span class="token string">"backColor"</span><span class="token punctuation">,</span> <span class="token comment">// 背景颜色</span>\n      <span class="token string">"link"</span><span class="token punctuation">,</span> <span class="token comment">// 插入链接</span>\n      <span class="token string">"list"</span><span class="token punctuation">,</span> <span class="token comment">// 列表</span>\n      <span class="token string">"justify"</span><span class="token punctuation">,</span> <span class="token comment">// 对齐方式</span>\n      <span class="token string">"quote"</span><span class="token punctuation">,</span> <span class="token comment">// 引用</span>\n      <span class="token string">"table"</span><span class="token punctuation">,</span> <span class="token comment">// 表格</span>\n      <span class="token comment">// "image", // 插入图片</span>\n      <span class="token comment">// \'video\',  // 插入视频</span>\n      <span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token comment">// 插入代码</span>\n      <span class="token string">"undo"</span><span class="token punctuation">,</span> <span class="token comment">// 撤销</span>\n      <span class="token string">"redo"</span><span class="token punctuation">,</span> <span class="token comment">// 重复</span>\n      <span class="token string">"fullscreen"</span><span class="token punctuation">,</span> <span class="token comment">// 全屏</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 设置编辑区域高度为 500px</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 提示语</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>placeholder <span class="token operator">=</span> <span class="token string">" "</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/* --------------------图片上传------------------------------ */</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgAccept <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"jpg"</span><span class="token punctuation">,</span> <span class="token string">"jpeg"</span><span class="token punctuation">,</span> <span class="token string">"png"</span><span class="token punctuation">,</span> <span class="token string">"gif"</span><span class="token punctuation">,</span> <span class="token string">"bmp"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 限制图片类型</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgMaxLength <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 一次最多上传 5 个图片</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgServer <span class="token operator">=</span>\n      environment<span class="token punctuation">.</span>customerManagementUrl <span class="token operator">+</span> <span class="token string">"/chat/img/uploadImg"</span><span class="token punctuation">;</span> <span class="token comment">// 配置图片上传服务端接口</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgParams <span class="token operator">=</span> <span class="token punctuation">{</span>\n      adminId<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adminId<span class="token punctuation">,</span>\n      gameUserId<span class="token operator">:</span> <span class="token string">"-1"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">// this.wEditor.config.uploadImgParamsWithUrl = true // 需要将参数拼接到 url 中，可再加上如下配置。</span>\n    <span class="token comment">// this.wEditor.config.uploadImgParams = {   // 自定义上传参数</span>\n    <span class="token comment">//   // gameUserId: -1,</span>\n    <span class="token comment">// }</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadFileName <span class="token operator">=</span> <span class="token string">"fileName"</span><span class="token punctuation">;</span> <span class="token comment">// 自定义 fileName</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgShowBase64 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//使用 base64 格式保存图片</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgHooks <span class="token operator">=</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 上传图片超时</span>\n      <span class="token function-variable function">timeout</span><span class="token operator">:</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"超时"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token function-variable function">customInsert</span><span class="token operator">:</span> <span class="token punctuation">(</span>insertImg<span class="token punctuation">,</span> result<span class="token punctuation">,</span> Editor<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// result 即服务端返回的接口</span>\n        <span class="token comment">// console.log(\'customInsert\', result);</span>\n\n        <span class="token comment">// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可</span>\n        <span class="token function">insertImg</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 配置 onchange 回调函数</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newHtml<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// console.log(\'change后最新的 html：\', newHtml);</span>\n\n      <span class="token comment">// 对图片进行处理</span>\n      <span class="token keyword">let</span> html <span class="token operator">=</span> newHtml<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">100%</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"300px"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>knowledgeContent <span class="token operator">=</span> html<span class="token punctuation">;</span>\n      <span class="token comment">// console.log(this.knowledgeContent);</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 注意，先配置 height ，再执行 create()</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n\n<span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">wangEditorInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>wEditor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>knowledgeContent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre>\n<p>组件html</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wangEditor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2020/10/25",
    'updated': null,
    'excerpt': "wangEditor富文本编辑器",
    'cover': undefined,
    'categories': [
        "wangEditor",
        "Angular",
        "富文本"
    ],
    'tags': [
        "wangEditor",
        "富文本"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2021/Vs Code 前端常用插件.md",
                "title": "前端常用插件",
                "link": "posts/2021/Vs Code 前端常用插件.html",
                "date": "2021/05/06",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "vscode"
                ],
                "tags": [
                    "vscode",
                    "插件"
                ],
                "excerpt": "前端常用插件",
                "cover": "../../pic/image-20210409094037510.png"
            },
            {
                "pagePath": "posts/2020/树形控件功能实现.md",
                "title": "树形控件功能",
                "link": "posts/2020/树形控件功能实现.html",
                "date": "2020/12/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "树形控件",
                    "功能"
                ],
                "excerpt": "树形控件功能",
                "cover": "../../pic/image-20210415160710543.png"
            },
            {
                "pagePath": "posts/2020/wangEditor富文本编辑器.md",
                "title": "wangEditor富文本编辑器",
                "link": "posts/2020/wangEditor富文本编辑器.html",
                "date": "2020/10/25",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "wangEditor",
                    "Angular",
                    "富文本"
                ],
                "tags": [
                    "wangEditor",
                    "富文本"
                ],
                "excerpt": "wangEditor富文本编辑器"
            },
            {
                "pagePath": "posts/2020/Angular 多类名条件判断.md",
                "title": "Angular 多类名条件判断",
                "link": "posts/2020/Angular 多类名条件判断.html",
                "date": "2020/10/22",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Angular 多类名条件判断"
            },
            {
                "pagePath": "posts/2020/angular 复制粘贴事件.md",
                "title": "angular 复制粘贴事件",
                "link": "posts/2020/angular 复制粘贴事件.html",
                "date": "2020/10/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular",
                    "ngx-clipboard"
                ],
                "tags": [
                    "antd",
                    "复制粘贴"
                ],
                "excerpt": "angular 复制粘贴事件"
            },
            {
                "pagePath": "posts/2020/Echarts 配置和知识点.md",
                "title": "Echarts 配置和知识点",
                "link": "posts/2020/Echarts 配置和知识点.html",
                "date": "2020/09/28",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular",
                    "Echarts"
                ],
                "tags": [
                    "知识点",
                    "配置",
                    "Echarts"
                ],
                "excerpt": "Echarts 配置和知识点"
            },
            {
                "pagePath": "posts/2020/angular项目 页面加水印.md",
                "title": "angular项目 页面加水印",
                "link": "posts/2020/angular项目 页面加水印.html",
                "date": "2020/09/06",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "水印",
                    "页面水印",
                    "Angular"
                ],
                "excerpt": "html 使用 <div style=\"position: fixed;top: 0;left: 0;\"> <div *ngFor=\"let item of watermarkList\" class=\"watermarkList\"> <div [ngStyle]=\"item.objStyle\"> {{item.txt}} </div> </div> </div> ts // 页面水印 watermarkL..."
            },
            {
                "pagePath": "posts/2021/数组的深浅拷贝.md",
                "title": "数组的深浅拷贝",
                "link": "posts/2021/数组的深浅拷贝.html",
                "date": "2020/06/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "tags": [
                    "深浅拷贝"
                ],
                "excerpt": "数组的深浅拷贝"
            },
            {
                "pagePath": "posts/2021/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.md",
                "title": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
                "link": "posts/2021/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.html",
                "date": "2020/05/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "tags": [
                    "webpack",
                    "ie",
                    "defineProperty"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/2021/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/2021/antd表格穿梭框功能.html",
                "date": "2020/05/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "穿梭框",
                    "表格"
                ],
                "excerpt": "angular-antd穿梭框功能实现"
            }
        ],
        "categories": [
            {
                "name": "Angular",
                "count": 7
            },
            {
                "name": "antd",
                "count": 2
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "ngx-clipboard",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "Angular",
                "count": 1
            },
            {
                "name": "defineProperty",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "ie",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "webpack",
                "count": 1
            },
            {
                "name": "功能",
                "count": 1
            },
            {
                "name": "复制粘贴",
                "count": 1
            },
            {
                "name": "多类名",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "条件判断",
                "count": 1
            },
            {
                "name": "树形控件",
                "count": 1
            },
            {
                "name": "水印",
                "count": 1
            },
            {
                "name": "深浅拷贝",
                "count": 1
            },
            {
                "name": "知识点",
                "count": 1
            },
            {
                "name": "穿梭框",
                "count": 1
            },
            {
                "name": "表格",
                "count": 1
            },
            {
                "name": "配置",
                "count": 1
            },
            {
                "name": "页面水印",
                "count": 1
            }
        ]
    }
};
