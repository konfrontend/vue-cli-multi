const defaultConfig = require('./vue.config.js')
const merge = require('webpack-merge')

const config = merge(defaultConfig, {
  // outputDir: 'dist/loadster',
  pages: {
    index: {
      entry: 'src/Loadster/main.js',
      template: 'public/loadster/index.html',
      filename: 'index.html'
    }
  }
})

module.exports = config
