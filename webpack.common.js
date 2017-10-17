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
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          mimetype: 'application/font-[ext]',
          name: './fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([DIST_PATH]),
  ],
};

module.exports = config;
