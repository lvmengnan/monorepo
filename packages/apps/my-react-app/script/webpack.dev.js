const { merge } = require('webpack-merge');
const getBasicCfg = require('./webpack.base');
const path = require('path');

module.exports = merge(getBasicCfg(true), {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    compress: false,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '../public')
    },
    open: true
  }
})