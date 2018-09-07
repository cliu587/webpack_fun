const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src2/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist2')
  }
};
