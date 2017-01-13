var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
var awesomeTsLoader = require('awesome-typescript-loader');

module.exports = {
  entry: {
    app: helpers.root('client', 'index'),
    vendor: helpers.root('client', 'vendor')
  },

  output: {
    publicPath: '/',
    path: helpers.root('client', 'dist'),
    filename: 'js/[name].js'
  },

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        include: helpers.root('client'),
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.s?css$/,
        include: helpers.root('client'),
        loader: ExtractTextPlugin.extract(
          "style",
          "css?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass"
        )
      }
    ]
  },
  plugins: [
    new awesomeTsLoader.CheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "js/vendor.js"),
    new ExtractTextPlugin('styles/app.css')
  ],
  devServer: {
    hot: true
  }
};
