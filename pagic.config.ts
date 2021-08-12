// import { React } from 'https://deno.land/x/pagic@v1.4.0/mod.ts';

export default {

  srcDir: "docs",
  outDir: "public",
  theme: "blog",
  plugins: ["blog"],
  title: "深海如梦的作战实践基地",
  description: "前端技术讨论交流，知识杂谈，生活分享。",
  blog: {
    root: "/posts/",
    social: {
      github: "yourhug",
      email: "linkenmum@163.com",
      // twitter: 'xcatliu',
    },
  },
  nav: [
    {
      text: "首页",
      link: "/",
      icon: "czs-home-l",
    },
    {
      text: "分类",
      link: "/categories/",
      icon: "czs-category-l",
    },
    {
      text: "标签",
      link: "/tags/",
      icon: "czs-tag-l",
    },
    {
      text: "关于",
      link: "/about/",
      icon: "czs-about-l",
    },
    {
      text: "归档",
      link: "/archives/",
      icon: "czs-box-l",
    },
    {
      text: "友情链接",
      link: "/links/",
      icon: "czs-link-l",
    },
  ],
};
