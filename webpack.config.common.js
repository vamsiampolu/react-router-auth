var webpack = require('webpack')
var path = require('path')
var HtmlPlugin = require('html-webpack-plugin')
var template = require('html-webpack-template')
var DotEnvPlugin = require('webpack-dotenv-plugin')

var DOTENV_SAMPLE = path.resolve('./.env.default')
var DOTENV_PATH = path.resolve('./.env')
var OUTPUT_PATH = path.resolve('./build')
var SRC_PATH = path.resolve('./src')

var htmlConfig = {
  inject: false,
  mobile: true,
  appMountId: 'root',
  template: template
}

var dotenvConfig = {
  sample: DOTENV_SAMPLE,
  path: DOTENV_PATH
}

var config = {
  output: {
    path: OUTPUT_PATH
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'standard',
        include: SRC_PATH
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: SRC_PATH
      }
    ]
  },
  plugins: [
    new DotEnvPlugin(dotenvConfig),
    new HtmlPlugin(htmlConfig)
  ]
}

module.exports = config
