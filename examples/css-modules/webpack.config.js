var path = require('path')
var webpack = require('webpack')

var postcssConfig = require('./postcss.config');

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: postcssConfig,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      { 
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
        include: __dirname
      }
    ]
  }
}

var reactCSSUtilsSrc = path.join(__dirname, '..', '..', 'src')
var reactCSSUtilsNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')

if (fs.existsSync(reactCSSUtilsSrc) && fs.existsSync(reactCSSUtilsNodeModules)) {
  module.exports.resolve = { alias: { 'react-css-utils': reactCSSUtilsSrc } }

  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: [ 'babel' ],
    include: reactCSSUtilsSrc
  });
}
