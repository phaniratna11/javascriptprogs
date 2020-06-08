const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'personbundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ui'
  },
  mode: 'development'
};