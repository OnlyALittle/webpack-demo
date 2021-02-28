const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (p) => path.resolve(__dirname, './src', p)


module.exports = {
    entry: resolve('index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',
            template: __dirname + '/public/index.html',
            chunks: 'main.bundle.js'
        })
    ]
}