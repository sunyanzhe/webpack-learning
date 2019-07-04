const path = require('path');
//将import进去的css文件 也转换为css文件 而不是style
const ExtractTextPlugin = require("extract-text-webpack-plugin")
//自动生成index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//清理dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    //创建自己的本地服务器
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: "output management"})
    ]
};