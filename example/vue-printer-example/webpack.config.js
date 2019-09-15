const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env) => {
  const isProd = env === 'prod'
  const addedPlugins = isProd
    ? []
    : [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]

  return {
    devServer: {
      compress: true,
      port: 12315,
      open: true,
      overlay: true,
      hot: true
    },
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'eval-source-map',
    entry: {
      main: './src/index.ts'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.vue', '.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: ['file-loader']
        },
        {
          test: /\.(ts|js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/typescript'
            ]
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new VueLoaderPlugin(),
      ...addedPlugins
    ]
  }
}
