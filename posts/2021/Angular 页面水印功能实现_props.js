import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2021/Angular 页面水印功能实现.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/Angular 页面水印功能实现.html",
    'title': "Angular 页面水印功能实现",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Angular 页面水印功能实现</h1>\n<h4 id="html-%E4%BD%BF%E7%94%A8">html 使用<a class="anchor" href="#html-%E4%BD%BF%E7%94%A8">§</a></h4>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let item of watermarkList<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>watermarkList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">[ngStyle]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.objStyle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          {{item.txt}}\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<h4 id="ts">ts<a class="anchor" href="#ts">§</a></h4>\n<pre class="language-typescript"><code class="language-typescript">  <span class="token comment">// 页面水印</span>\n  watermarkList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token function">watermark</span><span class="token punctuation">(</span>settings<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//默认设置</span>\n\n    <span class="token comment">// watermark_x_space: 150,//水印x轴间隔</span>\n    <span class="token comment">// watermark_y_space: 100,//水印y轴间隔</span>\n    <span class="token comment">// watermark_width: 300,//水印宽度</span>\n    <span class="token comment">// watermark_height: 100,//水印长度</span>\n    <span class="token keyword">let</span> defaultSettings <span class="token operator">=</span> <span class="token punctuation">{</span>\n      watermark_txt<span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>\n      watermark_x<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token comment">//水印起始位置x轴坐标</span>\n      watermark_y<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token comment">//水印起始位置Y轴坐标</span>\n      watermark_rows<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token comment">//水印行数</span>\n      watermark_cols<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token comment">//水印列数</span>\n      watermark_color<span class="token operator">:</span> <span class="token string">\'#000000\'</span><span class="token punctuation">,</span><span class="token comment">//水印字体颜色</span>\n      watermark_alpha<span class="token operator">:</span> <span class="token number">0.08</span><span class="token punctuation">,</span><span class="token comment">//水印透明度</span>\n      watermark_fontsize<span class="token operator">:</span> <span class="token string">\'18px\'</span><span class="token punctuation">,</span><span class="token comment">//水印字体大小</span>\n      watermark_font<span class="token operator">:</span> <span class="token string">\'微软雅黑\'</span><span class="token punctuation">,</span><span class="token comment">//水印字体</span>\n      watermark_angle<span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span><span class="token comment">//水印倾斜度数</span>\n      watermark_x_space<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span><span class="token comment">//水印x轴间隔</span>\n      watermark_y_space<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span><span class="token comment">//水印y轴间隔</span>\n      watermark_width<span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span><span class="token comment">//水印宽度</span>\n      watermark_height<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span><span class="token comment">//水印长度</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">//采用配置项替换默认值，作用类似jquery.extend</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> src <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> src<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>src<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> defaultSettings<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> defaultSettings<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\n          <span class="token keyword">continue</span><span class="token punctuation">;</span>\n        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\n          defaultSettings<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">let</span> resList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment">// //获取页面最大宽度</span>\n    <span class="token comment">// let page_width = Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth);</span>\n    <span class="token comment">// //获取页面最大长度</span>\n    <span class="token comment">// let page_height = Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight);</span>\n    <span class="token keyword">let</span> page_width <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetWidth <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> page_height <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetHeight <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n    <span class="token comment">// console.log(page_width,page_height)</span>\n\n    <span class="token comment">//如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span>  <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_x <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_width <span class="token operator">*</span> defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_x_space <span class="token operator">*</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">></span> page_width<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">=</span> <span class="token punctuation">(</span>page_width <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_x  <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_x_space<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_width <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_x_space<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      defaultSettings<span class="token punctuation">.</span>watermark_x_space <span class="token operator">=</span> <span class="token punctuation">(</span>page_width  <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_x  <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_width  <span class="token operator">*</span> defaultSettings<span class="token punctuation">.</span>watermark_cols<span class="token punctuation">)</span>  <span class="token operator">/</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_rows <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span>\n      <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_y  <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_height <span class="token operator">*</span> defaultSettings<span class="token punctuation">.</span>watermark_rows  <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_y_space <span class="token operator">*</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_rows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token operator">></span> page_height<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      defaultSettings<span class="token punctuation">.</span>watermark_rows <span class="token operator">=</span>  <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_y_space  <span class="token operator">+</span> page_height <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_y<span class="token punctuation">)</span>  <span class="token operator">/</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_height <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_y_space<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      defaultSettings<span class="token punctuation">.</span>watermark_y_space <span class="token operator">=</span>  <span class="token punctuation">(</span>page_height  <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_y  <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_height  <span class="token operator">*</span> defaultSettings<span class="token punctuation">.</span>watermark_rows<span class="token punctuation">)</span>  <span class="token operator">/</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_rows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> x<span class="token punctuation">;</span>\n    <span class="token keyword">let</span> y<span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> defaultSettings<span class="token punctuation">.</span>watermark_rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      y <span class="token operator">=</span> defaultSettings<span class="token punctuation">.</span>watermark_y <span class="token operator">+</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_y_space <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_height<span class="token punctuation">)</span> <span class="token operator">*</span> i<span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> defaultSettings<span class="token punctuation">.</span>watermark_cols<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        x <span class="token operator">=</span> defaultSettings<span class="token punctuation">.</span>watermark_x <span class="token operator">+</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_width <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_x_space<span class="token punctuation">)</span> <span class="token operator">*</span> j<span class="token punctuation">;</span>\n        <span class="token comment">// 水印对象和样式</span>\n        <span class="token keyword">let</span> mask_div <span class="token operator">=</span> <span class="token punctuation">{</span>\n          style<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n          txt<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        mask_div<span class="token punctuation">.</span>txt <span class="token operator">=</span> defaultSettings<span class="token punctuation">.</span>watermark_txt<span class="token punctuation">;</span>\n        <span class="token comment">// console.log(j);</span>\n        <span class="token comment">//设置水印div倾斜显示</span>\n        mask_div<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          <span class="token string">\'pointer-events\'</span><span class="token operator">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'-webkit-transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'-moz-transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'-ms-transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'-o-transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'position\'</span><span class="token operator">:</span> <span class="token string">\'absolute\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'left\'</span><span class="token operator">:</span> x <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'top\'</span><span class="token operator">:</span> y <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'overflow\'</span><span class="token operator">:</span> <span class="token string">\'hidden\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'z-index\'</span><span class="token operator">:</span> <span class="token string">\'9\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'opacity\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_alpha<span class="token punctuation">,</span>\n          <span class="token string">\'font-size\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_fontsize<span class="token punctuation">,</span>\n          <span class="token string">\'font-family\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_font<span class="token punctuation">,</span>\n          <span class="token string">\'color\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_color<span class="token punctuation">,</span>\n          <span class="token string">\'text-align\'</span><span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'width\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_width <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'height\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_height <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'display\'</span><span class="token operator">:</span> <span class="token string">\'block\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        resList <span class="token operator">=</span> resList<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>mask_div<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> resList<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n<h4 id="css">css<a class="anchor" href="#css">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.watermark</span></span><span class="token punctuation">{</span>\n  <span class="token property">pointer-events</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">-o-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h4 id="ngoninit">ngOnInit()<a class="anchor" href="#ngoninit">§</a></h4>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">//初始化</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>\n        <span class="token keyword">let</span> text1 <span class="token operator">=</span> <span class="token punctuation">{</span> watermark_txt<span class="token operator">:</span> <span class="token string">\'测试测试\'</span><span class="token punctuation">,</span> watermark_fontsize<span class="token operator">:</span> <span class="token string">\'16px\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>watermarkList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">watermark</span><span class="token punctuation">(</span>text1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>watermarkList<span class="token punctuation">)</span><span class="token punctuation">{</span>\n          <span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token comment">// json字符串转换为json对象，因为ngStyle只支持对象</span>\n          item<span class="token punctuation">.</span>objStyle <span class="token operator">=</span> style<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%95%88%E6%9E%9C%E5%9B%BE">效果图<a class="anchor" href="#%E6%95%88%E6%9E%9C%E5%9B%BE">§</a></h2>\n<p><a href="https://willern.gitee.io/2021/01/27/20210127/water-mark.png"><img src="https://willern.gitee.io/2021/01/27/20210127/water-mark.png" alt="img"></a></p>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Angular \u9875\u9762\u6C34\u5370\u529F\u80FD\u5B9E\u73B0"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="html-%E4%BD%BF%E7%94%A8">html 使用<a class="anchor" href="#html-%E4%BD%BF%E7%94%A8">§</a></h4>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let item of watermarkList<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>watermarkList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">[ngStyle]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.objStyle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          {{item.txt}}\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<h4 id="ts">ts<a class="anchor" href="#ts">§</a></h4>\n<pre class="language-typescript"><code class="language-typescript">  <span class="token comment">// 页面水印</span>\n  watermarkList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token function">watermark</span><span class="token punctuation">(</span>settings<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//默认设置</span>\n\n    <span class="token comment">// watermark_x_space: 150,//水印x轴间隔</span>\n    <span class="token comment">// watermark_y_space: 100,//水印y轴间隔</span>\n    <span class="token comment">// watermark_width: 300,//水印宽度</span>\n    <span class="token comment">// watermark_height: 100,//水印长度</span>\n    <span class="token keyword">let</span> defaultSettings <span class="token operator">=</span> <span class="token punctuation">{</span>\n      watermark_txt<span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>\n      watermark_x<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token comment">//水印起始位置x轴坐标</span>\n      watermark_y<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token comment">//水印起始位置Y轴坐标</span>\n      watermark_rows<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token comment">//水印行数</span>\n      watermark_cols<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token comment">//水印列数</span>\n      watermark_color<span class="token operator">:</span> <span class="token string">\'#000000\'</span><span class="token punctuation">,</span><span class="token comment">//水印字体颜色</span>\n      watermark_alpha<span class="token operator">:</span> <span class="token number">0.08</span><span class="token punctuation">,</span><span class="token comment">//水印透明度</span>\n      watermark_fontsize<span class="token operator">:</span> <span class="token string">\'18px\'</span><span class="token punctuation">,</span><span class="token comment">//水印字体大小</span>\n      watermark_font<span class="token operator">:</span> <span class="token string">\'微软雅黑\'</span><span class="token punctuation">,</span><span class="token comment">//水印字体</span>\n      watermark_angle<span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span><span class="token comment">//水印倾斜度数</span>\n      watermark_x_space<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span><span class="token comment">//水印x轴间隔</span>\n      watermark_y_space<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span><span class="token comment">//水印y轴间隔</span>\n      watermark_width<span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span><span class="token comment">//水印宽度</span>\n      watermark_height<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span><span class="token comment">//水印长度</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">//采用配置项替换默认值，作用类似jquery.extend</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> src <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> src<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>src<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> defaultSettings<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> defaultSettings<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\n          <span class="token keyword">continue</span><span class="token punctuation">;</span>\n        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\n          defaultSettings<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">let</span> resList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment">// //获取页面最大宽度</span>\n    <span class="token comment">// let page_width = Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth);</span>\n    <span class="token comment">// //获取页面最大长度</span>\n    <span class="token comment">// let page_height = Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight);</span>\n    <span class="token keyword">let</span> page_width <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetWidth <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> page_height <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetHeight <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n    <span class="token comment">// console.log(page_width,page_height)</span>\n\n    <span class="token comment">//如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span>  <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_x <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_width <span class="token operator">*</span> defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_x_space <span class="token operator">*</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">></span> page_width<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">=</span> <span class="token punctuation">(</span>page_width <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_x  <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_x_space<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_width <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_x_space<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      defaultSettings<span class="token punctuation">.</span>watermark_x_space <span class="token operator">=</span> <span class="token punctuation">(</span>page_width  <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_x  <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_width  <span class="token operator">*</span> defaultSettings<span class="token punctuation">.</span>watermark_cols<span class="token punctuation">)</span>  <span class="token operator">/</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_cols <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_rows <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span>\n      <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_y  <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_height <span class="token operator">*</span> defaultSettings<span class="token punctuation">.</span>watermark_rows  <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_y_space <span class="token operator">*</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_rows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token operator">></span> page_height<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      defaultSettings<span class="token punctuation">.</span>watermark_rows <span class="token operator">=</span>  <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_y_space  <span class="token operator">+</span> page_height <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_y<span class="token punctuation">)</span>  <span class="token operator">/</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_height <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_y_space<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      defaultSettings<span class="token punctuation">.</span>watermark_y_space <span class="token operator">=</span>  <span class="token punctuation">(</span>page_height  <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_y  <span class="token operator">-</span> defaultSettings<span class="token punctuation">.</span>watermark_height  <span class="token operator">*</span> defaultSettings<span class="token punctuation">.</span>watermark_rows<span class="token punctuation">)</span>  <span class="token operator">/</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_rows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> x<span class="token punctuation">;</span>\n    <span class="token keyword">let</span> y<span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> defaultSettings<span class="token punctuation">.</span>watermark_rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      y <span class="token operator">=</span> defaultSettings<span class="token punctuation">.</span>watermark_y <span class="token operator">+</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_y_space <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_height<span class="token punctuation">)</span> <span class="token operator">*</span> i<span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> defaultSettings<span class="token punctuation">.</span>watermark_cols<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        x <span class="token operator">=</span> defaultSettings<span class="token punctuation">.</span>watermark_x <span class="token operator">+</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>watermark_width <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_x_space<span class="token punctuation">)</span> <span class="token operator">*</span> j<span class="token punctuation">;</span>\n        <span class="token comment">// 水印对象和样式</span>\n        <span class="token keyword">let</span> mask_div <span class="token operator">=</span> <span class="token punctuation">{</span>\n          style<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n          txt<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        mask_div<span class="token punctuation">.</span>txt <span class="token operator">=</span> defaultSettings<span class="token punctuation">.</span>watermark_txt<span class="token punctuation">;</span>\n        <span class="token comment">// console.log(j);</span>\n        <span class="token comment">//设置水印div倾斜显示</span>\n        mask_div<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          <span class="token string">\'pointer-events\'</span><span class="token operator">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'-webkit-transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'-moz-transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'-ms-transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'-o-transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'transform\'</span><span class="token operator">:</span> <span class="token string">\'rotate(-\'</span> <span class="token operator">+</span> defaultSettings<span class="token punctuation">.</span>watermark_angle <span class="token operator">+</span> <span class="token string">\'deg)\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'position\'</span><span class="token operator">:</span> <span class="token string">\'absolute\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'left\'</span><span class="token operator">:</span> x <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'top\'</span><span class="token operator">:</span> y <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'overflow\'</span><span class="token operator">:</span> <span class="token string">\'hidden\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'z-index\'</span><span class="token operator">:</span> <span class="token string">\'9\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'opacity\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_alpha<span class="token punctuation">,</span>\n          <span class="token string">\'font-size\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_fontsize<span class="token punctuation">,</span>\n          <span class="token string">\'font-family\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_font<span class="token punctuation">,</span>\n          <span class="token string">\'color\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_color<span class="token punctuation">,</span>\n          <span class="token string">\'text-align\'</span><span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'width\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_width <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'height\'</span><span class="token operator">:</span> defaultSettings<span class="token punctuation">.</span>watermark_height <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'display\'</span><span class="token operator">:</span> <span class="token string">\'block\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        resList <span class="token operator">=</span> resList<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>mask_div<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> resList<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n<h4 id="css">css<a class="anchor" href="#css">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.watermark</span></span><span class="token punctuation">{</span>\n  <span class="token property">pointer-events</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">-o-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token unit">deg</span><span class="token punctuation">)</span> <span class="token function">translate3d</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">-200</span><span class="token unit">px</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h4 id="ngoninit">ngOnInit()<a class="anchor" href="#ngoninit">§</a></h4>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">//初始化</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>\n        <span class="token keyword">let</span> text1 <span class="token operator">=</span> <span class="token punctuation">{</span> watermark_txt<span class="token operator">:</span> <span class="token string">\'测试测试\'</span><span class="token punctuation">,</span> watermark_fontsize<span class="token operator">:</span> <span class="token string">\'16px\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>watermarkList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">watermark</span><span class="token punctuation">(</span>text1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>watermarkList<span class="token punctuation">)</span><span class="token punctuation">{</span>\n          <span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token comment">// json字符串转换为json对象，因为ngStyle只支持对象</span>\n          item<span class="token punctuation">.</span>objStyle <span class="token operator">=</span> style<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%95%88%E6%9E%9C%E5%9B%BE">效果图<a class="anchor" href="#%E6%95%88%E6%9E%9C%E5%9B%BE">§</a></h2>\n<p><a href="https://willern.gitee.io/2021/01/27/20210127/water-mark.png"><img src="https://willern.gitee.io/2021/01/27/20210127/water-mark.png" alt="img"></a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%95%88%E6%9E%9C%E5%9B%BE" }, "\u6548\u679C\u56FE")))),
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2021/01/27",
    'updated': null,
    'excerpt': "Angular 页面水印功能实现",
    'cover': "https://willern.gitee.io/2021/01/27/20210127/water-mark.png",
    'categories': [
        "Angular"
    ],
    'tags': [
        "水印",
        "页面水印",
        "Angular"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "count": 8
            },
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "antd",
                "count": 2
            },
            {
                "name": "工具",
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
                "name": "React",
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
                "name": "年终总结",
                "count": 1
            },
            {
                "name": "日常生活",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "Angular",
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
                "name": "条件判断",
                "count": 2
            },
            {
                "name": "缓存",
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
                "name": "React",
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
                "name": "年终总结",
                "count": 1
            },
            {
                "name": "快捷键",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "日常生活",
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
                "name": "表格",
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
            },
            {
                "name": "页面水印",
                "count": 1
            }
        ]
    }
};
