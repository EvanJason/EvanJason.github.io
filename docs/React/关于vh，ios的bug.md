---

title: 关于vh，ios的bug

categories:
  - vh
  - ios
tags:
  - vh
  - ios

date: "2023-08-30"

authors: lin

excerpt: 关于vh，ios的bug

---

# 关于vh，ios的bug


```typescript

100vh不要用，在iOS有bug，而且他们不会改，因为改了safari就会掉帧。

document.offsetHeight/clientHeight... 也尽量少用，会造成重绘和重流，也就是 onMount 获取 ref 后再渲染一次（DOM层的，react-developer-tool看不出来）,我们项目里有些 100vh 的样式，之后都会改掉（vw没问题）。

最好的解决方式是在最外层定好高度，减少子盒子的层级，多用<></>(<React.Fragment>)

在每层盒子用 h-full (height: 100%) 和 flex: none 搭配 flex: 1 1 0%; 把高度传递下去，内部可以自适应，唯一需要控制的变量是最外层的盒子高度，比如一个 Card 盒子，一个Modal 盒子等等。
```


> 一篇 vh (viewport-height) 在 iOS 的调研报告
>
> https://nicolas-hoizey.com/articles/2015/02/18/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers/
>
> 