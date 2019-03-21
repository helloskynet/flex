const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js', // 入口
  output: {
    path: path.resolve(__dirname, './dist'), // 值必须为绝对路径
    filename: 'index.js', // 输出文件名 默认为 main.js
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      "@": path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [{
      test: /\.scss/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.css/,
      use: [
        'vue-style-loader',
        'css-loader',
      ]
    }, {
      test: /\.vue$/,
      use: ['vue-loader'],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 输出
      template: './index.html', // 模板位置 
    }),
    new VueLoaderPlugin(),
  ]
}
