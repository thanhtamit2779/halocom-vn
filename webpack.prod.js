const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    "path": path.resolve(__dirname, 'build'),
    "filename": '[name].bundle.js'
  },
  watch: true,
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    hot: true,
    open: true
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      actions: path.resolve(__dirname, 'src/store/actions/'),
      components: path.resolve(__dirname, 'src/components/'),
      configs: path.resolve(__dirname, 'src/configs/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
      reducer: path.resolve(__dirname, 'src/reducer/'),
      routes: path.resolve(__dirname, 'src/routes/'),
      saga: path.resolve(__dirname, 'src/saga/'),
      store: path.resolve(__dirname, 'src/store/'),
      modules: path.resolve(__dirname, 'src/modules/'),
      common: path.resolve(__dirname, 'src/common/')
    }
  },
  module: {
    "rules": [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              "loader": "babel-loader",
              options: {
                plugins: ['transform-class-properties']
              }
            },             
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                debug: true
              },
            },
            {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: '@svgr/webpack',
              options: {
                babel: false,
                icon: true,
              },
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
              }
            }
          ],
        }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new webpack.ProvidePlugin({
      lodash: ['lodash'],
      moment: ['moment'],
      connect: ['react-redux', 'connect'],
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    })
  ]
}