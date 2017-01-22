var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
  context: path.join(__dirname, "./"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
      ,
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  output: {
    path: __dirname + "./actions",
    filename: "index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

// This will make the redux-auth-wrapper module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.
const src = path.join(__dirname, '..', '..', 'src')
if (fs.existsSync(src)) {
    // Use the latest src
    module.exports.resolve = { alias: { 'redux-auth-wrapper': src } }
    module.exports.module.loaders.push({
        test: /\.js$/,
        loaders: [ 'babel' ],
        include: src
    })
}