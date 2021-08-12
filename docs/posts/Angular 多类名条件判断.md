---
categories:
  - Angular
tags:
  - antd 
  - 条件判断
  - 多类名
date: ‎Thu Oct 22 2020 14:20:13 GMT+0800 (中国标准时间)
author: 深海如梦
excerpt: Angular 多类名条件判断
---



# Angular 多类名条件判断

```html
[ngClass]="{bg1: data.oneLtv >3,bg2: data.oneLtv >1 && data.oneLtv<=3,bg3: data.oneLtv >0.5 && data.oneLtv <=1,bg4: data.oneLtv >0 && data.oneLtv <=0.5}"
```

