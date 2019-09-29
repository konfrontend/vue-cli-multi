const defaultConfig = require('./vue.config.js')
const merge = require('webpack-merge')

const config = merge(defaultConfig, {
  outputDir: 'dist/speedway',
  pages: {
    index: {
      entry: 'src/Speedway/main.js',
      template: 'public/speedway/index.html',
      filename: 'index.html'
    }
  }
})

module.exports = config
