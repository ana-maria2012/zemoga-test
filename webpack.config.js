const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js']
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks:2
    }
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
  })],
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test:/\.css$/,
          use:['style-loader','css-loader']
        }
    ]
  }
}
