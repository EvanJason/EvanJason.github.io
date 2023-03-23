---
categories:
  - 前端

tags:
  - 前端
  - 兼容性
  - css

date: 2021-01-21

author: 深海如梦

excerpt:  总结了在项目设计中遇到的兼容性问题，在此整理出来，以备不时之需。

---



# 解决网站网页html css兼容性问题

 总结了在项目设计中遇到的兼容性问题，在此整理出来，以备不时之需。

### 解决ie8 css :nth-child(4n) 不兼容问题主要是利用硬方法

```css
第一种：利用first-child,该方法在ie可以使用
.huo_game_ ul li:first-child+li+li+li,
.huo_game_ ul li:first-child+li+li+li+li+li+li+li,
.huo_game_ ul li:first-child+li+li+li+li+li+li+li+li+li+li+li {
  margin-right: 0;
}
//还有一种方法就是利用jq的nth-child
$(".huo_game_ ul li:nth-child(4n)").css("margin-right","0")
```

### 解决ie7的高度丢失

*padding 或者 _paddding
*height _height
*margin _margin
*width _width

### CSS -webkit-box-orient: vertical 属性编译后丢失问题

解决方法

```css
/* autoprefixer: ignore next */
-webkit-box-orient: vertical;
```

### 高斯模糊

```css
filter: url(blur.svg#blur); /* FireFox, Chrome, Opera */
-webkit-filter: blur(1px); /* Chrome, Opera */
-moz-filter: blur(1px);
-ms-filter: blur(1px);  
filter: blur(1px);
/* IE6~IE9 */
filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=1, MakeShadow=false);

/*知识点*/
filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='x', MakeShadow='x', ShadowOpacity='x')
```

- PixelRadius，设置对象的模糊半径，1~100数值。
- MakeShadow，设置对象是否投影，布尔值，true和false
- ShadowOpacity，设置对象投影不透明度，0.0~1.0，假如MakeShadow为false那么该值无效。

### rgba兼容

**ie8及以下版本**

```css
background: rgba(0, 0, 0, .4);
filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#66000000, endcolorstr=#66000000);
```

这个颜色“#66000000”是由两部分组成的。
第一部是#号后面的66。是rgba透明度0.4的IEfilter值。从0.1到0.9每个数字对应一个IEfilter值。对应关系如下：

[![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png)](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png)

img

即：alpha*255得到的值再转换为16进制即可。

第二部分是7f后面的六位 是六进制的颜色值，跟rgb函数中的取值相同，比如rgb(255,255,255)对应#ffffff。

### box-shadow 兼容

**ie8及以下版本**

```css
-moz-box-shadow:3px 5px 5px #000;
-webkit-box-shadow:3px 5px 5px #000;
box-shadow:3px 5px 5px #000;

filter: progid:DXImageTransform.Microsoft.Shadow(color=gray, Direction=125, Strength=9);
```

strength是阴影大小，direction是阴影方位，单位为度，可以为负数，color是阴影颜色 （尽量使用数字）
使用IE滤镜实现盒子阴影的盒子必须是行元素或以行元素显示（block或inline-block;）

### filter界面滤镜

在ie中 `filter` 分为静态滤镜(Visual Filters)和过渡转场(Transitions Reference)，前者是的效果可以设置元素的不透明度、渐变、模糊、对比度、明度等这些，后者注重的ie的动画效果。

```css
.test{
    filter:progid:DXImageTransform.Microsoft.    /*.后面都是紧跟着各种滤镜和转场函数*/
}

/*如：模糊滤镜*/
.blur{
    filter:progid:DXImageTransform.Microsoft.Blur()    /*.函数的开头第一个字母必须大写，括号()里面的滤镜的各种值*/
}
```

一般常用Blur,Shadow,Gradient,对应，filter:blur(),box-shadow,rgba();

### 圆角border-radius兼容

需要下载PIE.htc
然后css中

```css
/*关键属性设置 需要把路径设置好*/
behavior: url(PIE.htc);
```