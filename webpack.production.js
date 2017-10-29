const webpack = require('webpack');
const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common.js');

const config = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'CONTENTFUL_SPACE': JSON.stringify(process.env.CONTENTFUL_SPACE),
        'CONTENTFUL_ACCESS_TOKEN': JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
      },
    }),
    new MinifyPlugin(),
    new CompressionPlugin({
      test: /\.(js|css)$/,
      algorithm: 'gzip',
    }),
  ],
});

module.exports = config;
