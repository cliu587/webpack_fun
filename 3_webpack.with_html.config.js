const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src3/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist3')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
