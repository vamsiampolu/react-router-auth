var merge = require('webpack-merge')
var validator = require('webpack-validator')
var common = require('./webpack.config.common')

var DEV = 'DEVELOPMENT'
var PROD = 'PRODUCTION'

require('dotenv-safe').load()
var env = process.env.NODE_ENV
var config
if (env === DEV) {
  var dev = require('./webpack.config.dev')
  console.log('Running in development mode')
  config = merge.smart(common, dev)
}

if (env === PROD) {
  var prod = require('./webpack.config.prod')
  config = merge.smart(common, prod)
}

module.exports = validator(config)
