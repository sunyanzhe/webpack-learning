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
    // chunkFilename: 'js/kk.js',
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
  // 设置webpack如何寻找模块对应文件
  resolve: {
    // 原路径映射
    alias: {
      '@': '../src',
      'react$': '/path/to/react.min.js'
    },
    // 采用第三方模块的那个版本按照顺序找到第一个符合条件的
    mainFields: ['browser', 'main'],
    // 在导入语句没带文件后缀时, webpack会自动带上后缀后,去尝试访问文件是否存在
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    hot: true,
    contentBase: '../dist'
  },
  // devtool: 'source-map',
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