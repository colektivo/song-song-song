var webpack = require('webpack');
var path = require('path');
var I18nPlugin = require("i18n-webpack-plugin");
var languages = {
    "en": null,
    "es": require("./src/locales/es.json"),
    "de": require("./src/locales/de.json")
};
// 'webpack-dev-server/client?http://192.168.1.122:3000',

//  devtool: 'source-map',

// loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
//          { test: /\.css$/, loader: "style-loader!css-loader" },

var isDev = process.env.NODE_ENV;

// css
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");


module.exports = Object.keys(languages).map(function(language) {
  return {
    name: language,
    context: __dirname + '/src/app',
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    debug: true,
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/app/app.jsx')
    ],
    output: {
      path: path.join(__dirname, 'app'),
      publicPath: '/',
      filename: language + ".bundle.js"
    },
    plugins: [
      new I18nPlugin(languages[language]),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [
          { test: /\.jsx?$/, 
            exclude: /(node_modules)/,
            loaders: ['react-hot', 'babel?optional[]=runtime&stage=0'],
            include: path.join(__dirname, 'src/app') 
          },
          { test: /\.styl$/, 
            loader: stylusLoader }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.styl'],
      resolve: {
        root: [path.join(__dirname, "assets", "styles")]
      },
    }
  };
});

module.exports.output = {
  // EDIT: for webpack-dev-server to serve files under /some-public-path/
  publicPath: "/"
};