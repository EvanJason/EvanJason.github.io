const n={title:"webpack性能优化，打包优化(craco.config.ts)",categories:["React","Webpack","性能优化","craco"],tags:["React","Webpack","性能优化","craco"],date:"2022-10-20",author:"深海如梦",excerpt:"webpack性能优化，打包优化(craco.config.ts)"},e=`<h1>webpack性能优化，打包优化</h1>
<h2>插件</h2>
<p>webpack-bundle-analyzer 打包进度条</p>
<p>webpackbar 分析打包工具</p>
<h2>craco.config.js</h2>
<pre><code class="language-typescript">const CracoLessPlugin = require('craco-less');
const WebpackBar = require('webpackbar'); //打包进度条
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //分析打包工具
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#5BB7E1' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    plugins: [
      /* 进度条展示 */
      new WebpackBar({
        profile: true,
        color: '#5BB7E1'
      }),
      /* 可以看到打包出来的所有文件所占的大小 */
      // new BundleAnalyzerPlugin({
      //   analyzerMode: &quot;server&quot;,
      //   analyzerHost: &quot;127.1.1.1&quot;,
      //   analyzerPort: 6666,
      //   openAnalyzer: true, // 构建完打开浏览器
      //   reportFilename: path.resolve(__dirname, \`analyzer/index.html\`),
      // }),
    ],
  }
};
</code></pre>
`;export{n as attributes,e as html};
