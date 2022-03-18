import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2022/React-Echarts图表点击事件.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2022/React-Echarts图表点击事件.html",
    'title': "echarts图表点击事件",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>echarts图表点击事件</h1>\n<p>问题：echarts图表点击事件，进行查询条件，实现高亮</p>\n<h2 id="echarts-for-reacthttpswwwnpmjscompackageecharts-for-react">echarts-for-react（<a href="https://www.npmjs.com/package/echarts-for-react%EF%BC%89">https://www.npmjs.com/package/echarts-for-react）</a><a class="anchor" href="#echarts-for-reacthttpswwwnpmjscompackageecharts-for-react">§</a></h2>\n<p>阅读官网相关文档，知道有一个属性onEvent可以用来进行操作</p>\n<ul>\n<li><strong><code>onEvents</code></strong> (optional, array(string=&gt;function) )</li>\n</ul>\n<p>binding the echarts event, will callback with the <code>echarts event object</code>, and <code>the echart object</code> as it\'s paramters. e.g:</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">const</span> onEvents <span class="token operator">=</span> {\n  <span class="token string">\'click\'</span><span class="token punctuation">:</span> this<span class="token punctuation">.</span>onChartClick<span class="token punctuation">,</span>\n  <span class="token string">\'legendselectchanged\'</span><span class="token punctuation">:</span> this<span class="token punctuation">.</span>onChartLegendselectchanged\n}\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&lt;</span>ReactECharts\n  option<span class="token operator">=</span>{this<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}\n  style<span class="token operator">=</span>{{ height<span class="token punctuation">:</span> <span class="token string">\'300px\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span> }}\n  onEvents<span class="token operator">=</span>{onEvents}\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n<p>然后我们处理好点击事件后，需要设置高亮状态，</p>\n<h3 id="%E9%9C%80%E6%B1%82%E6%98%AF%E5%BD%93%E6%88%91%E4%BB%AC%E7%82%B9%E5%87%BB%E6%9F%B1%E7%8A%B6%E6%97%B6%E7%82%B9%E5%87%BB%E7%9A%84%E6%9F%B1%E7%8A%B6%E9%AB%98%E4%BA%AE%E5%85%B6%E4%BD%99%E6%9F%B1%E7%8A%B6%E5%8F%98%E6%B5%85%E8%89%B2%E9%82%A3%E4%B9%88%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E6%80%8E%E4%B9%88%E8%BF%9B%E8%A1%8C%E5%A4%84%E7%90%86%E8%AE%A9%E4%BB%96%E4%BB%AC%E7%9A%84%E9%A2%9C%E8%89%B2%E5%8F%AF%E4%BB%A5%E4%BA%A4%E6%9B%BF%E6%94%B9%E5%8F%98%E5%91%A2">需求是，当我们点击柱状时，点击的柱状高亮，其余柱状变浅色，那么我们需要怎么进行处理让他们的颜色可以交替改变呢？<a class="anchor" href="#%E9%9C%80%E6%B1%82%E6%98%AF%E5%BD%93%E6%88%91%E4%BB%AC%E7%82%B9%E5%87%BB%E6%9F%B1%E7%8A%B6%E6%97%B6%E7%82%B9%E5%87%BB%E7%9A%84%E6%9F%B1%E7%8A%B6%E9%AB%98%E4%BA%AE%E5%85%B6%E4%BD%99%E6%9F%B1%E7%8A%B6%E5%8F%98%E6%B5%85%E8%89%B2%E9%82%A3%E4%B9%88%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E6%80%8E%E4%B9%88%E8%BF%9B%E8%A1%8C%E5%A4%84%E7%90%86%E8%AE%A9%E4%BB%96%E4%BB%AC%E7%9A%84%E9%A2%9C%E8%89%B2%E5%8F%AF%E4%BB%A5%E4%BA%A4%E6%9B%BF%E6%94%B9%E5%8F%98%E5%91%A2">§</a></h3>\n<p>我研究了一下官网关于柱状图颜色的api文档，发现颜色是可以设定的，那么我们为什么不弄一个数组用来装颜色呢？然后根据点击的柱状为唯一值，设置它的颜色</p>\n<h4 id="%E4%B8%8B%E9%9D%A2%E6%98%AF%E7%9B%B8%E5%BA%94%E4%BB%A3%E7%A0%81">下面是相应代码<a class="anchor" href="#%E4%B8%8B%E9%9D%A2%E6%98%AF%E7%9B%B8%E5%BA%94%E4%BB%A3%E7%A0%81">§</a></h4>\n<p>没有设定时，我们一般的设置颜色</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">var</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'#4587E7\'</span><span class="token punctuation">,</span><span class="token string">\'#35AB33\'</span><span class="token punctuation">,</span><span class="token string">\'#F5AD1D\'</span><span class="token punctuation">,</span><span class="token string">\'#ff7f50\'</span><span class="token punctuation">,</span><span class="token string">\'#da70d6\'</span><span class="token punctuation">,</span><span class="token string">\'#32cd32\'</span><span class="token punctuation">,</span><span class="token string">\'#6495ed\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\noption <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    series<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">//通过返回值的下标一一对应将颜色赋给柱子上</span>\n                <span class="token keyword">return</span> colors<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>设定了高亮颜色与其他的颜色不同</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// x轴数据</span>\n<span class="token keyword">let</span> xArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'一般\'</span><span class="token punctuation">,</span><span class="token string">\'测试\'</span><span class="token punctuation">,</span><span class="token string">\'的时刻\'</span><span class="token punctuation">,</span><span class="token string">\'大苏打\'</span><span class="token punctuation">,</span><span class="token string">\'数据\'</span><span class="token punctuation">]</span>\n<span class="token comment">// 点击后的名字</span>\n<span class="token keyword">let</span> uniqueName <span class="token operator">=</span> <span class="token string">\'测试\'</span>\n<span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nxArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueName <span class="token operator">===</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 设定高亮</span>\n      colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'#3daae3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 浅色</span>\n      colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'#b1ddf4\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n \noption <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    data<span class="token operator">:</span> data<span class="token punctuation">,</span>\n    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>uniqueName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">return</span> <span class="token string">\'#3daae3\'</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n              <span class="token keyword">return</span> colors<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "echarts\u56FE\u8868\u70B9\u51FB\u4E8B\u4EF6"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>问题：echarts图表点击事件，进行查询条件，实现高亮</p>\n<h2 id="echarts-for-reacthttpswwwnpmjscompackageecharts-for-react">echarts-for-react（<a href="https://www.npmjs.com/package/echarts-for-react%EF%BC%89">https://www.npmjs.com/package/echarts-for-react）</a><a class="anchor" href="#echarts-for-reacthttpswwwnpmjscompackageecharts-for-react">§</a></h2>\n<p>阅读官网相关文档，知道有一个属性onEvent可以用来进行操作</p>\n<ul>\n<li><strong><code>onEvents</code></strong> (optional, array(string=&gt;function) )</li>\n</ul>\n<p>binding the echarts event, will callback with the <code>echarts event object</code>, and <code>the echart object</code> as it\'s paramters. e.g:</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token keyword">const</span> onEvents <span class="token operator">=</span> {\n  <span class="token string">\'click\'</span><span class="token punctuation">:</span> this<span class="token punctuation">.</span>onChartClick<span class="token punctuation">,</span>\n  <span class="token string">\'legendselectchanged\'</span><span class="token punctuation">:</span> this<span class="token punctuation">.</span>onChartLegendselectchanged\n}\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&lt;</span>ReactECharts\n  option<span class="token operator">=</span>{this<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}\n  style<span class="token operator">=</span>{{ height<span class="token punctuation">:</span> <span class="token string">\'300px\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span> }}\n  onEvents<span class="token operator">=</span>{onEvents}\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n<p>然后我们处理好点击事件后，需要设置高亮状态，</p>\n<h3 id="%E9%9C%80%E6%B1%82%E6%98%AF%E5%BD%93%E6%88%91%E4%BB%AC%E7%82%B9%E5%87%BB%E6%9F%B1%E7%8A%B6%E6%97%B6%E7%82%B9%E5%87%BB%E7%9A%84%E6%9F%B1%E7%8A%B6%E9%AB%98%E4%BA%AE%E5%85%B6%E4%BD%99%E6%9F%B1%E7%8A%B6%E5%8F%98%E6%B5%85%E8%89%B2%E9%82%A3%E4%B9%88%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E6%80%8E%E4%B9%88%E8%BF%9B%E8%A1%8C%E5%A4%84%E7%90%86%E8%AE%A9%E4%BB%96%E4%BB%AC%E7%9A%84%E9%A2%9C%E8%89%B2%E5%8F%AF%E4%BB%A5%E4%BA%A4%E6%9B%BF%E6%94%B9%E5%8F%98%E5%91%A2">需求是，当我们点击柱状时，点击的柱状高亮，其余柱状变浅色，那么我们需要怎么进行处理让他们的颜色可以交替改变呢？<a class="anchor" href="#%E9%9C%80%E6%B1%82%E6%98%AF%E5%BD%93%E6%88%91%E4%BB%AC%E7%82%B9%E5%87%BB%E6%9F%B1%E7%8A%B6%E6%97%B6%E7%82%B9%E5%87%BB%E7%9A%84%E6%9F%B1%E7%8A%B6%E9%AB%98%E4%BA%AE%E5%85%B6%E4%BD%99%E6%9F%B1%E7%8A%B6%E5%8F%98%E6%B5%85%E8%89%B2%E9%82%A3%E4%B9%88%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E6%80%8E%E4%B9%88%E8%BF%9B%E8%A1%8C%E5%A4%84%E7%90%86%E8%AE%A9%E4%BB%96%E4%BB%AC%E7%9A%84%E9%A2%9C%E8%89%B2%E5%8F%AF%E4%BB%A5%E4%BA%A4%E6%9B%BF%E6%94%B9%E5%8F%98%E5%91%A2">§</a></h3>\n<p>我研究了一下官网关于柱状图颜色的api文档，发现颜色是可以设定的，那么我们为什么不弄一个数组用来装颜色呢？然后根据点击的柱状为唯一值，设置它的颜色</p>\n<h4 id="%E4%B8%8B%E9%9D%A2%E6%98%AF%E7%9B%B8%E5%BA%94%E4%BB%A3%E7%A0%81">下面是相应代码<a class="anchor" href="#%E4%B8%8B%E9%9D%A2%E6%98%AF%E7%9B%B8%E5%BA%94%E4%BB%A3%E7%A0%81">§</a></h4>\n<p>没有设定时，我们一般的设置颜色</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">var</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'#4587E7\'</span><span class="token punctuation">,</span><span class="token string">\'#35AB33\'</span><span class="token punctuation">,</span><span class="token string">\'#F5AD1D\'</span><span class="token punctuation">,</span><span class="token string">\'#ff7f50\'</span><span class="token punctuation">,</span><span class="token string">\'#da70d6\'</span><span class="token punctuation">,</span><span class="token string">\'#32cd32\'</span><span class="token punctuation">,</span><span class="token string">\'#6495ed\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\noption <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    series<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">//通过返回值的下标一一对应将颜色赋给柱子上</span>\n                <span class="token keyword">return</span> colors<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>设定了高亮颜色与其他的颜色不同</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// x轴数据</span>\n<span class="token keyword">let</span> xArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'一般\'</span><span class="token punctuation">,</span><span class="token string">\'测试\'</span><span class="token punctuation">,</span><span class="token string">\'的时刻\'</span><span class="token punctuation">,</span><span class="token string">\'大苏打\'</span><span class="token punctuation">,</span><span class="token string">\'数据\'</span><span class="token punctuation">]</span>\n<span class="token comment">// 点击后的名字</span>\n<span class="token keyword">let</span> uniqueName <span class="token operator">=</span> <span class="token string">\'测试\'</span>\n<span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nxArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueName <span class="token operator">===</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 设定高亮</span>\n      colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'#3daae3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 浅色</span>\n      colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'#b1ddf4\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n \noption <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    data<span class="token operator">:</span> data<span class="token punctuation">,</span>\n    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>uniqueName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">return</span> <span class="token string">\'#3daae3\'</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n              <span class="token keyword">return</span> colors<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#echarts-for-reacthttpswwwnpmjscompackageecharts-for-react" }, "echarts-for-react\uFF08https://www.npmjs.com/package/echarts-for-react\uFF09"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E9%9C%80%E6%B1%82%E6%98%AF%E5%BD%93%E6%88%91%E4%BB%AC%E7%82%B9%E5%87%BB%E6%9F%B1%E7%8A%B6%E6%97%B6%E7%82%B9%E5%87%BB%E7%9A%84%E6%9F%B1%E7%8A%B6%E9%AB%98%E4%BA%AE%E5%85%B6%E4%BD%99%E6%9F%B1%E7%8A%B6%E5%8F%98%E6%B5%85%E8%89%B2%E9%82%A3%E4%B9%88%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E6%80%8E%E4%B9%88%E8%BF%9B%E8%A1%8C%E5%A4%84%E7%90%86%E8%AE%A9%E4%BB%96%E4%BB%AC%E7%9A%84%E9%A2%9C%E8%89%B2%E5%8F%AF%E4%BB%A5%E4%BA%A4%E6%9B%BF%E6%94%B9%E5%8F%98%E5%91%A2" }, "\u9700\u6C42\u662F\uFF0C\u5F53\u6211\u4EEC\u70B9\u51FB\u67F1\u72B6\u65F6\uFF0C\u70B9\u51FB\u7684\u67F1\u72B6\u9AD8\u4EAE\uFF0C\u5176\u4F59\u67F1\u72B6\u53D8\u6D45\u8272\uFF0C\u90A3\u4E48\u6211\u4EEC\u9700\u8981\u600E\u4E48\u8FDB\u884C\u5904\u7406\u8BA9\u4ED6\u4EEC\u7684\u989C\u8272\u53EF\u4EE5\u4EA4\u66FF\u6539\u53D8\u5462\uFF1F"),
                        React.createElement("ol", null)))))),
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2023/02/20",
    'updated': null,
    'excerpt': "echarts图表点击事件",
    'cover': undefined,
    'categories': [
        "React",
        "ECharts"
    ],
    'tags': [
        "React",
        "ECharts"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2022/React-Antd表格选中行事件.md",
                "title": "antd表格选中行事件",
                "link": "posts/2022/React-Antd表格选中行事件.html",
                "date": "2023/03/10",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "React",
                    "Antd"
                ],
                "tags": [
                    "React",
                    "Antd"
                ],
                "excerpt": "antd表格选中行事件"
            },
            {
                "pagePath": "posts/2022/React-Echarts图表点击事件.md",
                "title": "echarts图表点击事件",
                "link": "posts/2022/React-Echarts图表点击事件.html",
                "date": "2023/02/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "React",
                    "ECharts"
                ],
                "tags": [
                    "React",
                    "ECharts"
                ],
                "excerpt": "echarts图表点击事件"
            },
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
                "name": "React",
                "count": 4
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
                "name": "Antd",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "ECharts",
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
                "name": "React",
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
                "name": "Antd",
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
                "name": "ECharts",
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
