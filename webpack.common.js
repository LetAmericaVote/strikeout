const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
      },
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
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                cssnext: {},
                cssnano: {},
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([DIST_PATH]),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
  ],
};

module.exports = config;
