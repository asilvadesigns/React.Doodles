const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    //  start at app/index.js
    app: './app/index.js'
  },
  output: {
    //  output js bundle to dist as bundle.js
    path: __dirname + 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        //  run babel for all js files
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        //  run autoprefixer, sass, css modules for all scss files
        test: /\.scss$/,
        //  extract ouptput to css files using combine loaders
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: combineLoaders([
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'autoprefixer-loader',
              query: {
                browsers:'last 2 versions'
              }
            }
          ])
        })
      }
    ]
  },
  devServer: {
    //  404s will fallback to /index.html
    historyApiFallback: true
  },
  plugins: [
    //  inject js bundle to html page
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body'
    }),
    //  output complied scss to css
    new ExtractTextPlugin({
      filename: './dist/css/styles.css',
      allChunks: true
    })
  ]
}
