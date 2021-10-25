
module.exports = {
  title: '城南花已开',
  themeConfig: {
    logo: '/flowers.jpg',  // 左上角logo
    lastUpdated: 'Last Updated', // 最后一次更新时间
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '技术文档', link: '/bar/' },
      {text: 'vue项目各文件夹解析', link: '/guide/' },    
    ],
    sidebar: {
      '/bar/':[
        {
          title: 'Vue 组件',
          path: '/bar/',
          collapsable: false,
          sidebarDepth: 0,
          children:[
            ['/bar/css','css玩法 css'],
            ['/bar/compare','compare less和sass'],
            ['/bar/elementUi','elementUi组件解析']
          ]
        }
      ],
      '/guide/':[
        {
          title:'vue文件夹',
          path:'/guide/',
          collapsable:false,
          sidebarDepth: 0,
          children:[
            ['/guide/axios','封装axios'],
            ['/guide/router','路由配置']
          ]
        }
      ]
    }, // 侧边栏配置
  }
};