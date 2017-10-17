const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'public/dist');

const config = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    filename: 'client.js',
    path: DIST_PATH,
    publicPath: '/public/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([DIST_PATH]),
  ],
};

module.exports = config;
