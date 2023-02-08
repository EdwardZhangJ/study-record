const path = require('path')
// 引入 path 通过 resolve 方法获取路径并进行拼接
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // 正则表达式
        // 2. 完整的写法
        use: [
          // {loader: 'css-loader'}
          'style-loader',
          'css-loader',
          'postcss-loader'
          // {
          //   loader: 'postcss-loader',
          //   options: [
          //     postcssOptions: {
          //       plugins:[
          //         require('autoprefixer')
          //       ]
          //     }
          //   ]
          // }
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
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'image/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024
          }
        }
      }
    ]
  }
}
