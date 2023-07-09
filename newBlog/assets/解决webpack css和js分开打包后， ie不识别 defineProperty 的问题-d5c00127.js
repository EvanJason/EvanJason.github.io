const e={title:"解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",categories:["webpack"],tags:["webpack"],author:"深海如梦",date:"2021-05-27",excerpt:"解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"},r=`<h1>解决webpack css和js分开打包后， ie不识别 defineProperty 的问题</h1>
<pre><code class="language-html">&lt;!-- 直接放在html中 --&gt;
&lt;!-- 不用安装npm i object-defineproperty-ie8 直接复制改npm插件里的源码，如果出现问题了，再去看下最新版本的object-defineproperty-ie8 --&gt; 
&lt;script&gt;
    var origDefineProperty = Object.defineProperty;

    var arePropertyDescriptorsSupported = function () {
      var obj = {};
      try {
        origDefineProperty(obj, &quot;x&quot;, {
          enumerable: false,
          value: obj
        });
        for (var _ in obj) {
          return false;
        }
        return obj.x === obj;
      } catch (e) {
        /* this is IE 8. */
        return false;
      }
    };
    var supportsDescriptors =
      origDefineProperty &amp;&amp; arePropertyDescriptorsSupported();

    if (!supportsDescriptors) {
      Object.defineProperty = function (a, b, c) {
        //IE8支持修改元素节点的属性
        if (origDefineProperty &amp;&amp; a.nodeType == 1) {
          return origDefineProperty(a, b, c);
        } else {
          a[b] = c.value || (c.get &amp;&amp; c.get());
        }
      };
    }
  &lt;/script&gt;
</code></pre>
`;export{e as attributes,r as html};
