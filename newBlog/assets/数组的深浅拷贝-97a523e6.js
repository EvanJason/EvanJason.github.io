const r={title:"数组的深浅拷贝",categories:["深浅拷贝"],tags:["深浅拷贝"],author:"深海如梦",date:"2021-06-20",excerpt:"数组的深浅拷贝"},t=`<h1>数组的深浅拷贝</h1>
<pre><code class="language-typescript">const arr1 = ['1', '2', '3'];
// JSON.parse(JSON.stringify(obj)) 这个厉害，把setter与getter方法去除 , 这样就不会影响原先的对象
const arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0] = 4;
console.log(arr1, arr2); //arr1:  123   arr2:  423
</code></pre>
`;export{r as attributes,t as html};
