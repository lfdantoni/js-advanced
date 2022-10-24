const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use: 'babel-loader' // by using .babelrc file / usando el archivo .babelrc
        use: {
          loader: 'babel-loader', // without using .babelrc file / sin usar el archivo .babelrc
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            }
          }
        ],
      },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // extend the existing minimizers / extender los minimizers existentes => check production mode in https://webpack.js.org/configuration/mode/#usage
      new CssMinimizerPlugin(),
      new Dotenv()
    ],
  },
}