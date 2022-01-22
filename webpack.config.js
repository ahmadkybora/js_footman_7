var path = require('path');

module.exports = {
  entry: './FOOTMAN/main/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};