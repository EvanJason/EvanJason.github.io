---
title: 多列表的jq展开收起效果

categories:
  - Jquery

tags:
  - Jquery 

date: "2019-12-06"

author: 深海如梦

excerpt: 在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。

---



# 多列表的jq展开收起效果

###### 在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。

**效果图如下：**

![效果图](/images/2019120610061415.png)


**jq代码：**

```javascript
$(".zimu_con_list dl").each(function (i, item) {
    // console.log($(item).find("dt").html())
    var defHeight = 115;//默认高度
    var infoHeight = $(item).find("dd").height();
    if (infoHeight > defHeight) {
    // 设置需求所在位置的默认高度,隐藏超出部分
    $(item).find("dd").css('height', defHeight + 'px');
    //加按钮
    $(item).append('<p class="more"><span>展开</span><i class="sprite"></i></p>');
    }
    // 点击按钮
    $(item).find(".more").click(function () {
    var curHeight = $(item).find("dd").height();
    // console.log(curHeight)
    if (curHeight == defHeight) {
    //这里看看能不能有其他的办法加个过渡效果，用animate()有错误
    $(item).find("dd").addClass("auto");
    $(item).find(".more").html('<span>收起</span><i class="sprite"></i>');
    $(item).find(".more i.sprite").css("transform", "rotate(-180deg)")
    } else {
    $(item).find("dd").removeClass("auto");
    $(item).find(".more").html('<span>展开</span><i class="sprite"></i>');
    };
    event.stopPropagation();
    });
})
```