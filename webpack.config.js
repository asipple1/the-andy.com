const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    // 🎌 OUR SOURCE FILE 🎌
    jsSource: './assets/src/main.js'
  },
  output: {
    // 🎌 OUR DESTINATION 🎌
    filename: './assets/dist/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        use: 'json-loader'
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                outputStyle: "compact"
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./assets/dist/style.css')
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
