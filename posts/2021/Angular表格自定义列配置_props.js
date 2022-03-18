import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2021/Angular表格自定义列配置.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/Angular表格自定义列配置.html",
    'title': "Angular 表格自定义列配置",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Angular 表格自定义列配置</h1>\n<h2 id="%E6%95%88%E6%9E%9C%E5%9B%BE">效果图<a class="anchor" href="#%E6%95%88%E6%9E%9C%E5%9B%BE">§</a></h2>\n<p>略</p>\n<h2 id="ts-%E4%BB%A3%E7%A0%81">ts 代码<a class="anchor" href="#ts-%E4%BB%A3%E7%A0%81">§</a></h2>\n<h3 id="globalservicets">global.service.ts<a class="anchor" href="#globalservicets">§</a></h3>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  providedIn<span class="token operator">:</span> <span class="token string">\'root\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Global</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> thOfData<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> indeterminateTh <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> checkedTh <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> setOfThCheckedId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> changeTh <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> isShowTable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * 初始化列展示\n   * <span class="token keyword">@param</span> <span class="token parameter">data</span>\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">initSetTHcheckedFun</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(data);</span>\n    <span class="token keyword">let</span> defalutTh <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        defalutTh<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span><span class="token punctuation">(</span>defalutTh<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 全选列展示操作\n   * <span class="token keyword">@param</span> <span class="token parameter">checked</span>\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">onAllThChecked</span><span class="token punctuation">(</span>checked<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>changeTh <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateThCheckedSet</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> checked<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refreshThCheckedStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 重置列展示\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">resetTh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onAllThChecked</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 列展示-单选\n   * <span class="token keyword">@param</span> <span class="token parameter">id</span>\n   * <span class="token keyword">@param</span> <span class="token parameter">checked</span>\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">onItemThChecked</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>changeTh <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateThCheckedSet</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> checked<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refreshThCheckedStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 进行列展示单选操作\n   * <span class="token keyword">@param</span> <span class="token parameter">id</span>\n   * <span class="token keyword">@param</span> <span class="token parameter">checked</span>\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">updateThCheckedSet</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token keyword">delete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      item<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 当列展示全不选时，数据为空</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>item<span class="token punctuation">.</span>checked<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>isShowTable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>isShowTable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 更新列展示的状态\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">refreshThCheckedStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>checkedTh <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>indeterminateTh <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>checkedTh<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="appcomponentts">app.component.ts<a class="anchor" href="#appcomponentts">§</a></h3>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Global <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'src/app/common/pastData.service\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n\n<span class="token keyword">this</span><span class="token punctuation">.</span>globalCommon<span class="token punctuation">.</span>isShowTable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> thOfData <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"新增注册"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"newUsers"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"新增创角"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"newRoles"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"首次创角"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"firstRoles"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"老用户活跃"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"oldActive"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"总活跃"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"totalActive"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"活跃指数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"activeIndex"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"首日付费人数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"firstDayPayUsers"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"老付费人数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"oldPayUsers"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"月活跃"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"avticeUsersOnMonth"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"月平均活跃天数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"viscosityIndex"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"月付费人数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"payUsersOnMonth"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"总付费人数"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"payUsers"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"总付费金额"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"totalFeeCny"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"活跃付费率"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"activeFeeRate"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>DayTabsIndex <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">"总用户付费率"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>DayTabsIndex <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">"totalPayRate"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"首日付费率"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"firstPayRate"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"首次创角率"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"firstRoleRate"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"首日付费金额"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"firstDayPayFeeCny"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"老付费金额"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"oldPayFee"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"ARPU"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"arpu"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"ARPPU"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"arppu"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">this</span><span class="token punctuation">.</span>globalCommon<span class="token punctuation">.</span>thOfData <span class="token operator">=</span> thOfData<span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>globalCommon<span class="token punctuation">.</span><span class="token function">initSetTHcheckedFun</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>globalCommon<span class="token punctuation">.</span>thOfData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="html-%E4%BB%A3%E7%A0%81">html 代码<a class="anchor" href="#html-%E4%BB%A3%E7%A0%81">§</a></h2>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">nz-tooltip</span> <span class="token attr-name">nzTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>列设置<span class="token punctuation">"</span></span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loading &amp;&amp; dataSet.length > 0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">nz-button</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">nz-popover</span> <span class="token attr-name">nzTrigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span> <span class="token attr-name">[nzTitle]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>thTitle<span class="token punctuation">"</span></span> <span class="token attr-name">[nzContent]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>thContent<span class="token punctuation">"</span></span> <span class="token attr-name">nzPlacement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setting<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#thTitle</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">nz-checkbox</span> <span class="token attr-name">[nzChecked]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.checkedTh<span class="token punctuation">"</span></span> <span class="token attr-name">[nzIndeterminate]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.indeterminateTh<span class="token punctuation">"</span></span> <span class="token attr-name">(nzCheckedChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.onAllThChecked($event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>列展示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.resetTh()<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>重置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#thContent</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">[ngStyle]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{width: item.value ? <span class="token punctuation">\'</span>32%<span class="token punctuation">\'</span>:<span class="token punctuation">\'</span>0<span class="token punctuation">\'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let item of this.globalCommon.thOfData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.value<span class="token punctuation">"</span></span> <span class="token attr-name">nz-checkbox</span> <span class="token attr-name">[nzDisabled]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.disabled<span class="token punctuation">"</span></span> <span class="token attr-name">[nzChecked]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.setOfThCheckedId.has(item.id)<span class="token punctuation">"</span></span> <span class="token attr-name">(nzCheckedChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.onItemThChecked(item.id, $event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{item.value}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>isShowTable 用来判断是否显示隐藏表格 数据为空的时候，显示出空数据</p>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Angular \u8868\u683C\u81EA\u5B9A\u4E49\u5217\u914D\u7F6E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E6%95%88%E6%9E%9C%E5%9B%BE">效果图<a class="anchor" href="#%E6%95%88%E6%9E%9C%E5%9B%BE">§</a></h2>\n<p>略</p>\n<h2 id="ts-%E4%BB%A3%E7%A0%81">ts 代码<a class="anchor" href="#ts-%E4%BB%A3%E7%A0%81">§</a></h2>\n<h3 id="globalservicets">global.service.ts<a class="anchor" href="#globalservicets">§</a></h3>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  providedIn<span class="token operator">:</span> <span class="token string">\'root\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Global</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> thOfData<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> indeterminateTh <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> checkedTh <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> setOfThCheckedId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> changeTh <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> isShowTable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * 初始化列展示\n   * <span class="token keyword">@param</span> <span class="token parameter">data</span>\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">initSetTHcheckedFun</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(data);</span>\n    <span class="token keyword">let</span> defalutTh <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        defalutTh<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span><span class="token punctuation">(</span>defalutTh<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 全选列展示操作\n   * <span class="token keyword">@param</span> <span class="token parameter">checked</span>\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">onAllThChecked</span><span class="token punctuation">(</span>checked<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>changeTh <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateThCheckedSet</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> checked<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refreshThCheckedStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 重置列展示\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">resetTh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onAllThChecked</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 列展示-单选\n   * <span class="token keyword">@param</span> <span class="token parameter">id</span>\n   * <span class="token keyword">@param</span> <span class="token parameter">checked</span>\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">onItemThChecked</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>changeTh <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateThCheckedSet</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> checked<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refreshThCheckedStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 进行列展示单选操作\n   * <span class="token keyword">@param</span> <span class="token parameter">id</span>\n   * <span class="token keyword">@param</span> <span class="token parameter">checked</span>\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">updateThCheckedSet</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token keyword">delete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      item<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 当列展示全不选时，数据为空</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>item<span class="token punctuation">.</span>checked<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>isShowTable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>isShowTable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 更新列展示的状态\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">refreshThCheckedStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>checkedTh <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>indeterminateTh <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>thOfData<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>setOfThCheckedId<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>checkedTh<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="appcomponentts">app.component.ts<a class="anchor" href="#appcomponentts">§</a></h3>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Global <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'src/app/common/pastData.service\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n\n<span class="token keyword">this</span><span class="token punctuation">.</span>globalCommon<span class="token punctuation">.</span>isShowTable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> thOfData <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"新增注册"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"newUsers"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"新增创角"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"newRoles"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"首次创角"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"firstRoles"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"老用户活跃"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"oldActive"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"总活跃"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"totalActive"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"活跃指数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"activeIndex"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"首日付费人数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"firstDayPayUsers"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"老付费人数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"oldPayUsers"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"月活跃"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"avticeUsersOnMonth"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"月平均活跃天数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"viscosityIndex"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"月付费人数"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mark <span class="token operator">!==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"payUsersOnMonth"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"总付费人数"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"payUsers"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"总付费金额"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"totalFeeCny"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"活跃付费率"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"activeFeeRate"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>DayTabsIndex <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">"总用户付费率"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>DayTabsIndex <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">"totalPayRate"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"首日付费率"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">&amp;&amp;</span> mark <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">"firstPayRate"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"首次创角率"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShowtd <span class="token operator">?</span> <span class="token string">"firstRoleRate"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"首日付费金额"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"firstDayPayFeeCny"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"老付费金额"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>roleSelect <span class="token operator">?</span> <span class="token string">"oldPayFee"</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"ARPU"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"arpu"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"ARPPU"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"arppu"</span><span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">this</span><span class="token punctuation">.</span>globalCommon<span class="token punctuation">.</span>thOfData <span class="token operator">=</span> thOfData<span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>globalCommon<span class="token punctuation">.</span><span class="token function">initSetTHcheckedFun</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>globalCommon<span class="token punctuation">.</span>thOfData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="html-%E4%BB%A3%E7%A0%81">html 代码<a class="anchor" href="#html-%E4%BB%A3%E7%A0%81">§</a></h2>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">nz-tooltip</span> <span class="token attr-name">nzTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>列设置<span class="token punctuation">"</span></span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loading &amp;&amp; dataSet.length > 0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">nz-button</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">nz-popover</span> <span class="token attr-name">nzTrigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span> <span class="token attr-name">[nzTitle]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>thTitle<span class="token punctuation">"</span></span> <span class="token attr-name">[nzContent]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>thContent<span class="token punctuation">"</span></span> <span class="token attr-name">nzPlacement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setting<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#thTitle</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">nz-checkbox</span> <span class="token attr-name">[nzChecked]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.checkedTh<span class="token punctuation">"</span></span> <span class="token attr-name">[nzIndeterminate]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.indeterminateTh<span class="token punctuation">"</span></span> <span class="token attr-name">(nzCheckedChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.onAllThChecked($event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>列展示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.resetTh()<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>重置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#thContent</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">[ngStyle]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{width: item.value ? <span class="token punctuation">\'</span>32%<span class="token punctuation">\'</span>:<span class="token punctuation">\'</span>0<span class="token punctuation">\'</span>}<span class="token punctuation">"</span></span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let item of this.globalCommon.thOfData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.value<span class="token punctuation">"</span></span> <span class="token attr-name">nz-checkbox</span> <span class="token attr-name">[nzDisabled]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.disabled<span class="token punctuation">"</span></span> <span class="token attr-name">[nzChecked]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.setOfThCheckedId.has(item.id)<span class="token punctuation">"</span></span> <span class="token attr-name">(nzCheckedChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this.globalCommon.onItemThChecked(item.id, $event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{item.value}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>isShowTable 用来判断是否显示隐藏表格 数据为空的时候，显示出空数据</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%95%88%E6%9E%9C%E5%9B%BE" }, "\u6548\u679C\u56FE")),
            React.createElement("li", null,
                React.createElement("a", { href: "#ts-%E4%BB%A3%E7%A0%81" }, "ts \u4EE3\u7801"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#globalservicets" }, "global.service.ts")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#appcomponentts" }, "app.component.ts")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#html-%E4%BB%A3%E7%A0%81" }, "html \u4EE3\u7801")))),
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2021/10/10",
    'updated': null,
    'excerpt': "Angular表格自定义列配置",
    'cover': undefined,
    'categories': [
        "antd",
        "Angular"
    ],
    'tags': [
        "antd",
        "表格",
        "自定义"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2022/React、Echarts图表点击事件.md",
                "title": "React、Echarts柱状图点击图上柱状事件，并实现高亮展示点击 的柱状",
                "link": "posts/2022/React、Echarts图表点击事件.html",
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
                "excerpt": "React、Echarts柱状图点击图上柱状事件"
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
                "name": "Vue",
                "count": 4
            },
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "React",
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
                "name": "Vue",
                "count": 4
            },
            {
                "name": "React",
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
