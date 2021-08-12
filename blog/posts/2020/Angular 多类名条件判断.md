---
categories:
  - Angular
tags:
  - antd 
  - 条件判断
  - 多类名
date: 2020/10/22
author: 深海如梦
excerpt: Angular 多类名条件判断
---



# Angular 多类名条件判断

```html
[ngClass]="{bg1: data.oneLtv >3,bg2: data.oneLtv >1 && data.oneLtv<=3,bg3: data.oneLtv >0.5 && data.oneLtv <=1,bg4: data.oneLtv >0 && data.oneLtv <=0.5}"
```

