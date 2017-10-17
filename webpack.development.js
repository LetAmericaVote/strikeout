const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
  ],
});

module.exports = config;
