const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src5/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist5')
  },
  // Execute `yarn run build --json --config 5_webpack.with_stats.config.js > dist5/stats.json`
  stats: 'verbose',
};
