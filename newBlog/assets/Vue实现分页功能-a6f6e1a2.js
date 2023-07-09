const t={title:"Vue实现分页功能",categories:["Vue"],tags:["Vue","分页"],date:"2020-07-03",author:"深海如梦",excerpt:"Vue实现分页功能"},u=`<h1>Vue实现分页功能</h1>
<h2>html</h2>
<pre><code class="language-html">&lt;div class=&quot;page&quot; v-if=&quot;pageCout &gt; 0&quot;&gt;
  &lt;ul class=&quot;epages&quot;&gt;
    &lt;li class=&quot;page-item&quot; v-if=&quot;curPage &gt; 1&quot;&gt;
      &lt;button href=&quot;#9lala&quot; @click=&quot;JumpTo(curPage -1)&quot;&gt;&amp;laquo;&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot; :class=&quot;{active: curPage == 1}&quot; @click=&quot;JumpTo(1)&quot;&gt;
      &lt;button&gt;1&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot; v-show=&quot;curPage  &gt; 5 &amp;&amp; pageCout &gt; 10&quot;&gt;
      &lt;strong&gt;...&lt;/strong&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot; :class=&quot;{active: curPage  == index+offset}&quot;
      v-for=&quot;(item,index) in middlePages&quot; @click=&quot;JumpTo(index+offset)&quot;&gt;
      &lt;button&gt;{{index+offset}}&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot; v-show=&quot;curPage  &lt; bigLimit &amp;&amp; pageCout  &gt; 10&quot;&gt;
      &lt;strong&gt;...&lt;/strong&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot; :class=&quot;{active: curPage  == pageCout }&quot;
      @click=&quot;JumpTo(pageCout )&quot; v-if=&quot;pageCout  &gt; 1&quot;&gt;
      &lt;button&gt;{{pageCout }}&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot; :class=&quot;{disabled: curPage  == pageCout }&quot;
      v-if=&quot;pageCout  &gt; 1 &amp;&amp;curPage  &lt; pageCout -1&quot;&gt;
      &lt;button href=&quot;#9lala&quot; @click=&quot;JumpTo(curPage +1)&quot;&gt;&amp;raquo;&lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;

&lt;/div&gt;
</code></pre>
<h2>js</h2>
<pre><code class="language-typescript">computed: {
  middlePages() {
    if (this.pageCout  &lt;= 2) {
      return 0;
    } else if (this.pageCout  &gt; 2 &amp;&amp; this.pageCout  &lt;= 10) {
      return this.pageCout  - 2;
    } else {
      return this.curPage   &gt; 999 ? 5 : 8;
    }
  },
  bigLimit() {
    return this.middlePages &gt; 5 ? this.pageCout  - 6 : this.pageCout  - 3;
  },
  offset() {
    if (this.curPage   &lt;= 5) {
      return 2;
    } else if (this.curPage   &gt;= this.bigLimit) {
      return this.bigLimit - 2;
    } else {
      return this.middlePages &gt; 5 ? this.curPage   - 3 : this.curPage   - 2;
    }
  }
}
</code></pre>
<h2>演示效果</h2>
<p><a href="https://willern.gitee.io/2020/07/03/20200703/show.gif"><img src="https://willern.gitee.io/2020/07/03/20200703/show.gif" alt="img"></a></p>
`;export{t as attributes,u as html};
