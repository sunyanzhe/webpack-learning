const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  // javascript 执行入口文件
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'js/[name].[hash:8].js',
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
  devServer: {
    port: 3000,
    hot: true,
    contentBase: '../dist'
  },
  devtool: 'source-map',
  plugins:[
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      //从.js文件中提取出来的.css的文件名称
      filename: `css/[name]_[hash:8].css`,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    })
  ]
}