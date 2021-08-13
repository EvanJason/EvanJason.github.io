import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2019/多列表的jq展开收起效果.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2019/多列表的jq展开收起效果.html",
    'title': "多列表的jq展开收起效果",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>多列表的jq展开收起效果</h1>\n<h6 id="%E5%9C%A8%E5%81%9A%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%97%B6%E5%80%99%E7%A2%B0%E5%88%B0%E7%9A%84%E4%B8%80%E4%B8%AA%E9%9C%80%E6%B1%82%E8%A6%81%E5%81%9A%E5%A4%9A%E5%88%97%E8%A1%A8%E7%9A%84%E5%B1%95%E5%BC%80%E5%92%8C%E6%94%B6%E8%B5%B7%E7%9A%84%E6%95%88%E6%9E%9C%E4%B8%80%E5%BC%80%E5%A7%8B%E5%BE%88%E5%BF%AB%E5%B0%B1%E5%86%99%E5%A5%BD%E4%BA%86%E5%8F%AF%E6%98%AF%E5%87%BA%E7%8E%B0%E4%BA%86%E9%94%99%E8%AF%AF%E6%9C%80%E5%90%8E%E6%89%BE%E5%88%B0%E4%BA%86%E5%8E%9F%E5%9B%A0%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%8A%A8%E7%94%BBanimate%E7%9A%84%E6%95%88%E6%9E%9C%E6%9C%80%E5%90%8E%E5%8E%BB%E6%8E%89%E6%B2%A1%E6%9C%89%E8%BF%87%E5%BA%A6%E5%8A%A8%E7%94%BB%E8%9B%8B%E7%96%BC%E7%BB%88%E4%BA%8E%E8%A7%A3%E5%86%B3">在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。<a class="anchor" href="#%E5%9C%A8%E5%81%9A%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%97%B6%E5%80%99%E7%A2%B0%E5%88%B0%E7%9A%84%E4%B8%80%E4%B8%AA%E9%9C%80%E6%B1%82%E8%A6%81%E5%81%9A%E5%A4%9A%E5%88%97%E8%A1%A8%E7%9A%84%E5%B1%95%E5%BC%80%E5%92%8C%E6%94%B6%E8%B5%B7%E7%9A%84%E6%95%88%E6%9E%9C%E4%B8%80%E5%BC%80%E5%A7%8B%E5%BE%88%E5%BF%AB%E5%B0%B1%E5%86%99%E5%A5%BD%E4%BA%86%E5%8F%AF%E6%98%AF%E5%87%BA%E7%8E%B0%E4%BA%86%E9%94%99%E8%AF%AF%E6%9C%80%E5%90%8E%E6%89%BE%E5%88%B0%E4%BA%86%E5%8E%9F%E5%9B%A0%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%8A%A8%E7%94%BBanimate%E7%9A%84%E6%95%88%E6%9E%9C%E6%9C%80%E5%90%8E%E5%8E%BB%E6%8E%89%E6%B2%A1%E6%9C%89%E8%BF%87%E5%BA%A6%E5%8A%A8%E7%94%BB%E8%9B%8B%E7%96%BC%E7%BB%88%E4%BA%8E%E8%A7%A3%E5%86%B3">§</a></h6>\n<p><strong>效果图如下：</strong></p>\n<p><a href="https://img-blog.csdnimg.cn/2019120610061415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dxc3NoMjE=,size_16,color_FFFFFF,t_70"><img src="https://img-blog.csdnimg.cn/2019120610061415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dxc3NoMjE=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></a></p>\n<p><strong>jq代码：</strong></p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".zimu_con_list dl"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log($(item).find("dt").html())</span>\n    <span class="token keyword">var</span> defHeight <span class="token operator">=</span> <span class="token number">115</span><span class="token punctuation">;</span><span class="token comment">//默认高度</span>\n    <span class="token keyword">var</span> infoHeight <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>infoHeight <span class="token operator">></span> defHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 设置需求所在位置的默认高度,隐藏超出部分</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">css</span><span class="token punctuation">(</span><span class="token string">\'height\'</span><span class="token punctuation">,</span> defHeight <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//加按钮</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">append</span><span class="token punctuation">(</span><span class="token string">\'&lt;p class="more">&lt;span>展开&lt;/span>&lt;i class="sprite">&lt;/i>&lt;/p>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 点击按钮</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">".more"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> curHeight <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// console.log(curHeight)</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>curHeight <span class="token operator">==</span> defHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//这里看看能不能有其他的办法加个过渡效果，用animate()有错误</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">addClass</span><span class="token punctuation">(</span><span class="token string">"auto"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">".more"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">html</span><span class="token punctuation">(</span><span class="token string">\'&lt;span>收起&lt;/span>&lt;i class="sprite">&lt;/i>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">".more i.sprite"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">css</span><span class="token punctuation">(</span><span class="token string">"transform"</span><span class="token punctuation">,</span> <span class="token string">"rotate(-180deg)"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">removeClass</span><span class="token punctuation">(</span><span class="token string">"auto"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">".more"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">html</span><span class="token punctuation">(</span><span class="token string">\'&lt;span>展开&lt;/span>&lt;i class="sprite">&lt;/i>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    event<span class="token punctuation">.</span><span class="token method function property-access">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u591A\u5217\u8868\u7684jq\u5C55\u5F00\u6536\u8D77\u6548\u679C"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h6 id="%E5%9C%A8%E5%81%9A%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%97%B6%E5%80%99%E7%A2%B0%E5%88%B0%E7%9A%84%E4%B8%80%E4%B8%AA%E9%9C%80%E6%B1%82%E8%A6%81%E5%81%9A%E5%A4%9A%E5%88%97%E8%A1%A8%E7%9A%84%E5%B1%95%E5%BC%80%E5%92%8C%E6%94%B6%E8%B5%B7%E7%9A%84%E6%95%88%E6%9E%9C%E4%B8%80%E5%BC%80%E5%A7%8B%E5%BE%88%E5%BF%AB%E5%B0%B1%E5%86%99%E5%A5%BD%E4%BA%86%E5%8F%AF%E6%98%AF%E5%87%BA%E7%8E%B0%E4%BA%86%E9%94%99%E8%AF%AF%E6%9C%80%E5%90%8E%E6%89%BE%E5%88%B0%E4%BA%86%E5%8E%9F%E5%9B%A0%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%8A%A8%E7%94%BBanimate%E7%9A%84%E6%95%88%E6%9E%9C%E6%9C%80%E5%90%8E%E5%8E%BB%E6%8E%89%E6%B2%A1%E6%9C%89%E8%BF%87%E5%BA%A6%E5%8A%A8%E7%94%BB%E8%9B%8B%E7%96%BC%E7%BB%88%E4%BA%8E%E8%A7%A3%E5%86%B3">在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。<a class="anchor" href="#%E5%9C%A8%E5%81%9A%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%97%B6%E5%80%99%E7%A2%B0%E5%88%B0%E7%9A%84%E4%B8%80%E4%B8%AA%E9%9C%80%E6%B1%82%E8%A6%81%E5%81%9A%E5%A4%9A%E5%88%97%E8%A1%A8%E7%9A%84%E5%B1%95%E5%BC%80%E5%92%8C%E6%94%B6%E8%B5%B7%E7%9A%84%E6%95%88%E6%9E%9C%E4%B8%80%E5%BC%80%E5%A7%8B%E5%BE%88%E5%BF%AB%E5%B0%B1%E5%86%99%E5%A5%BD%E4%BA%86%E5%8F%AF%E6%98%AF%E5%87%BA%E7%8E%B0%E4%BA%86%E9%94%99%E8%AF%AF%E6%9C%80%E5%90%8E%E6%89%BE%E5%88%B0%E4%BA%86%E5%8E%9F%E5%9B%A0%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%8A%A8%E7%94%BBanimate%E7%9A%84%E6%95%88%E6%9E%9C%E6%9C%80%E5%90%8E%E5%8E%BB%E6%8E%89%E6%B2%A1%E6%9C%89%E8%BF%87%E5%BA%A6%E5%8A%A8%E7%94%BB%E8%9B%8B%E7%96%BC%E7%BB%88%E4%BA%8E%E8%A7%A3%E5%86%B3">§</a></h6>\n<p><strong>效果图如下：</strong></p>\n<p><a href="https://img-blog.csdnimg.cn/2019120610061415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dxc3NoMjE=,size_16,color_FFFFFF,t_70"><img src="https://img-blog.csdnimg.cn/2019120610061415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dxc3NoMjE=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></a></p>\n<p><strong>jq代码：</strong></p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".zimu_con_list dl"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log($(item).find("dt").html())</span>\n    <span class="token keyword">var</span> defHeight <span class="token operator">=</span> <span class="token number">115</span><span class="token punctuation">;</span><span class="token comment">//默认高度</span>\n    <span class="token keyword">var</span> infoHeight <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>infoHeight <span class="token operator">></span> defHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 设置需求所在位置的默认高度,隐藏超出部分</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">css</span><span class="token punctuation">(</span><span class="token string">\'height\'</span><span class="token punctuation">,</span> defHeight <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//加按钮</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">append</span><span class="token punctuation">(</span><span class="token string">\'&lt;p class="more">&lt;span>展开&lt;/span>&lt;i class="sprite">&lt;/i>&lt;/p>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 点击按钮</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">".more"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> curHeight <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// console.log(curHeight)</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>curHeight <span class="token operator">==</span> defHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//这里看看能不能有其他的办法加个过渡效果，用animate()有错误</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">addClass</span><span class="token punctuation">(</span><span class="token string">"auto"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">".more"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">html</span><span class="token punctuation">(</span><span class="token string">\'&lt;span>收起&lt;/span>&lt;i class="sprite">&lt;/i>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">".more i.sprite"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">css</span><span class="token punctuation">(</span><span class="token string">"transform"</span><span class="token punctuation">,</span> <span class="token string">"rotate(-180deg)"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">removeClass</span><span class="token punctuation">(</span><span class="token string">"auto"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">".more"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">html</span><span class="token punctuation">(</span><span class="token string">\'&lt;span>展开&lt;/span>&lt;i class="sprite">&lt;/i>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    event<span class="token punctuation">.</span><span class="token method function property-access">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "深海如梦",
    'contributors': [
        "Evan Jason"
    ],
    'date': "2019/12/06",
    'updated': null,
    'excerpt': "在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。",
    'cover': "https://img-blog.csdnimg.cn/2019120610061415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dxc3NoMjE=,size_16,color_FFFFFF,t_70",
    'categories': [
        "Jquery"
    ],
    'tags': [
        "Jquery"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2021/使用react-router-cache-route实现页面状态的缓存.md",
                "title": "使用react-router-cache-route实现页面状态的缓存",
                "link": "posts/2021/使用react-router-cache-route实现页面状态的缓存.html",
                "date": "2021/07/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                "pagePath": "posts/2021/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/2021/antd表格穿梭框功能.html",
                "date": "2021/05/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                    "Evan Jason"
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
                "name": "vscode",
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
