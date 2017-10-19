module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    'postcss-cssnext': options.cssnext,
    'cssnano': env === 'production' ? options.cssnano : false,
  },
});
