const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // Cấu hình của Webpack
  // ...

  // Thêm plugin để cấu hình polyfill cho module 'crypto'
  plugins: [
    new NodePolyfillPlugin()
  ]
};
