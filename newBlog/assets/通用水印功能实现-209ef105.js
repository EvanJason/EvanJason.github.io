const t={title:"通用水印功能实现",categories:["水印"],tags:["水印","页面水印"],date:"2021-08-16",author:"深海如梦",excerpt:"新的水印功能实现"},n=`<h1>通用水印功能实现</h1>
<h2>方法</h2>
<pre><code class="language-typescript">//单独写一个ts.存放水印方法
let watermark: any = {};

let setWatermark = (str, option: any = {}) =&gt; {
	let id = 'linweilie';
	if (document.getElementById(id) !== null) {
		document.body.removeChild(document.getElementById(id));
	}

	//创建一个画布
	let can = document.createElement('canvas');
	//设置画布的长宽
	can.width = option.w || 380;
	can.height = option.h || 200;

	let cans = can.getContext('2d');
	//旋转角度
	cans.rotate((-40 * Math.PI) / 180);
	cans.font = 'lighter 18px 微软雅黑';
	//设置填充绘画的颜色、渐变或者模式
	cans.fillStyle = 'rgba(0, 0, 0, 0.15)';
	//设置文本内容的当前对齐方式
	cans.textAlign = 'left';
	//设置在绘制文本时使用的当前文本基线
	cans.textBaseline = 'middle';
	//在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
	cans.fillText(str, can.width / 64, can.height / 1);
	let div = document.createElement('div');
	div.id = id;
	div.style.pointerEvents = 'none';
	div.style.top = option.top || '100px';
	div.style.left = option.left || '180px';
	div.style.position = 'fixed';
	div.style.zIndex = '9999999999';
	div.style.transform = 'rotate(15deg)';
	div.style.width = option.width || document.documentElement.clientWidth + 'px';
	div.style.height = option.height || document.documentElement.clientHeight + 'px';
	div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
	document.body.appendChild(div);
	return id;
};

// 该方法只允许调用一次
watermark.set = (str, option) =&gt; {
	let id = setWatermark(str, option);
	setInterval(() =&gt; {
		if (document.getElementById(id) === null) {
			id = setWatermark(str, option);
		}
	}, 500);
	window.onresize = () =&gt; {
		setWatermark(str, option);
	};
};

export default watermark;
</code></pre>
<h2>使用</h2>
<pre><code class="language-typescript">//在该使用的地方使用
watermark.set('需要的水印文字', { w: 160, h: 128, top: '0px', left: '0px', width: '150%', height: '150%' });
</code></pre>
`;export{t as attributes,n as html};
