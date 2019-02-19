const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  "mode": "production",
  "entry": "./src/js/index.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "[name].[chunkhash:8].js"
  },
  "module": {
    "rules": [{
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/env"
            ]
          }
        }
      },
      {
        "test": /\.scss$/,
        "use": [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        "test": /\.html$/,
        "use": {
          loader: 'html-loader',
          options: {
            attrs: [
              'video:src',
              'img:src'
            ]
          }
        }
      },
      {
        "test": /\.(gif|png|jpe?g|svg)$/i,
        "use": [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[contenthash:8].[ext]',
              outputPath: 'img'
            }
          },
          'image-webpack-loader'
        ],
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[contenthash:8].[ext]',
              outputPath: 'img'
            }
          }
        ]
      }
    ]
  },
  "plugins": [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:8].css"}),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
} 