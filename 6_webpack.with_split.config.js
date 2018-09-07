const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    entry1: './src6/entry1.js',
    entry2: './src6/entry2.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist6')
  },
  optimization: {
    splitChunks: false
  }
};
