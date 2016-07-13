var webpack = require('webpack')
var path = require('path')
var HmrPlugin = webpack.HotModuleReplacementPlugin
var NpmInstallPlugin = require('npm-install-webpack-plugin')

var ENTRY_PATH = path.resolve('./src')
var DEV_REGEXP = (/(^babel-?.*|.*-plugin$|.*-loader)/)
var PORT = process.env.DEV_SERVER_HOST || 3010
var HOST = process.env.DEV_SERVER_PORT || '0.0.0.0'

var npmPluginConfig = {
  dev: function (module, path) { return DEV_REGEXP.test(module) }
}

var OUTPUT_PATH = path.resolve('./build')

var config = {
  entry: ENTRY_PATH,
  output: {
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    host: HOST,
    port: PORT,
    stats: 'errors-only',
    historyApiFallback: true,
    contentBase: OUTPUT_PATH,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    compress: true
  },
  plugins: [
    new NpmInstallPlugin(npmPluginConfig),
    new HmrPlugin({
      multiStep: true
    })
  ]
}

module.exports = config
