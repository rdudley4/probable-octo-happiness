const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        "use": 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]-[contenthash:8].[ext]',
          outputPath: 'images'
        },
      }
    ]
  },
  "plugins": [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:8].css"}),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
} 