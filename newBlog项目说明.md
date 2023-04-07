# newBlog项目说明

## md文件头部



`必须携带，不然没有相应页面!!!!!!`



> \---
>
> categories:  （分类）
>
>  \- 日常生活
>
>  \- 年终总结
>
> 
>
> tags:   （标签）
>
>  \- 日常生活
>
>  \- 年终总结
>
> 
>
> date: 日期（2021-02-16）
>
> 
>
> author: 作者（深海如梦）
>
> 
>
> excerpt:  填写摘要（例如：2020年总结 + 新的一年目标和规划）
>
> 
>
> \---
>
> 
>
> `括号内容记得删除`





## 更新

#### MdFolder 

保存md文件的目录



#### images 

md文件的图片地址

打包好后，需要和放在dist同级目录





在MdFolder文件夹中，添加要发布的md文件，修改好后



到src\global.ts 中手动添加刚添加的md文件名



然后yarn build 打包



到`D:\React_Blob\site`下



替换`newBlog`文件夹



替换`images`文件夹



把`dist`的内容放进`newBlog`文件夹中



然后 push到github 就完成



https://evanjason.github.io/newBlog/



