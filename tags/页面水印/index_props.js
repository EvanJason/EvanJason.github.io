import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/页面水印/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/页面水印/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "页面水印",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/2020/angular项目 页面加水印.md",
                "title": "angular项目 页面加水印",
                "link": "posts/2020/angular项目 页面加水印.html",
                "date": "2020/09/06",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "水印",
                    "页面水印",
                    "Angular"
                ],
                "excerpt": "html 使用 <div style=\"position: fixed;top: 0;left: 0;\"> <div *ngFor=\"let item of watermarkList\" class=\"watermarkList\"> <div [ngStyle]=\"item.objStyle\"> {{item.txt}} </div> </div> </div> ts // 页面水印 watermarkL..."
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
