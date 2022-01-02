import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2020/树形控件功能实现.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2020/树形控件功能实现.html",
    'title': "树形控件功能",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>树形控件功能</h1>\n<h4 id="%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%9B%BE">实现的图：<a class="anchor" href="#%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%9B%BE">§</a></h4>\n<p><img src="../../pic/image-20210415160710543.png" alt="image-20210415160710543"></p>\n<h4 id="ts">ts<a class="anchor" href="#ts">§</a></h4>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> ResourceLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/compiler\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NzMessageService<span class="token punctuation">,</span> NzFormatEmitEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'ng-zorro-antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/router\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// moment插件</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">\'app-example\'</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">\'./example.component.html\'</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./example.component.css\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ExampleComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> router<span class="token operator">:</span> Router<span class="token punctuation">,</span> <span class="token keyword">private</span> message<span class="token operator">:</span> NzMessageService<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>\n  <span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  \n  <span class="token comment">// 树组件</span>\n  <span class="token comment">// 默认选中复选框</span>\n  defaultCheckedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token comment">// // 默认展开项</span>\n  defaultExpandedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'g0\'</span><span class="token punctuation">]</span>\n\n  <span class="token comment">// 删除选中成员</span>\n  <span class="token function">deleteUserNumber</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(item,index)</span>\n    <span class="token keyword">const</span> userIdList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment">// this.selectTreeValue = this.selectTreeValue.</span>\n    <span class="token comment">// if(item.userId)</span>\n    <span class="token comment">// this.selectTreeValue = this.selectTreeValue.filter(d => d.item.userId !== item.userId);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// console.log(value)</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>userId <span class="token operator">!==</span> item<span class="token punctuation">.</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          userIdList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>userId<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>key <span class="token operator">!==</span> item<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          userIdList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>key<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 默认选中</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>defaultCheckedKeys <span class="token operator">=</span> userIdList\n    <span class="token comment">// 默认展开全部</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>defaultExpandedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'g0\'</span><span class="token punctuation">]</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue<span class="token punctuation">.</span>length\n  <span class="token punctuation">}</span>\n  nodes <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      title<span class="token operator">:</span> <span class="token string">\'全部\'</span><span class="token punctuation">,</span>\n      key<span class="token operator">:</span> <span class="token string">\'g0\'</span><span class="token punctuation">,</span>\n      expanded<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          title<span class="token operator">:</span> <span class="token string">\'海外英文组\'</span><span class="token punctuation">,</span>\n          key<span class="token operator">:</span> <span class="token string">\'0-0\'</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'刘慧欣\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-1\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'黎海清\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-2\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'杨妙灵\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-3\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'罗淑萍\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-4\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'郭柯芯\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-5\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span>            \n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          checked<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          title<span class="token operator">:</span> <span class="token string">\'妙妙组\'</span><span class="token punctuation">,</span>\n          key<span class="token operator">:</span> <span class="token string">\'0-1\'</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'刘佩玲\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-1-1\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'测试赛\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-1-2\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          checked<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          title<span class="token operator">:</span> <span class="token string">\'小鱼组\'</span><span class="token punctuation">,</span>\n          key<span class="token operator">:</span> <span class="token string">\'0-2\'</span><span class="token punctuation">,</span>\n          isLeaf<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          checked<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// parentTreeValue;</span>\n  <span class="token comment">// childTreeValue = [];</span>\n  selectTreeValue<span class="token punctuation">;</span>\n  selectTreeNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//选中的数量</span>\n  <span class="token function">nzEvent</span><span class="token punctuation">(</span>event<span class="token operator">:</span> NzFormatEmitEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// let parentValue;</span>\n    <span class="token comment">// 只有选中才进行赋值</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>eventName <span class="token operator">===</span> <span class="token string">\'check\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// console.log(event)</span>\n      <span class="token comment">// console.log(event.keys)</span>\n      <span class="token keyword">const</span> SelectArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> event<span class="token punctuation">.</span>checkedKeys<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// console.log(item.key)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">// 第一级</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'level0:\', event.checkedKeys)</span>\n            <span class="token comment">//console.log(item.service.checkedNodeList)</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> item<span class="token punctuation">.</span>service<span class="token punctuation">.</span>checkedNodeList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token comment">// console.log(value.level)</span>\n              <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                SelectArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n                <span class="token comment">// console.log(SelectArr)</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment">// 第二级</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'level1:\', event.checkedKeys)</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> item<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token comment">// console.log(value.origin.children)</span>\n                  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> value<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    SelectArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n                  <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment">// 第三级</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'level2:\', event.checkedKeys)</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> item<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                SelectArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">// console.log(SelectArr)</span>\n      <span class="token comment">// 去重重组</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>SelectArr<span class="token punctuation">)</span><span class="token punctuation">]</span>\n      <span class="token comment">// this.selectTreeValue = SelectArr</span>\n      <span class="token comment">// console.log(this.selectTreeValue)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue<span class="token punctuation">.</span>length\n      <span class="token comment">// console.log(this.selectTreeValue)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token string">\'06:00:00\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n</code></pre>\n<h4 id="html">html<a class="anchor" href="#html">§</a></h4>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode color">#ffffff</span><span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>树形控件antd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TreeSection<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">600</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leftTree<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>考核成员：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leftTree_content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-tree</span> <span class="token attr-name">[nzData]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nodes<span class="token punctuation">"</span></span> <span class="token attr-name">nzBlockNode</span> <span class="token attr-name">nzExpandAll</span> <span class="token attr-name">nzCheckable</span> <span class="token attr-name">nzMultiple</span> <span class="token attr-name">[nzCheckedKeys]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultCheckedKeys<span class="token punctuation">"</span></span> <span class="token attr-name">(nzCheckBoxChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nzEvent($event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-tree</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rightSelect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>已选择 {{selectTreeNum}} 名成员<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rightSelect_content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let item of selectTreeValue;let i=index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode color">#1890ff</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span>\n              <span class="token attr-name">nzTheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{item.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span>\n              <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteUserNumber(item,i)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span> <span class="token attr-name">nzTheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n          <span class="token comment">&lt;!--  &lt;span style="float: right;" (click)="deleteUserNumber(item.key)">&lt;i nz-icon nzType="close" nzTheme="outline">&lt;/i>&lt;/span> --></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<h4 id="css">css<a class="anchor" href="#css">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 树组件 */</span>\n<span class="token selector"><span class="token class">.TreeSection</span></span> <span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.leftTree</span><span class="token punctuation">,</span>\n<span class="token class">.rightSelect</span></span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">px</span> solid <span class="token hexcode color">#eeeeee</span><span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.leftTree</span></span> <span class="token punctuation">{</span>\n  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.rightSelect</span></span> <span class="token punctuation">{</span>\n  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.leftTree</span> p<span class="token punctuation">,</span>\n<span class="token class">.rightSelect</span> p<span class="token punctuation">,</span>\n<span class="token class">.MemberList</span> p</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token unit">px</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">px</span> solid <span class="token hexcode color">#eeeeee</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.leftTree_content</span><span class="token punctuation">,</span>\n<span class="token class">.rightSelect_content</span></span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token unit">px</span><span class="token punctuation">;</span>\n  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>\n  <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-moz-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-ms-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.rightSelect_content</span> ul</span> <span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.rightSelect_content</span> ul li</span> <span class="token punctuation">{</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">30</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token selector"><span class="token pseudo-element">::ng-deep</span> <span class="token class">.ant-tree</span><span class="token class">.ant-tree-block-node</span> li span<span class="token class">.ant-tree-checkbox</span><span class="token combinator">+</span><span class="token class">.ant-tree-node-content-wrapper</span></span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6811\u5F62\u63A7\u4EF6\u529F\u80FD"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%9B%BE">实现的图：<a class="anchor" href="#%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%9B%BE">§</a></h4>\n<p><img src="../../pic/image-20210415160710543.png" alt="image-20210415160710543"></p>\n<h4 id="ts">ts<a class="anchor" href="#ts">§</a></h4>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> ResourceLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/compiler\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NzMessageService<span class="token punctuation">,</span> NzFormatEmitEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'ng-zorro-antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/router\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// moment插件</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">\'app-example\'</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">\'./example.component.html\'</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./example.component.css\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ExampleComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> router<span class="token operator">:</span> Router<span class="token punctuation">,</span> <span class="token keyword">private</span> message<span class="token operator">:</span> NzMessageService<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>\n  <span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  \n  <span class="token comment">// 树组件</span>\n  <span class="token comment">// 默认选中复选框</span>\n  defaultCheckedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token comment">// // 默认展开项</span>\n  defaultExpandedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'g0\'</span><span class="token punctuation">]</span>\n\n  <span class="token comment">// 删除选中成员</span>\n  <span class="token function">deleteUserNumber</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(item,index)</span>\n    <span class="token keyword">const</span> userIdList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment">// this.selectTreeValue = this.selectTreeValue.</span>\n    <span class="token comment">// if(item.userId)</span>\n    <span class="token comment">// this.selectTreeValue = this.selectTreeValue.filter(d => d.item.userId !== item.userId);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// console.log(value)</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>userId <span class="token operator">!==</span> item<span class="token punctuation">.</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          userIdList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>userId<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>key <span class="token operator">!==</span> item<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          userIdList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>key<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 默认选中</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>defaultCheckedKeys <span class="token operator">=</span> userIdList\n    <span class="token comment">// 默认展开全部</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>defaultExpandedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'g0\'</span><span class="token punctuation">]</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue<span class="token punctuation">.</span>length\n  <span class="token punctuation">}</span>\n  nodes <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      title<span class="token operator">:</span> <span class="token string">\'全部\'</span><span class="token punctuation">,</span>\n      key<span class="token operator">:</span> <span class="token string">\'g0\'</span><span class="token punctuation">,</span>\n      expanded<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          title<span class="token operator">:</span> <span class="token string">\'海外英文组\'</span><span class="token punctuation">,</span>\n          key<span class="token operator">:</span> <span class="token string">\'0-0\'</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'刘慧欣\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-1\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'黎海清\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-2\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'杨妙灵\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-3\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'罗淑萍\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-4\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'郭柯芯\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-0-5\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span>            \n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          checked<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          title<span class="token operator">:</span> <span class="token string">\'妙妙组\'</span><span class="token punctuation">,</span>\n          key<span class="token operator">:</span> <span class="token string">\'0-1\'</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'刘佩玲\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-1-1\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">\'测试赛\'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">\'0-1-2\'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          checked<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          title<span class="token operator">:</span> <span class="token string">\'小鱼组\'</span><span class="token punctuation">,</span>\n          key<span class="token operator">:</span> <span class="token string">\'0-2\'</span><span class="token punctuation">,</span>\n          isLeaf<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          checked<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// parentTreeValue;</span>\n  <span class="token comment">// childTreeValue = [];</span>\n  selectTreeValue<span class="token punctuation">;</span>\n  selectTreeNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//选中的数量</span>\n  <span class="token function">nzEvent</span><span class="token punctuation">(</span>event<span class="token operator">:</span> NzFormatEmitEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// let parentValue;</span>\n    <span class="token comment">// 只有选中才进行赋值</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>eventName <span class="token operator">===</span> <span class="token string">\'check\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// console.log(event)</span>\n      <span class="token comment">// console.log(event.keys)</span>\n      <span class="token keyword">const</span> SelectArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> event<span class="token punctuation">.</span>checkedKeys<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// console.log(item.key)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">// 第一级</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'level0:\', event.checkedKeys)</span>\n            <span class="token comment">//console.log(item.service.checkedNodeList)</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> item<span class="token punctuation">.</span>service<span class="token punctuation">.</span>checkedNodeList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token comment">// console.log(value.level)</span>\n              <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                SelectArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n                <span class="token comment">// console.log(SelectArr)</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment">// 第二级</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'level1:\', event.checkedKeys)</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> item<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token comment">// console.log(value.origin.children)</span>\n                  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> value<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    SelectArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n                  <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment">// 第三级</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'level2:\', event.checkedKeys)</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> item<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                SelectArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">// console.log(SelectArr)</span>\n      <span class="token comment">// 去重重组</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>SelectArr<span class="token punctuation">)</span><span class="token punctuation">]</span>\n      <span class="token comment">// this.selectTreeValue = SelectArr</span>\n      <span class="token comment">// console.log(this.selectTreeValue)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectTreeValue<span class="token punctuation">.</span>length\n      <span class="token comment">// console.log(this.selectTreeValue)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token string">\'06:00:00\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n</code></pre>\n<h4 id="html">html<a class="anchor" href="#html">§</a></h4>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode color">#ffffff</span><span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>树形控件antd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TreeSection<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">600</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leftTree<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>考核成员：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leftTree_content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-tree</span> <span class="token attr-name">[nzData]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nodes<span class="token punctuation">"</span></span> <span class="token attr-name">nzBlockNode</span> <span class="token attr-name">nzExpandAll</span> <span class="token attr-name">nzCheckable</span> <span class="token attr-name">nzMultiple</span> <span class="token attr-name">[nzCheckedKeys]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultCheckedKeys<span class="token punctuation">"</span></span> <span class="token attr-name">(nzCheckBoxChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nzEvent($event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-tree</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rightSelect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>已选择 {{selectTreeNum}} 名成员<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rightSelect_content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let item of selectTreeValue;let i=index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode color">#1890ff</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span>\n              <span class="token attr-name">nzTheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{item.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span>\n              <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteUserNumber(item,i)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span> <span class="token attr-name">nzTheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n          <span class="token comment">&lt;!--  &lt;span style="float: right;" (click)="deleteUserNumber(item.key)">&lt;i nz-icon nzType="close" nzTheme="outline">&lt;/i>&lt;/span> --></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<h4 id="css">css<a class="anchor" href="#css">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 树组件 */</span>\n<span class="token selector"><span class="token class">.TreeSection</span></span> <span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.leftTree</span><span class="token punctuation">,</span>\n<span class="token class">.rightSelect</span></span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">px</span> solid <span class="token hexcode color">#eeeeee</span><span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.leftTree</span></span> <span class="token punctuation">{</span>\n  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.rightSelect</span></span> <span class="token punctuation">{</span>\n  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.leftTree</span> p<span class="token punctuation">,</span>\n<span class="token class">.rightSelect</span> p<span class="token punctuation">,</span>\n<span class="token class">.MemberList</span> p</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token unit">px</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">px</span> solid <span class="token hexcode color">#eeeeee</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.leftTree_content</span><span class="token punctuation">,</span>\n<span class="token class">.rightSelect_content</span></span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token unit">px</span><span class="token punctuation">;</span>\n  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>\n  <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-moz-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-ms-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.rightSelect_content</span> ul</span> <span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.rightSelect_content</span> ul li</span> <span class="token punctuation">{</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">30</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token selector"><span class="token pseudo-element">::ng-deep</span> <span class="token class">.ant-tree</span><span class="token class">.ant-tree-block-node</span> li span<span class="token class">.ant-tree-checkbox</span><span class="token combinator">+</span><span class="token class">.ant-tree-node-content-wrapper</span></span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2020/12/20",
    'updated': null,
    'excerpt': "树形控件功能",
    'cover': "../../pic/image-20210415160710543.png",
    'categories': [
        "antd",
        "Angular"
    ],
    'tags': [
        "树形控件",
        "功能"
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
