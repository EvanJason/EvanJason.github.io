---
categories:
  - Angular
tags:
  - 水印
  - 页面水印  
  - Angular
date: 2020/09/06
author: 深海如梦
---

# angular项目 页面加水印

#### html 使用

```html
<div style="position: fixed;top: 0;left: 0;">
  <div *ngFor="let item of watermarkList" class="watermarkList">
      <div [ngStyle]="item.objStyle">
          {{item.txt}}
      </div>
  </div>
</div>
```

#### ts

```typescript
  // 页面水印
  watermarkList = [];
  watermark(settings) {
    //默认设置

    // watermark_x_space: 150,//水印x轴间隔
    // watermark_y_space: 100,//水印y轴间隔
    // watermark_width: 300,//水印宽度
    // watermark_height: 100,//水印长度
    let defaultSettings = {
      watermark_txt: "text",
      watermark_x: 20,//水印起始位置x轴坐标
      watermark_y: 20,//水印起始位置Y轴坐标
      watermark_rows: 100,//水印行数
      watermark_cols: 100,//水印列数
      watermark_color: '#000000',//水印字体颜色
      watermark_alpha: 0.08,//水印透明度
      watermark_fontsize: '18px',//水印字体大小
      watermark_font: '微软雅黑',//水印字体
      watermark_angle: 45,//水印倾斜度数
      watermark_x_space: 10,//水印x轴间隔
      watermark_y_space: 60,//水印y轴间隔
      watermark_width: 130,//水印宽度
      watermark_height: 60,//水印长度
    };
    //采用配置项替换默认值，作用类似jquery.extend
    if (arguments.length === 1 && typeof arguments[0] === "object") {
      let src = arguments[0] || {};
      for (let key in src) {
        if (src[key] && defaultSettings[key] && src[key] === defaultSettings[key])
          continue;
        else if (src[key])
          defaultSettings[key] = src[key];
      }
    }

    let resList = [];
    // //获取页面最大宽度
    // let page_width = Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth);
    // //获取页面最大长度
    // let page_height = Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight);
    let page_width = document.body.offsetWidth + 1000;
    let page_height = document.body.offsetHeight + 1000;
    // console.log(page_width,page_height)

    //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (defaultSettings.watermark_cols === 0 ||  (defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1) > page_width)) {
      defaultSettings.watermark_cols = (page_width - defaultSettings.watermark_x  + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space);
      defaultSettings.watermark_x_space = (page_width  - defaultSettings.watermark_x  - defaultSettings.watermark_width  * defaultSettings.watermark_cols)  / (defaultSettings.watermark_cols - 1);
    }
    //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (defaultSettings.watermark_rows == 0 ||
      (defaultSettings.watermark_y  + defaultSettings.watermark_height * defaultSettings.watermark_rows  + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1))  > page_height) {
      defaultSettings.watermark_rows =  (defaultSettings.watermark_y_space  + page_height - defaultSettings.watermark_y)  / (defaultSettings.watermark_height + defaultSettings.watermark_y_space);
      defaultSettings.watermark_y_space =  (page_height  - defaultSettings.watermark_y  - defaultSettings.watermark_height  * defaultSettings.watermark_rows)  / (defaultSettings.watermark_rows - 1);
    }
    let x;
    let y;
    for (let i = 0; i < defaultSettings.watermark_rows; i++) {
      y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
      for (let j = 0; j < defaultSettings.watermark_cols; j++) {
        x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
        // 水印对象和样式
        let mask_div = {
          style: "",
          txt: "",
        };
        mask_div.txt = defaultSettings.watermark_txt;
        // console.log(j);
        //设置水印div倾斜显示
        mask_div.style = JSON.stringify({
          'pointer-events': 'none',
          '-webkit-transform': 'rotate(-' + defaultSettings.watermark_angle + 'deg)',
          '-moz-transform': 'rotate(-' + defaultSettings.watermark_angle + 'deg)',
          '-ms-transform': 'rotate(-' + defaultSettings.watermark_angle + 'deg)',
          '-o-transform': 'rotate(-' + defaultSettings.watermark_angle + 'deg)',
          'transform': 'rotate(-' + defaultSettings.watermark_angle + 'deg)',
          'position': 'absolute',
          'left': x + 'px',
          'top': y + 'px',
          'overflow': 'hidden',
          'z-index': '9',
          'opacity': defaultSettings.watermark_alpha,
          'font-size': defaultSettings.watermark_fontsize,
          'font-family': defaultSettings.watermark_font,
          'color': defaultSettings.watermark_color,
          'text-align': 'left',
          'width': defaultSettings.watermark_width + 'px',
          'height': defaultSettings.watermark_height + 'px',
          'display': 'block',
        });
        resList = resList.concat(mask_div);
      }
    }
    return resList;
  }
```



#### css

```css
.watermark{
  pointer-events:none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  -webkit-transform: rotate(18deg) translate3d(50px,-200px,0);
  -moz-transform: rotate(18deg) translate3d(50px,-200px,0);
  -ms-transform: rotate(18deg) translate3d(50px,-200px,0);
  -o-transform: rotate(18deg) translate3d(50px,-200px,0);
  transform: rotate(18deg) translate3d(50px,-200px,0);
}
```



#### ngOnInit()

```typescript
//初始化
    setTimeout(() => {
      setInterval(()=>{
        let text1 = { watermark_txt: '测试的字体', watermark_fontsize: '16px'};
        this.watermarkList = this.watermark(text1);
        for(let item of this.watermarkList){
          let style = JSON.parse(item.style);
          // json字符串转换为json对象，因为ngStyle只支持对象
          item.objStyle = style;
        }
      },1000)
    }, 1000);
```



