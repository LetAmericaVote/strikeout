require('dotenv').config();

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'CONTENTFUL_SPACE': JSON.stringify(process.env.CONTENTFUL_SPACE),
        'CONTENTFUL_ACCESS_TOKEN': JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
      },
    }),
  ],
});

module.exports = config;
