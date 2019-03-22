const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

var config = {
  mode: 'development', 
  entry: { main: './src/index.js',},   // 重定义入口文件。写于此，使package.json的命令简化
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    chunkFilename: 'chunks/[name].chunk.js', 
  },
  module: {
    rules: [
      {  // test: 处理什么类型的文件， use：用什么手段来处理 include：处理包含的内容 exclude：不处理这一块内容
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      }, 
       { // extract默认行为先使用css-loader编译css，然后css导出到规定的文件上。若中间出错，则使用style-loader
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader',/*  options: {modules: true, sourceMap: true, importLoader: 2} */ ] 
      },
  
    ],
  },
  plugins: [
     new MiniCssExtractPlugin({ // css 分离
       filename: 'css/[name].[hash:8].css',
       chunkFilename: '[id].[hash:8].css',
       cache: true,
       inject: true,
       hash: false,
       xhtml: true,
       minify: {
         removeComments: true, 
         collapseWhitespace: false, 
         minifyCSS: true, 
         minifyJS: true, 
         removeScriptTypeAttributes: true, // type="text/javascript"从script标签中删除。其他type属性值保持不变
         removeStyleLinkTypeAttributes: true, // 删除type="text/css"从style和link标签。其他type属性值保持不变 
       },
     }),
     new HtmlWebpackPlugin({  // html 分离  (index.html是一级入口，自动注入)
       template: __dirname + '/src/index.html',
       filename: 'index.html'
     }),
     new CleanWebpackPlugin('dist', {}) // 每次编译前都会清空dist

   ]
}

module.exports = config