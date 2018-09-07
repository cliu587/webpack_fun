const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src7/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist7')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
