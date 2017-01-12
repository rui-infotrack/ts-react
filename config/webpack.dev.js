var helpers = require('./helpers');

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
var awesomeTsLoader = require('awesome-typescript-loader');

module.exports = {
  entry: {
    app: helpers.root('client', 'index.tsx')
  },

  output: {
    publicPath: '/',
    filename: '[name].js'
  },

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
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
      }
    ]
  },
  plugins: [
      new awesomeTsLoader.CheckerPlugin()
  ],
  devServer: {
    hot: true
  }
};
