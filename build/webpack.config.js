const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  // javascript 执行入口文件
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist')    
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      //从.js文件中提取出来的.css的文件名称
      filename: `css/[name]_[hash:8].css`,
    }),
  ]
}