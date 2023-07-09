const e={title:"react性能优化",categories:["并发","promise"],tags:["并发","promise"],date:"2023-06-16",author:"深海如梦",excerpt:"react性能优化"},n=`<h1>react性能优化</h1>
<h2>prefetch</h2>
<h4>使用<code>preload</code>，<code>prefetch</code>,<code>dns-prefetch</code>等指定提早请求指定文件，或者根据状况，浏览器自行决定是否提早<code>dns</code>预解析或者按需请求某些资源。</h4>
<ul>
<li>这里也能够<code>webpack4</code>插件实现,目前京东在使用这个方案～</li>
</ul>
<pre><code class="language-typescript">const PreloadWebpackPlugin = require('preload-webpack-plugin')
 new PreloadWebpackPlugin({
     rel: 'preload',
     as(entry) {
         if (/\\.css$/.test(entry)) return 'style';
         if (/\\.woff$/.test(entry)) return 'font';
         if (/\\.png$/.test(entry)) return 'image';
         return 'script';
     },
     include:'allChunks'
     //include: ['app']
 }),
</code></pre>
`;export{e as attributes,n as html};
