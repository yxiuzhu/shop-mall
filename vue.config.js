module.exports = {
  // 删除打包之后的.map文件(用于记录代码错在哪一行)  app.16fdd6c1.js.map  
  productionSourceMap:false,
  // 关闭eslint语法检查
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: {'^/api': ''},
      }
    }
  }
}
