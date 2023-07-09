const t={title:"Vue 动态绑定多个class 带上三元运算或其他条件",categories:["Vue"],tags:["Vue","条件判断","多类名"],date:"2020-06-24",author:"深海如梦",excerpt:"Vue 动态绑定多个class 带上三元运算或其他条件"},e=`<h1>Vue 动态绑定多个class 带上三元运算或其他条件</h1>
<h2>例子</h2>
<p><strong>设置第一条数据的样式为one</strong></p>
<pre><code class="language-html">&lt;li v-for=&quot;(item,index) in items&quot; :key=&quot;index&quot;&gt;
	&lt;span :class=&quot;index==0?'one':''&quot;&gt;{{index+1}}&lt;/span&gt;
&lt;/li&gt;
</code></pre>
<p><strong>设置样式并判断</strong></p>
<pre><code class="language-html">&lt;li v-for=&quot;(item,index) in items&quot; :key=&quot;index&quot;&gt;
	&lt;span :class=&quot;[index==0?'one':'','select-active':items.istrue]&quot;&gt;{{index+1}}&lt;/span&gt;
&lt;/li&gt;
</code></pre>
<h2>实现</h2>
<pre><code class="language-html">&lt;li v-for=&quot;(item,index) in items&quot; :key=&quot;index&quot;&gt;
	&lt;span :class=&quot;[index==0?'one':'',index==1?'two':'',index==2?'three':'']&quot;&gt;{{index+1}}&lt;/span&gt;
&lt;/li&gt;
</code></pre>
`;export{t as attributes,e as html};
