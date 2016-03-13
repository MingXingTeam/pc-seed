// 本地解析替换路径
// npm install [-g] fis3-hook-amd
fis.hook('module', {
   baseUrl: '',
   paths: {}
});

var baseDir = '/static';

//会自动包裹成模块
// fis.match(baseDir + '/js/{*,**/*}.js', {
//   isMod: true // 设置 js/modules 下都是一些组件，组件建议都是匿名方式 define
//     // release: '/static/$0'
// });

fis.match('::package', {
  // npm install [-g] fis3-postpackager-loader
  // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
  postpackager: fis.plugin('loader', {
    resourceType: 'amd',
    useInlineMap: true // 资源映射表内嵌
  })
})

// 加 md5
fis.match('**/*.{js,css,png}', {
  useHash: true
});

//启用 fis-spriter-csssprites 插件
//只会处理 url 中带 ?__sprite 图片
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

//对 CSS 进行图片合并
fis.match(baseDir + '/css/{*,**/*}.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match(baseDir + '/js/{*,**/*}.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match(baseDir + '/css/{*,**/*}.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match(baseDir + '/images/{*,**/*}.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// You need install it.
// npm i fis-optimizer-html-minifier [-g]
//
fis.match('**/*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});

// 开发的时候不需要优化
// 命令行：fis3 release debug
fis.media('debug').match('**/*.{js,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
});

// fis3 release prod 产品发布，进行合并
fis.media('prod')
  .match(baseDir+ '/js/modules/*.js', {
    packTo: '/js/aio.js'
  });