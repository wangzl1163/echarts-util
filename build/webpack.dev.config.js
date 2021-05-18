const {merge} = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
   devtool: 'source-map',
   mode: 'production',
   output: {
      filename: 'echarts-util.js',
      chunkFilename: '[name].chunk.js',
      sourceMapFilename: 'echarts-util.map'
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env': {
            NODE_ENV: JSON.stringify('development')
         }
      })
   ],
   optimization: {
      minimize: false
   }
})