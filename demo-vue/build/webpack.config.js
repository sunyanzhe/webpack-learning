const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextWebpackPlugin.extract({
              use: ['css-loader'],
              fallback: 'vue-style-loader'
            }),
            less: ExtractTextWebpackPlugin.extract({
              use: ['css-loader', 'less-loader'],
              fallback: 'vue-style-loader'
            }),
          }
        }
      },
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              ['@babel/preset-env']
            ]
          }
        } 
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            'css-loader',
            {
              loader:'postcss-loader',
              options:{
                plugins:[require('autoprefixer')]
              }
            }
          ],
          fallback: 'vue-style-loader'
        })
      },
      {
        test:/\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            'css-loader',
            {
              loader:'postcss-loader',
              options:{
                plugins:[require('autoprefixer')]
              }
            },
            'less-loader'
          ],
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['*', '.js', '.json', '.vue']
  },
  devServer: {
    port: 8080,
    hot: true,
    contentBase: '../dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new vueLoaderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new ExtractTextWebpackPlugin({
      filename: `css/[name]_[hash:8].css`,
      allChunks: true
    })
  ]
}