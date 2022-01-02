import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2021/解决网站网页html css兼容性问题.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/解决网站网页html css兼容性问题.html",
    'title': "解决网站网页html css兼容性问题",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>解决网站网页html css兼容性问题</h1>\n<p>总结了在项目设计中遇到的兼容性问题，在此整理出来，以备不时之需。</p>\n<h3 id="%E8%A7%A3%E5%86%B3ie8-css-nth-child4n-%E4%B8%8D%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98%E4%B8%BB%E8%A6%81%E6%98%AF%E5%88%A9%E7%94%A8%E7%A1%AC%E6%96%B9%E6%B3%95">解决ie8 css :nth-child(4n) 不兼容问题主要是利用硬方法<a class="anchor" href="#%E8%A7%A3%E5%86%B3ie8-css-nth-child4n-%E4%B8%8D%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98%E4%B8%BB%E8%A6%81%E6%98%AF%E5%88%A9%E7%94%A8%E7%A1%AC%E6%96%B9%E6%B3%95">§</a></h3>\n<pre class="language-css"><code class="language-css"><span class="token selector">第一种：利用first-child<span class="token punctuation">,</span>该方法在ie可以使用\n<span class="token class">.huo_game_</span> ul li<span class="token pseudo-class">:first-child</span><span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token punctuation">,</span>\n<span class="token class">.huo_game_</span> ul li<span class="token pseudo-class">:first-child</span><span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token punctuation">,</span>\n<span class="token class">.huo_game_</span> ul li<span class="token pseudo-class">:first-child</span><span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li</span> <span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n//还有一种方法就是利用jq的nth-child\n$<span class="token punctuation">(</span><span class="token string">".huo_game_ ul li:nth-child(4n)"</span><span class="token punctuation">)</span>.<span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"margin-right"</span><span class="token punctuation">,</span><span class="token string">"0"</span><span class="token punctuation">)</span>\n</code></pre>\n<h3 id="%E8%A7%A3%E5%86%B3ie7%E7%9A%84%E9%AB%98%E5%BA%A6%E4%B8%A2%E5%A4%B1">解决ie7的高度丢失<a class="anchor" href="#%E8%A7%A3%E5%86%B3ie7%E7%9A%84%E9%AB%98%E5%BA%A6%E4%B8%A2%E5%A4%B1">§</a></h3>\n<p>*padding 或者 _paddding\n*height _height\n*margin _margin\n*width _width</p>\n<h3 id="css--webkit-box-orient-vertical-%E5%B1%9E%E6%80%A7%E7%BC%96%E8%AF%91%E5%90%8E%E4%B8%A2%E5%A4%B1%E9%97%AE%E9%A2%98">CSS -webkit-box-orient: vertical 属性编译后丢失问题<a class="anchor" href="#css--webkit-box-orient-vertical-%E5%B1%9E%E6%80%A7%E7%BC%96%E8%AF%91%E5%90%8E%E4%B8%A2%E5%A4%B1%E9%97%AE%E9%A2%98">§</a></h3>\n<p>解决方法</p>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* autoprefixer: ignore next */</span>\n<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E9%AB%98%E6%96%AF%E6%A8%A1%E7%B3%8A">高斯模糊<a class="anchor" href="#%E9%AB%98%E6%96%AF%E6%A8%A1%E7%B3%8A">§</a></h3>\n<pre class="language-css"><code class="language-css"><span class="token property">filter</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>blur.svg#blur<span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* FireFox, Chrome, Opera */</span>\n<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Chrome, Opera */</span>\n<span class="token property">-moz-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">-ms-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">/* IE6~IE9 */</span>\n<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">Blur</span><span class="token punctuation">(</span>PixelRadius=<span class="token number">1</span><span class="token punctuation">,</span> MakeShadow=false<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/*知识点*/</span>\n<span class="token property">filter</span><span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">Blur</span><span class="token punctuation">(</span>PixelRadius=<span class="token string">\'x\'</span><span class="token punctuation">,</span> MakeShadow=<span class="token string">\'x\'</span><span class="token punctuation">,</span> ShadowOpacity=<span class="token string">\'x\'</span><span class="token punctuation">)</span>\n</code></pre>\n<ul>\n<li>PixelRadius，设置对象的模糊半径，1~100数值。</li>\n<li>MakeShadow，设置对象是否投影，布尔值，true和false</li>\n<li>ShadowOpacity，设置对象投影不透明度，0.0~1.0，假如MakeShadow为false那么该值无效。</li>\n</ul>\n<h3 id="rgba%E5%85%BC%E5%AE%B9">rgba兼容<a class="anchor" href="#rgba%E5%85%BC%E5%AE%B9">§</a></h3>\n<p><strong>ie8及以下版本</strong></p>\n<pre class="language-css"><code class="language-css"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.4</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">gradient</span><span class="token punctuation">(</span>startcolorstr=<span class="token hexcode color">#66000000</span><span class="token punctuation">,</span> endcolorstr=<span class="token hexcode color">#66000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这个颜色“#66000000”是由两部分组成的。\n第一部是#号后面的66。是rgba透明度0.4的IEfilter值。从0.1到0.9每个数字对应一个IEfilter值。对应关系如下：</p>\n<p><a href="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png"><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png" alt="img"></a></p>\n<p>img</p>\n<p>即：alpha*255得到的值再转换为16进制即可。</p>\n<p>第二部分是7f后面的六位 是六进制的颜色值，跟rgb函数中的取值相同，比如rgb(255,255,255)对应#ffffff。</p>\n<h3 id="box-shadow-%E5%85%BC%E5%AE%B9">box-shadow 兼容<a class="anchor" href="#box-shadow-%E5%85%BC%E5%AE%B9">§</a></h3>\n<p><strong>ie8及以下版本</strong></p>\n<pre class="language-css"><code class="language-css"><span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token hexcode color">#000</span><span class="token punctuation">;</span>\n<span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token hexcode color">#000</span><span class="token punctuation">;</span>\n<span class="token property">box-shadow</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token hexcode color">#000</span><span class="token punctuation">;</span>\n\n<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">Shadow</span><span class="token punctuation">(</span>color=<span class="token color">gray</span><span class="token punctuation">,</span> Direction=<span class="token number">125</span><span class="token punctuation">,</span> Strength=<span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>strength是阴影大小，direction是阴影方位，单位为度，可以为负数，color是阴影颜色 （尽量使用数字）\n使用IE滤镜实现盒子阴影的盒子必须是行元素或以行元素显示（block或inline-block;）</p>\n<h3 id="filter%E7%95%8C%E9%9D%A2%E6%BB%A4%E9%95%9C">filter界面滤镜<a class="anchor" href="#filter%E7%95%8C%E9%9D%A2%E6%BB%A4%E9%95%9C">§</a></h3>\n<p>在ie中 <code>filter</code> 分为静态滤镜(Visual Filters)和过渡转场(Transitions Reference)，前者是的效果可以设置元素的不透明度、渐变、模糊、对比度、明度等这些，后者注重的ie的动画效果。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.test</span></span><span class="token punctuation">{</span>\n    <span class="token property">filter</span><span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.    <span class="token comment">/*.后面都是紧跟着各种滤镜和转场函数*/</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/*如：模糊滤镜*/</span>\n<span class="token selector"><span class="token class">.blur</span></span><span class="token punctuation">{</span>\n    <span class="token property">filter</span><span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">Blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">/*.函数的开头第一个字母必须大写，括号()里面的滤镜的各种值*/</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>一般常用Blur,Shadow,Gradient,对应，filter:blur(),box-shadow,rgba();</p>\n<h3 id="%E5%9C%86%E8%A7%92border-radius%E5%85%BC%E5%AE%B9">圆角border-radius兼容<a class="anchor" href="#%E5%9C%86%E8%A7%92border-radius%E5%85%BC%E5%AE%B9">§</a></h3>\n<p>需要下载PIE.htc\n然后css中</p>\n<pre class="language-css"><code class="language-css"><span class="token comment">/*关键属性设置 需要把路径设置好*/</span>\n<span class="token property">behavior</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>PIE.htc<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u89E3\u51B3\u7F51\u7AD9\u7F51\u9875html css\u517C\u5BB9\u6027\u95EE\u9898"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>总结了在项目设计中遇到的兼容性问题，在此整理出来，以备不时之需。</p>\n<h3 id="%E8%A7%A3%E5%86%B3ie8-css-nth-child4n-%E4%B8%8D%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98%E4%B8%BB%E8%A6%81%E6%98%AF%E5%88%A9%E7%94%A8%E7%A1%AC%E6%96%B9%E6%B3%95">解决ie8 css :nth-child(4n) 不兼容问题主要是利用硬方法<a class="anchor" href="#%E8%A7%A3%E5%86%B3ie8-css-nth-child4n-%E4%B8%8D%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98%E4%B8%BB%E8%A6%81%E6%98%AF%E5%88%A9%E7%94%A8%E7%A1%AC%E6%96%B9%E6%B3%95">§</a></h3>\n<pre class="language-css"><code class="language-css"><span class="token selector">第一种：利用first-child<span class="token punctuation">,</span>该方法在ie可以使用\n<span class="token class">.huo_game_</span> ul li<span class="token pseudo-class">:first-child</span><span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token punctuation">,</span>\n<span class="token class">.huo_game_</span> ul li<span class="token pseudo-class">:first-child</span><span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token punctuation">,</span>\n<span class="token class">.huo_game_</span> ul li<span class="token pseudo-class">:first-child</span><span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li<span class="token combinator">+</span>li</span> <span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n//还有一种方法就是利用jq的nth-child\n$<span class="token punctuation">(</span><span class="token string">".huo_game_ ul li:nth-child(4n)"</span><span class="token punctuation">)</span>.<span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"margin-right"</span><span class="token punctuation">,</span><span class="token string">"0"</span><span class="token punctuation">)</span>\n</code></pre>\n<h3 id="%E8%A7%A3%E5%86%B3ie7%E7%9A%84%E9%AB%98%E5%BA%A6%E4%B8%A2%E5%A4%B1">解决ie7的高度丢失<a class="anchor" href="#%E8%A7%A3%E5%86%B3ie7%E7%9A%84%E9%AB%98%E5%BA%A6%E4%B8%A2%E5%A4%B1">§</a></h3>\n<p>*padding 或者 _paddding\n*height _height\n*margin _margin\n*width _width</p>\n<h3 id="css--webkit-box-orient-vertical-%E5%B1%9E%E6%80%A7%E7%BC%96%E8%AF%91%E5%90%8E%E4%B8%A2%E5%A4%B1%E9%97%AE%E9%A2%98">CSS -webkit-box-orient: vertical 属性编译后丢失问题<a class="anchor" href="#css--webkit-box-orient-vertical-%E5%B1%9E%E6%80%A7%E7%BC%96%E8%AF%91%E5%90%8E%E4%B8%A2%E5%A4%B1%E9%97%AE%E9%A2%98">§</a></h3>\n<p>解决方法</p>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* autoprefixer: ignore next */</span>\n<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E9%AB%98%E6%96%AF%E6%A8%A1%E7%B3%8A">高斯模糊<a class="anchor" href="#%E9%AB%98%E6%96%AF%E6%A8%A1%E7%B3%8A">§</a></h3>\n<pre class="language-css"><code class="language-css"><span class="token property">filter</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>blur.svg#blur<span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* FireFox, Chrome, Opera */</span>\n<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Chrome, Opera */</span>\n<span class="token property">-moz-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">-ms-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">/* IE6~IE9 */</span>\n<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">Blur</span><span class="token punctuation">(</span>PixelRadius=<span class="token number">1</span><span class="token punctuation">,</span> MakeShadow=false<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/*知识点*/</span>\n<span class="token property">filter</span><span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">Blur</span><span class="token punctuation">(</span>PixelRadius=<span class="token string">\'x\'</span><span class="token punctuation">,</span> MakeShadow=<span class="token string">\'x\'</span><span class="token punctuation">,</span> ShadowOpacity=<span class="token string">\'x\'</span><span class="token punctuation">)</span>\n</code></pre>\n<ul>\n<li>PixelRadius，设置对象的模糊半径，1~100数值。</li>\n<li>MakeShadow，设置对象是否投影，布尔值，true和false</li>\n<li>ShadowOpacity，设置对象投影不透明度，0.0~1.0，假如MakeShadow为false那么该值无效。</li>\n</ul>\n<h3 id="rgba%E5%85%BC%E5%AE%B9">rgba兼容<a class="anchor" href="#rgba%E5%85%BC%E5%AE%B9">§</a></h3>\n<p><strong>ie8及以下版本</strong></p>\n<pre class="language-css"><code class="language-css"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.4</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">gradient</span><span class="token punctuation">(</span>startcolorstr=<span class="token hexcode color">#66000000</span><span class="token punctuation">,</span> endcolorstr=<span class="token hexcode color">#66000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这个颜色“#66000000”是由两部分组成的。\n第一部是#号后面的66。是rgba透明度0.4的IEfilter值。从0.1到0.9每个数字对应一个IEfilter值。对应关系如下：</p>\n<p><a href="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png"><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png" alt="img"></a></p>\n<p>img</p>\n<p>即：alpha*255得到的值再转换为16进制即可。</p>\n<p>第二部分是7f后面的六位 是六进制的颜色值，跟rgb函数中的取值相同，比如rgb(255,255,255)对应#ffffff。</p>\n<h3 id="box-shadow-%E5%85%BC%E5%AE%B9">box-shadow 兼容<a class="anchor" href="#box-shadow-%E5%85%BC%E5%AE%B9">§</a></h3>\n<p><strong>ie8及以下版本</strong></p>\n<pre class="language-css"><code class="language-css"><span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token hexcode color">#000</span><span class="token punctuation">;</span>\n<span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token hexcode color">#000</span><span class="token punctuation">;</span>\n<span class="token property">box-shadow</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token hexcode color">#000</span><span class="token punctuation">;</span>\n\n<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">Shadow</span><span class="token punctuation">(</span>color=<span class="token color">gray</span><span class="token punctuation">,</span> Direction=<span class="token number">125</span><span class="token punctuation">,</span> Strength=<span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>strength是阴影大小，direction是阴影方位，单位为度，可以为负数，color是阴影颜色 （尽量使用数字）\n使用IE滤镜实现盒子阴影的盒子必须是行元素或以行元素显示（block或inline-block;）</p>\n<h3 id="filter%E7%95%8C%E9%9D%A2%E6%BB%A4%E9%95%9C">filter界面滤镜<a class="anchor" href="#filter%E7%95%8C%E9%9D%A2%E6%BB%A4%E9%95%9C">§</a></h3>\n<p>在ie中 <code>filter</code> 分为静态滤镜(Visual Filters)和过渡转场(Transitions Reference)，前者是的效果可以设置元素的不透明度、渐变、模糊、对比度、明度等这些，后者注重的ie的动画效果。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.test</span></span><span class="token punctuation">{</span>\n    <span class="token property">filter</span><span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.    <span class="token comment">/*.后面都是紧跟着各种滤镜和转场函数*/</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/*如：模糊滤镜*/</span>\n<span class="token selector"><span class="token class">.blur</span></span><span class="token punctuation">{</span>\n    <span class="token property">filter</span><span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">Blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">/*.函数的开头第一个字母必须大写，括号()里面的滤镜的各种值*/</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>一般常用Blur,Shadow,Gradient,对应，filter:blur(),box-shadow,rgba();</p>\n<h3 id="%E5%9C%86%E8%A7%92border-radius%E5%85%BC%E5%AE%B9">圆角border-radius兼容<a class="anchor" href="#%E5%9C%86%E8%A7%92border-radius%E5%85%BC%E5%AE%B9">§</a></h3>\n<p>需要下载PIE.htc\n然后css中</p>\n<pre class="language-css"><code class="language-css"><span class="token comment">/*关键属性设置 需要把路径设置好*/</span>\n<span class="token property">behavior</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>PIE.htc<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%A7%A3%E5%86%B3ie8-css-nth-child4n-%E4%B8%8D%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98%E4%B8%BB%E8%A6%81%E6%98%AF%E5%88%A9%E7%94%A8%E7%A1%AC%E6%96%B9%E6%B3%95" }, "\u89E3\u51B3ie8 css :nth-child(4n) \u4E0D\u517C\u5BB9\u95EE\u9898\u4E3B\u8981\u662F\u5229\u7528\u786C\u65B9\u6CD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%A7%A3%E5%86%B3ie7%E7%9A%84%E9%AB%98%E5%BA%A6%E4%B8%A2%E5%A4%B1" }, "\u89E3\u51B3ie7\u7684\u9AD8\u5EA6\u4E22\u5931")),
            React.createElement("li", null,
                React.createElement("a", { href: "#css--webkit-box-orient-vertical-%E5%B1%9E%E6%80%A7%E7%BC%96%E8%AF%91%E5%90%8E%E4%B8%A2%E5%A4%B1%E9%97%AE%E9%A2%98" }, "CSS -webkit-box-orient: vertical \u5C5E\u6027\u7F16\u8BD1\u540E\u4E22\u5931\u95EE\u9898")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E9%AB%98%E6%96%AF%E6%A8%A1%E7%B3%8A" }, "\u9AD8\u65AF\u6A21\u7CCA")),
            React.createElement("li", null,
                React.createElement("a", { href: "#rgba%E5%85%BC%E5%AE%B9" }, "rgba\u517C\u5BB9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#box-shadow-%E5%85%BC%E5%AE%B9" }, "box-shadow \u517C\u5BB9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#filter%E7%95%8C%E9%9D%A2%E6%BB%A4%E9%95%9C" }, "filter\u754C\u9762\u6EE4\u955C")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9C%86%E8%A7%92border-radius%E5%85%BC%E5%AE%B9" }, "\u5706\u89D2border-radius\u517C\u5BB9")))),
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2021/01/21",
    'updated': null,
    'excerpt': "总结了在项目设计中遇到的兼容性问题，在此整理出来，以备不时之需。",
    'cover': "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png",
    'categories': [
        "前端"
    ],
    'tags': [
        "前端",
        "兼容性",
        "css"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2021/2021年总结 + 新的一年目标和规划.md",
                "title": "2021年总结 + 新的一年目标和规划",
                "link": "posts/2021/2021年总结 + 新的一年目标和规划.html",
                "date": "2021/12/31",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "日常生活",
                    "年终总结"
                ],
                "tags": [
                    "日常生活",
                    "年终总结"
                ],
                "excerpt": "2021年总结 + 新的一年目标和规划",
                "cover": "../../pic/finish/4d03-a370d991827003abcad4040bdd0349dd.png"
            },
            {
                "pagePath": "posts/2021/解决react项目生产环境部署，浏览器可以看到源码的问题.md",
                "title": "解决 react 项目生产环境部署，浏览器可以看到源码的问题",
                "link": "posts/2021/解决react项目生产环境部署，浏览器可以看到源码的问题.html",
                "date": "2021/11/21",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "React",
                    "打包"
                ],
                "excerpt": "React生产环境还有源代码的问题解决,并记录"
            },
            {
                "pagePath": "posts/2021/localstorage和sessionstorage的封装.md",
                "title": "localstorage 和 sessionstorage 的封装",
                "link": "posts/2021/localstorage和sessionstorage的封装.html",
                "date": "2021/10/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "localstorage",
                    "sessionstorage"
                ],
                "excerpt": "localstorage和sessionstorage的封装"
            },
            {
                "pagePath": "posts/2021/Angular表格自定义列配置.md",
                "title": "Angular 表格自定义列配置",
                "link": "posts/2021/Angular表格自定义列配置.html",
                "date": "2021/10/10",
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
                    "表格",
                    "自定义"
                ],
                "excerpt": "Angular表格自定义列配置"
            },
            {
                "pagePath": "posts/2021/Angular光标处插入图片功能.md",
                "title": "Angular 光标处插入图片功能",
                "link": "posts/2021/Angular光标处插入图片功能.html",
                "date": "2021/09/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "插入功能",
                    "光标处",
                    "聚焦"
                ],
                "excerpt": "Angular光标处插入图片功能"
            },
            {
                "pagePath": "posts/2021/通用水印功能实现.md",
                "title": "通用水印功能实现",
                "link": "posts/2021/通用水印功能实现.html",
                "date": "2021/08/16",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "水印"
                ],
                "tags": [
                    "水印",
                    "页面水印"
                ],
                "excerpt": "新的水印功能实现"
            },
            {
                "pagePath": "posts/2021/语言代码表.md",
                "title": "语言代码表",
                "link": "posts/2021/语言代码表.html",
                "date": "2021/07/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "工具"
                ],
                "tags": [
                    "语言代码表"
                ],
                "excerpt": "语言代码表"
            },
            {
                "pagePath": "posts/2021/使用react-router-cache-route实现页面状态的缓存.md",
                "title": "使用react-router-cache-route实现页面状态的缓存",
                "link": "posts/2021/使用react-router-cache-route实现页面状态的缓存.html",
                "date": "2021/07/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "React",
                    "缓存"
                ],
                "excerpt": "使用react-router-cache-route实现页面状态的缓存"
            },
            {
                "pagePath": "posts/2021/数组的深浅拷贝.md",
                "title": "数组的深浅拷贝",
                "link": "posts/2021/数组的深浅拷贝.html",
                "date": "2021/06/20",
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
                "date": "2021/05/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "webpack"
                ],
                "tags": [
                    "webpack"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/2021/vscode快捷键.md",
                "title": "vscode 快捷键",
                "link": "posts/2021/vscode快捷键.html",
                "date": "2021/05/25",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "工具"
                ],
                "tags": [
                    "vscode",
                    "快捷键"
                ],
                "excerpt": "vscode快捷键"
            },
            {
                "pagePath": "posts/2021/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/2021/antd表格穿梭框功能.html",
                "date": "2021/05/15",
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
            },
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
                "pagePath": "posts/2021/2020年总结 + 新的一年目标和规划.md",
                "title": "2020年总结 + 新的一年目标和规划",
                "link": "posts/2021/2020年总结 + 新的一年目标和规划.html",
                "date": "2021/02/16",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "日常生活",
                    "年终总结"
                ],
                "tags": [
                    "日常生活",
                    "年终总结"
                ],
                "excerpt": "2020年总结 + 新的一年目标和规划",
                "cover": "https://willern.gitee.io/2021/02/16/20210216/night.jpg"
            },
            {
                "pagePath": "posts/2021/Angular 页面水印功能实现.md",
                "title": "Angular 页面水印功能实现",
                "link": "posts/2021/Angular 页面水印功能实现.html",
                "date": "2021/01/27",
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
                "excerpt": "Angular 页面水印功能实现",
                "cover": "https://willern.gitee.io/2021/01/27/20210127/water-mark.png"
            },
            {
                "pagePath": "posts/2021/解决网站网页html css兼容性问题.md",
                "title": "解决网站网页html css兼容性问题",
                "link": "posts/2021/解决网站网页html css兼容性问题.html",
                "date": "2021/01/21",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "前端"
                ],
                "tags": [
                    "前端",
                    "兼容性",
                    "css"
                ],
                "excerpt": "总结了在项目设计中遇到的兼容性问题，在此整理出来，以备不时之需。",
                "cover": "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png"
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
                "pagePath": "posts/2020/使用 Angular RouteReuseStrategy 缓存组件.md",
                "title": "使用 Angular RouteReuseStrategy 缓存组件",
                "link": "posts/2020/使用 Angular RouteReuseStrategy 缓存组件.html",
                "date": "2020/10/29",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "Angular",
                    "Angular RouteReuseStrategy",
                    "缓存"
                ],
                "excerpt": "使用 Angular RouteReuseStrategy 缓存组件",
                "cover": "https://willern.gitee.io/2020/10/29/20201029/show.gif"
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
                "title": "Angular 复制粘贴事件",
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
                "excerpt": "Angular 复制粘贴事件"
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
                "pagePath": "posts/2020/Vue 父子路由的实现以及父子路由的高亮切换显示问题.md",
                "title": "Vue 父子路由的实现以及父子路由的高亮切换显示问题",
                "link": "posts/2020/Vue 父子路由的实现以及父子路由的高亮切换显示问题.html",
                "date": "2020/07/11",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "路由高亮",
                    "父子路由"
                ],
                "excerpt": "Vue 父子路由的实现以及父子路由的高亮切换显示问题"
            },
            {
                "pagePath": "posts/2020/Vue实现分页功能.md",
                "title": "Vue实现分页功能",
                "link": "posts/2020/Vue实现分页功能.html",
                "date": "2020/07/03",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "分页"
                ],
                "excerpt": "Vue实现分页功能",
                "cover": "https://willern.gitee.io/2020/07/03/20200703/show.gif"
            },
            {
                "pagePath": "posts/2020/Vue 动态绑定多个class 带上三元运算或其他条件.md",
                "title": "Vue 动态绑定多个class 带上三元运算或其他条件",
                "link": "posts/2020/Vue 动态绑定多个class 带上三元运算或其他条件.html",
                "date": "2020/06/24",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Vue 动态绑定多个class 带上三元运算或其他条件"
            },
            {
                "pagePath": "posts/2020/Vue-router（路由）的知识点.md",
                "title": "Vue-router（路由）的知识点",
                "link": "posts/2020/Vue-router（路由）的知识点.html",
                "date": "2020/05/01",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "vue-router"
                ],
                "excerpt": "Vue-router（路由）的知识点"
            },
            {
                "pagePath": "posts/2019/多列表的jq展开收起效果.md",
                "title": "多列表的jq展开收起效果",
                "link": "posts/2019/多列表的jq展开收起效果.html",
                "date": "2019/12/06",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Jquery"
                ],
                "tags": [
                    "Jquery"
                ],
                "excerpt": "在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。",
                "cover": "https://img-blog.csdnimg.cn/2019120610061415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dxc3NoMjE=,size_16,color_FFFFFF,t_70"
            }
        ],
        "categories": [
            {
                "name": "Angular",
                "count": 11
            },
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "React",
                "count": 2
            },
            {
                "name": "工具",
                "count": 2
            },
            {
                "name": "年终总结",
                "count": 2
            },
            {
                "name": "日常生活",
                "count": 2
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "Jquery",
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
                "name": "webpack",
                "count": 1
            },
            {
                "name": "前端",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "水印",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "antd",
                "count": 4
            },
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "Angular",
                "count": 2
            },
            {
                "name": "React",
                "count": 2
            },
            {
                "name": "vscode",
                "count": 2
            },
            {
                "name": "多类名",
                "count": 2
            },
            {
                "name": "年终总结",
                "count": 2
            },
            {
                "name": "日常生活",
                "count": 2
            },
            {
                "name": "条件判断",
                "count": 2
            },
            {
                "name": "水印",
                "count": 2
            },
            {
                "name": "缓存",
                "count": 2
            },
            {
                "name": "表格",
                "count": 2
            },
            {
                "name": "页面水印",
                "count": 2
            },
            {
                "name": "Angular RouteReuseStrategy",
                "count": 1
            },
            {
                "name": "css",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "Jquery",
                "count": 1
            },
            {
                "name": "localstorage",
                "count": 1
            },
            {
                "name": "sessionstorage",
                "count": 1
            },
            {
                "name": "vue-router",
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
                "name": "光标处",
                "count": 1
            },
            {
                "name": "兼容性",
                "count": 1
            },
            {
                "name": "分页",
                "count": 1
            },
            {
                "name": "前端",
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
                "name": "富文本",
                "count": 1
            },
            {
                "name": "快捷键",
                "count": 1
            },
            {
                "name": "打包",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "插入功能",
                "count": 1
            },
            {
                "name": "树形控件",
                "count": 1
            },
            {
                "name": "深浅拷贝",
                "count": 1
            },
            {
                "name": "父子路由",
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
                "name": "聚焦",
                "count": 1
            },
            {
                "name": "自定义",
                "count": 1
            },
            {
                "name": "语言代码表",
                "count": 1
            },
            {
                "name": "路由高亮",
                "count": 1
            },
            {
                "name": "配置",
                "count": 1
            }
        ]
    }
};
