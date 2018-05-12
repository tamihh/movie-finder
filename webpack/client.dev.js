const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8000,
    historyApiFallback: true,
    hot: true
  },
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  resolve: {
    alias: {
      Common: path.resolve('src/common'),
      Components: path.resolve('src/components'),
    },
    modules: [path.resolve('src/'), 'node_modules'],
    extensions: ['.js', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    })
  ]
};