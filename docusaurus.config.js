// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '深海如梦',
  tagline: '深海如梦的博客',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://evanjason.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'evanjason.github.io', // Usually your repo name.
  organizationName: 'evanjason', // github账户名
  deploymentBranch: 'gh-pages', // 部署到的分支名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    // [
    //   '@docusaurus/plugin-content-blog',
    //   {
    //     path: 'blog',
    //     editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
    //     `https://github.com/evanjason/evanjason.github.io/edit/main/${blogDirPath}/${blogPath}`,
    //     editLocalizedFiles: false,
    //     blogDescription: '深海如梦的博客',
    //     blogSidebarCount: 10,
    //     blogSidebarTitle: 'Blogs',
    //     postsPerPage: 10,
    //     showReadingTime: true,
    //     readingTime: ({ content, frontMatter, defaultReadingTime }) =>
    //     defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
    //     feedOptions: {
    //       type: 'all',
    //       title: '深海如梦',
    //       copyright: `Copyright © ${new Date().getFullYear()} 深海如梦 Built with Docusaurus.`,
    //     },
    //   },
    // ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/evanjason/evanjason.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/evanjason/evanjason.github.io/tree/main/',
          blogSidebarTitle: '近期文章',
          blogSidebarCount: 'ALL',
          blogTitle: '深海如梦',
          blogDescription: '深海如梦的小站',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // docs: {
      //   sidebar: {
      //     hideable: false
      //   }
      // },
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/evanjason/evanjason.github.io">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      // Replace with your project's social card
      image: 'img/blog.jpg',
      navbar: {
        title: '深海如梦的博客',
        logo: {
          alt: '深海如梦',
          src: 'img/logo.png',
        },
        // style: 'dark',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '文档',
          },
          // {
          //   label: '面试',
          //   position: 'right',
          //   to: '/docs/tags/interview'
          // },
          // {
          //   label: '博客',
          //   position: 'right',
          //   to: 'blog',
          // },
          {
            label: '项目',
            position: 'right',
            items: [
              {
                label: "9lala游戏网站",
                to: "https://evanjason.github.io/9lala/",
              },
              {
                label: "项目管理系统",
                to: "https://evanjason.github.io/management/",
              },
              {
                label: "react后台管理系统",
                to: "https://evanjason.github.io/lcarSystem/",
              },
            ],
          },
          // {
          //   label: "日常生活",
          //   position: 'right',
          //   to: "dailyLife",
          // },
          // {
          //   label: '工具',
          //   position: 'right',
          //   to: 'tools'
          // },
          // {
          //   label: "归类",
          //   position: "right",
          //   to: "menuClassify",
          // },
          {
            href: 'https://github.com/evanjason',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search', //需要配置algolia
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: '框架手册',
      //       items: [
      //         {
      //           label: 'Ant Design',
      //           to: 'https://ant-design.gitee.io/docs/react/introduce-cn',
      //         },
      //       ],
      //     },
      //     {
      //       title: '项目',
      //       items: [
      //         {
      //           label: 'vue网站demo',
      //           href: 'https://evanjason.github.io/9lala/',
      //         },
      //         {
      //           label: 'react项目demo',
      //           href: 'https://evanjason.github.io/lcarSystem/',
      //         },
      //       ],
      //     },
      //     {
      //       title: '友情链接',
      //       items: [
      //         {
      //           label: '旧技术博客',
      //           to: 'https://willern.gitee.io/',
      //         },
      //         {
      //           label: 'docusaurus',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      // colorMode: {
      //   respectPrefersColorScheme: true
      // },
      algolia: { //关于全局搜索需要配置的东西
        // The Application ID provided by Algolia
        appId: '2ZZWGAZ9F1',

        // (Search-Only API Key)
        apiKey: 'fd0d0d8ab8affd2faf0d8550b5dbd8ea',
        // 索引名字
        indexName: 'evanjson_oscean',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'typescript',
      },
    }),
};

module.exports = config;
