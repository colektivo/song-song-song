var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/src/app',
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/app/app.jsx')
  ],
  output: {
    path: path.join(__dirname, 'app'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
      loaders: [
        { test: /\.jsx?$/, 
          loaders: ['react-hot', 'jsx?harmony'], 
          include: path.join(__dirname, 'src/app') },
        { test: /\.css$/, loader: "style!css" }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    resolve: {
      root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
  }

};