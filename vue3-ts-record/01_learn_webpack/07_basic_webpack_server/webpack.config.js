const path = require('path')
// 引入 path 通过 resolve 方法获取路径并进行拼接

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'node',
  // 设置模式
  // development 开发阶段， 会设置 development
  // production 准备打包上线阶段 设置 production
  mode: 'development',
  // 设置 source-map 建立js 映射文件，方便调试代码和错误
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        // 2. 完整的写法
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // {
      //   test: /\.(less|css)$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     "less-loader"
      //   ]
      // }
      {
        test: /\.(jp?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'image/[name]_[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024,
          },
        },
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     name: "font/[name]_[hash:6].[ext]"
        //   }
        // }
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]',
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       // plugins: [
      //       //   "@babel/plugin-transform-arrow-functions",
      //       //   "@babel/plugin-transform-block-scoping"
      //       // ]
      //       presets: ['@babel/preset-env'],
      //     },
      //   },
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    // 一个个插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          // to: '"./"',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new VueLoaderPlugin(),
  ],
}
