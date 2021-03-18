module.exports = {
  title: '细雨良田',
  description: 'Just playing',
  themeConfig: {
    // logo: '/public/assets/img/logo.png',
    sidebar: [
        {
          title: 'js',   // 必要的
          path: '/js/window/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          sidebarDepth: 1,    // 可选的, 默认值是 1
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
          children: [
            {
              title: 'window',
              path: '/js/window/',
            },
            {
                title: 'Array',
                path: '/js/array/',
            },
          ]
        },
        {
          title: 'vue',
          path: '/vue/',
          children: [ 
            {
              title: '3.0',
              path: '/vue/'
            }
          ],
           sidebarDepth: 2,    // 可选的, 默认值是 1
        },
        {
            title: 'node',
            path: '/node/',
            children: [ /* ... */ ],
            sidebarDepth: 3,    // 可选的, 默认值是 1
        },
      ],
    nav: [
        { 
            text: 'JS', 
            link: '/' ,
        },
        { text: 'question', link: '/guide/' },
        { text: 'Github', link: 'https://github.com/leiwgo/vuepress' },
      ]
  }
}