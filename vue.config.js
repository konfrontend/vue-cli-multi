const path = require('path')

console.log(process.env.INDEX_PATH, process.env.BASE_URL)

module.exports = {
  assetsDir: 'assets',
  indexPath: process.env.INDEX_PATH,
  publicPath: process.env.BASE_URL,
  devServer: {
    port: 8082
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
