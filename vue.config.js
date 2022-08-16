module.exports = {
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
