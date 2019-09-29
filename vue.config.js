const path = require('path')

module.exports = {
  assetsDir: `${process.env.APP_NAME}/assets`,
  indexPath: `${process.env.APP_NAME}/index.html`,
  publicPath: `/${process.env.APP_NAME}/`,
  devServer: {
    port: 8082
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@cm': path.resolve(__dirname, 'src/Common/'),
        '@ls': path.resolve(__dirname, 'src/Loadster/'),
        '@sp': path.resolve(__dirname, 'src/Speedway/')
      }
    }
  }
}
