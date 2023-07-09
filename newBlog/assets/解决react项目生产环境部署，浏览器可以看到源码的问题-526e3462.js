const e={title:"解决react项目生产环境部署，浏览器可以看到源码的问题",categories:["React"],tags:["React","打包"],date:"2021-11-21",author:"深海如梦",excerpt:"React生产环境还有源代码的问题解决,并记录"},t=`<h1>解决 react 项目生产环境部署，浏览器可以看到源码的问题</h1>
<p>React 生产环境还有源代码的问题解决</p>
<h2>前言</h2>
<p>create-react-app 创建的 react 项目，打包生成后仍有源代码，这是因为 source-map 的问题</p>
<h2>解决方案一</h2>
<p>1.在项目根目录下新建文件.env.production，内容:</p>
<pre><code>GENERATE_SOURCEMAP=false
</code></pre>
<p>2.重新打包即可</p>
<h2>解决方案二</h2>
<p>1.寻找配置文件 webpack.config.js，代码如下</p>
<pre><code>const shouldUseSourceMap = ({}).GENERATE_SOURCEMAP !== 'false';
</code></pre>
<p>2.直接修改这行代码，写成配置（只针对于生产环境）</p>
<p>3.打包重新运行</p>
<h2>更多</h2>
<p>更多参考 https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/</p>
`;export{e as attributes,t as html};
