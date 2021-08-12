import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "关于",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>关于</h1>\n<h3 id="%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D">自我介绍<a class="anchor" href="#%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D">§</a></h3>\n<ul>\n<li>\n<p>前端小白</p>\n</li>\n<li>\n<p>喜欢各种有趣科技型的事物，追各种番剧</p>\n</li>\n<li>\n<p>爱好广泛的养生佛系家里蹲青年</p>\n</li>\n<li>\n<p>记录技术，展示文字，生活杂谈</p>\n</li>\n<li>\n<p>努力努力再努力！</p>\n</li>\n<li>\n<p>CSDN博客：<a href="https://blog.csdn.net/wqssh21">https://blog.csdn.net/wqssh21</a></p>\n</li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5173\u4E8E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D">自我介绍<a class="anchor" href="#%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D">§</a></h3>\n<ul>\n<li>\n<p>前端小白</p>\n</li>\n<li>\n<p>喜欢各种有趣科技型的事物，追各种番剧</p>\n</li>\n<li>\n<p>爱好广泛的养生佛系家里蹲青年</p>\n</li>\n<li>\n<p>记录技术，展示文字，生活杂谈</p>\n</li>\n<li>\n<p>努力努力再努力！</p>\n</li>\n<li>\n<p>CSDN博客：<a href="https://blog.csdn.net/wqssh21">https://blog.csdn.net/wqssh21</a></p>\n</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D" }, "\u81EA\u6211\u4ECB\u7ECD")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-08-11T14:15:56.581Z",
    'updated': null,
    'excerpt': "自我介绍 - 前端小白 - 喜欢各种有趣科技型的事物，追各种番剧 - 爱好广泛的养生佛系家里蹲青年 - 记录技术，展示文字，生活杂谈 - 努力努力再努力！ - CSDN博客：https://blog.csdn.net/wqssh21",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/数组的深浅拷贝.md",
                "title": "数组的深浅拷贝",
                "link": "posts/数组的深浅拷贝.html",
                "date": "Fri Aug 20 2021 10:26:12 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "tags": [
                    "深浅拷贝"
                ],
                "excerpt": "数组的深浅拷贝"
            },
            {
                "pagePath": "posts/Vs Code 前端常用插件.md",
                "title": "前端常用插件",
                "link": "posts/Vs Code 前端常用插件.html",
                "date": "2021-08-11T14:15:56.581Z",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "vscode"
                ],
                "tags": [
                    "vscode",
                    "插件"
                ],
                "excerpt": "前端常用插件",
                "cover": "../pic/image-20210409094037510.png"
            },
            {
                "pagePath": "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.md",
                "title": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
                "link": "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.html",
                "date": "Thu May 27 2021 15:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "tags": [
                    "webpack",
                    "ie",
                    "defineProperty"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/antd表格穿梭框功能.html",
                "date": "Sat May 15 2021 13:46:09 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "穿梭框",
                    "表格"
                ],
                "excerpt": "angular-antd穿梭框功能实现"
            },
            {
                "pagePath": "posts/git的运用操作.md",
                "title": "git的运用操作",
                "link": "posts/git的运用操作.html",
                "date": "Sat Apr 10 2021 14:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "git"
                ],
                "tags": [
                    "git"
                ],
                "excerpt": "git的运用操作",
                "cover": "../pic/a145b3dc-f7ad-4797-afc3-1187e214a171.png"
            },
            {
                "pagePath": "posts/Echarts 配置和知识点.md",
                "title": "Echarts 配置和知识点",
                "link": "posts/Echarts 配置和知识点.html",
                "date": "Mon Dec 28 2020 10:00:21 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular",
                    "Echarts"
                ],
                "tags": [
                    "知识点",
                    "配置",
                    "Echarts"
                ],
                "excerpt": "Echarts 配置和知识点"
            },
            {
                "pagePath": "posts/树形控件功能实现.md",
                "title": "树形控件功能",
                "link": "posts/树形控件功能实现.html",
                "date": "Wed Dec 23 2020 09:45:45 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "树形控件",
                    "功能"
                ],
                "excerpt": "树形控件功能",
                "cover": "../pic/image-20210415160710543.png"
            },
            {
                "pagePath": "posts/angular项目 页面加水印.md",
                "title": "angular项目 页面加水印",
                "link": "posts/angular项目 页面加水印.html",
                "date": "Sun Dec 6 2020 20:25:12 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "水印",
                    "页面水印",
                    "Angular"
                ],
                "excerpt": "html 使用 <div style=\"position: fixed;top: 0;left: 0;\"> <div *ngFor=\"let item of watermarkList\" class=\"watermarkList\"> <div [ngStyle]=\"item.objStyle\"> {{item.txt}} </div> </div> </div> ts // 页面水印 watermarkL..."
            },
            {
                "pagePath": "posts/wangEditor富文本编辑器.md",
                "title": "wangEditor富文本编辑器",
                "link": "posts/wangEditor富文本编辑器.html",
                "date": "Mon Nov 23 2020 16:20:21 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "wangEditor",
                    "Angular",
                    "富文本"
                ],
                "tags": [
                    "wangEditor",
                    "富文本"
                ],
                "excerpt": "wangEditor富文本编辑器"
            },
            {
                "pagePath": "posts/angular 复制粘贴事件.md",
                "title": "angular 复制粘贴事件",
                "link": "posts/angular 复制粘贴事件.html",
                "date": "‎‎Fri Nov 20 2020 11:03:08 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular",
                    "ngx-clipboard"
                ],
                "tags": [
                    "antd",
                    "复制粘贴"
                ],
                "excerpt": "angular 复制粘贴事件"
            },
            {
                "pagePath": "posts/Angular 多类名条件判断.md",
                "title": "Angular 多类名条件判断",
                "link": "posts/Angular 多类名条件判断.html",
                "date": "‎Thu Oct 22 2020 14:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Angular 多类名条件判断"
            }
        ],
        "categories": [
            {
                "name": "Angular",
                "count": 7
            },
            {
                "name": "antd",
                "count": 2
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "ngx-clipboard",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "Angular",
                "count": 1
            },
            {
                "name": "defineProperty",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "ie",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "webpack",
                "count": 1
            },
            {
                "name": "功能",
                "count": 1
            },
            {
                "name": "复制粘贴",
                "count": 1
            },
            {
                "name": "多类名",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "条件判断",
                "count": 1
            },
            {
                "name": "树形控件",
                "count": 1
            },
            {
                "name": "水印",
                "count": 1
            },
            {
                "name": "深浅拷贝",
                "count": 1
            },
            {
                "name": "知识点",
                "count": 1
            },
            {
                "name": "穿梭框",
                "count": 1
            },
            {
                "name": "表格",
                "count": 1
            },
            {
                "name": "配置",
                "count": 1
            },
            {
                "name": "页面水印",
                "count": 1
            }
        ]
    }
};
