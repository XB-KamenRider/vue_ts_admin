/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/test/' : '/',
  outputDir: 'dist',
  assetsDir: 'dist',
  indexPath: 'index.html',
  // 配置命令行输出异常 Type: boolean | 'warning' | 'default' | 'error'
  lintOnSave: process.env.NODE_ENV === 'production' ? false : 'default',
  productionSourceMap: process.env.NODE_ENV === 'production' ? true : false,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve('src'));
  },
  pluginOptions: {
    // 配置less 全局变量
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/styles/variables.less')]
    }
  },
  devServer: {
    // 配置浏览器输出异常
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
