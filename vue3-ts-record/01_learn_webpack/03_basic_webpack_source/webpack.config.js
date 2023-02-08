const path = require('path')
// 引入 path 通过 resolve 方法获取路径并进行拼接
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    // filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // 正则表达式
        // 2. 完整的写法
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          "less-loader"
        ]
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
          filename: 'image/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     name: "font/[name]_[hash:6].[ext]"
        //   }
        // }
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      }
    ]
  }
}
