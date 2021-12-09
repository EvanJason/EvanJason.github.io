import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2020/Echarts 配置和知识点.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2020/Echarts 配置和知识点.html",
    'title': "Echarts 配置和知识点",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Echarts 配置和知识点</h1>\n<h4 id="tooltip-confine"><a href="https://echarts.apache.org/zh/option.html#tooltip">tooltip.</a> <a href="https://echarts.apache.org/zh/option.html#tooltip.confine">confine</a><a class="anchor" href="#tooltip-confine">§</a></h4>\n<p>boolean</p>\n<p>是否将 tooltip 框限制在图表的区域内。</p>\n<p>当图表外层的 dom 被设置为 <code>\'overflow: hidden\'</code>，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。</p>\n<p>formatter 字符串格式化</p>\n<p>双Y轴图</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">let</span> x1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManynewUsers3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> x2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManynewRoles3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> x3 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManyfirstRoles3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> x3<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Xmax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Ymax <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Ymin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\nyAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    <span class="token comment">// 第一条Y轴</span>\n    name<span class="token operator">:</span> <span class="token string">\'单位(人)\'</span><span class="token punctuation">,</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'value\'</span><span class="token punctuation">,</span>\n    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        interval<span class="token operator">:</span> <span class="token string">\'auto\'</span><span class="token punctuation">,</span>\n        formatter<span class="token operator">:</span> <span class="token string">\'{value}\'</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// show: true,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y轴上方单位的颜色</span>\n        color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    max<span class="token operator">:</span> Xmax<span class="token punctuation">,</span>\n    splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    interval<span class="token operator">:</span> Xmax <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span><span class="token comment">//第二条Y轴</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'value\'</span><span class="token punctuation">,</span>\n    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        interval<span class="token operator">:</span> <span class="token string">\'auto\'</span><span class="token punctuation">,</span>\n        formatter<span class="token operator">:</span> <span class="token string">\'{value}%\'</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// show: true,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y轴上方单位的颜色</span>\n        color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> TwoYaxis<span class="token punctuation">,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    min<span class="token operator">:</span> Ymin<span class="token punctuation">,</span>\n    max<span class="token operator">:</span> Ymax<span class="token punctuation">,</span>\n    splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    interval<span class="token operator">:</span> <span class="token number">20</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">//自定义工具</span>\ntoolbox<span class="token operator">:</span> <span class="token punctuation">{</span>\n    feature<span class="token operator">:</span> <span class="token punctuation">{</span>\n        myTool<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 是否显示</span>\n            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                title<span class="token operator">:</span> <span class="token string">\'导出\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            dataView<span class="token operator">:</span> <span class="token punctuation">{</span>\n                readOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    title<span class="token operator">:</span> <span class="token string">\'查看\'</span><span class="token punctuation">,</span>\n                        <span class="token comment">// lang: [\'数据视图\', \'关闭\', \'刷新\'],</span>\n                        <span class="token function-variable function">optionToContent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>opt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                            <span class="token comment">// 坐标数据</span>\n                            <span class="token keyword">const</span> axisData <span class="token operator">=</span> opt<span class="token punctuation">.</span>xAxis<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>\n                            <span class="token comment">// 折线图数据</span>\n                            <span class="token keyword">const</span> series <span class="token operator">=</span> opt<span class="token punctuation">.</span>series<span class="token punctuation">;</span>\n                            <span class="token keyword">let</span> tdHeads <span class="token operator">=</span> <span class="token string">\'&lt;td  style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;">时间&lt;/td>\'</span><span class="token punctuation">;</span> <span class="token comment">//表头</span>\n                            <span class="token comment">// 数据</span>\n                            <span class="token keyword">let</span> tdBodys <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n                            series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                <span class="token comment">// 组装表头</span>\n                                tdHeads <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;td style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                            <span class="token keyword">let</span> table <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;table id="tableExcel" style="border: 1px solid #e9eaec;width:100%;border-collapse:collapse;font-size:14px;text-align:center">&lt;tbody>&lt;tr></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tdHeads<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;/tr></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n                            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> axisData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> series<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                    <span class="token comment">// 组装表数据</span>\n                                    tdBodys <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>series<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                                <span class="token punctuation">}</span>\n                                table <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;tr>&lt;td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>axisData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tdBodys<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/tr></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                                tdBodys <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n                            <span class="token punctuation">}</span>\n                            <span class="token comment">// table += \'&lt;/tbody>&lt;/table>&lt;div style="position: absolute; bottom: 0px; right: 0;z-index: 10;">&lt;div style="float: right; margin-right: 20px; border: none; cursor: pointer; padding: 2px 5px; font-size: 12px; border-radius: 3px; background-color: rgb(194, 53, 49); color: rgb(255, 255, 255);">导出&lt;/div>&lt;/div>\';</span>\n                            table <span class="token operator">+=</span> <span class="token string">\'&lt;/tbody>&lt;/table>\'</span><span class="token punctuation">;</span>\n                            <span class="token keyword">return</span> table<span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Echarts \u914D\u7F6E\u548C\u77E5\u8BC6\u70B9"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="tooltip-confine"><a href="https://echarts.apache.org/zh/option.html#tooltip">tooltip.</a> <a href="https://echarts.apache.org/zh/option.html#tooltip.confine">confine</a><a class="anchor" href="#tooltip-confine">§</a></h4>\n<p>boolean</p>\n<p>是否将 tooltip 框限制在图表的区域内。</p>\n<p>当图表外层的 dom 被设置为 <code>\'overflow: hidden\'</code>，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。</p>\n<p>formatter 字符串格式化</p>\n<p>双Y轴图</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">let</span> x1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManynewUsers3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> x2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManynewRoles3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> x3 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManyfirstRoles3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> x3<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Xmax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Ymax <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Ymin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\nyAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    <span class="token comment">// 第一条Y轴</span>\n    name<span class="token operator">:</span> <span class="token string">\'单位(人)\'</span><span class="token punctuation">,</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'value\'</span><span class="token punctuation">,</span>\n    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        interval<span class="token operator">:</span> <span class="token string">\'auto\'</span><span class="token punctuation">,</span>\n        formatter<span class="token operator">:</span> <span class="token string">\'{value}\'</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// show: true,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y轴上方单位的颜色</span>\n        color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    max<span class="token operator">:</span> Xmax<span class="token punctuation">,</span>\n    splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    interval<span class="token operator">:</span> Xmax <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span><span class="token comment">//第二条Y轴</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'value\'</span><span class="token punctuation">,</span>\n    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        interval<span class="token operator">:</span> <span class="token string">\'auto\'</span><span class="token punctuation">,</span>\n        formatter<span class="token operator">:</span> <span class="token string">\'{value}%\'</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// show: true,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y轴上方单位的颜色</span>\n        color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> TwoYaxis<span class="token punctuation">,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    min<span class="token operator">:</span> Ymin<span class="token punctuation">,</span>\n    max<span class="token operator">:</span> Ymax<span class="token punctuation">,</span>\n    splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    interval<span class="token operator">:</span> <span class="token number">20</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">//自定义工具</span>\ntoolbox<span class="token operator">:</span> <span class="token punctuation">{</span>\n    feature<span class="token operator">:</span> <span class="token punctuation">{</span>\n        myTool<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 是否显示</span>\n            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                title<span class="token operator">:</span> <span class="token string">\'导出\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            dataView<span class="token operator">:</span> <span class="token punctuation">{</span>\n                readOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    title<span class="token operator">:</span> <span class="token string">\'查看\'</span><span class="token punctuation">,</span>\n                        <span class="token comment">// lang: [\'数据视图\', \'关闭\', \'刷新\'],</span>\n                        <span class="token function-variable function">optionToContent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>opt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                            <span class="token comment">// 坐标数据</span>\n                            <span class="token keyword">const</span> axisData <span class="token operator">=</span> opt<span class="token punctuation">.</span>xAxis<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>\n                            <span class="token comment">// 折线图数据</span>\n                            <span class="token keyword">const</span> series <span class="token operator">=</span> opt<span class="token punctuation">.</span>series<span class="token punctuation">;</span>\n                            <span class="token keyword">let</span> tdHeads <span class="token operator">=</span> <span class="token string">\'&lt;td  style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;">时间&lt;/td>\'</span><span class="token punctuation">;</span> <span class="token comment">//表头</span>\n                            <span class="token comment">// 数据</span>\n                            <span class="token keyword">let</span> tdBodys <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n                            series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                <span class="token comment">// 组装表头</span>\n                                tdHeads <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;td style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                            <span class="token keyword">let</span> table <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;table id="tableExcel" style="border: 1px solid #e9eaec;width:100%;border-collapse:collapse;font-size:14px;text-align:center">&lt;tbody>&lt;tr></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tdHeads<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;/tr></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n                            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> axisData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> series<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                    <span class="token comment">// 组装表数据</span>\n                                    tdBodys <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>series<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                                <span class="token punctuation">}</span>\n                                table <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;tr>&lt;td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>axisData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tdBodys<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/tr></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                                tdBodys <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n                            <span class="token punctuation">}</span>\n                            <span class="token comment">// table += \'&lt;/tbody>&lt;/table>&lt;div style="position: absolute; bottom: 0px; right: 0;z-index: 10;">&lt;div style="float: right; margin-right: 20px; border: none; cursor: pointer; padding: 2px 5px; font-size: 12px; border-radius: 3px; background-color: rgb(194, 53, 49); color: rgb(255, 255, 255);">导出&lt;/div>&lt;/div>\';</span>\n                            table <span class="token operator">+=</span> <span class="token string">\'&lt;/tbody>&lt;/table>\'</span><span class="token punctuation">;</span>\n                            <span class="token keyword">return</span> table<span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2020/09/28",
    'updated': null,
    'excerpt': "Echarts 配置和知识点",
    'cover': undefined,
    'categories': [
        "Angular",
        "Echarts"
    ],
    'tags': [
        "知识点",
        "配置",
        "Echarts"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "name": "年终总结",
                "count": 1
            },
            {
                "name": "日常生活",
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
                "name": "年终总结",
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
                "name": "日常生活",
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
