var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var PurifyCSSPlugin = require('purifycss-webpack-plugin')
var CleanPlugin = require('clean-webpack-plugin')
var VisualizerPlugin = require('webpack-visualizer-plugin')
var package = require(path.resolve('./package.json'))
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var UglifyPlugin = webpack.optimize.UglifyJsPlugin

var SRC_PATH = path.resolve('./src')
var VENDOR_PATHS = Object.keys(package.dependencies)
var OUTPUT_FILENAME = '[name].[chunkhash].js'
var OUTPUT_CHUNKFILENAME = '[chunkhash].js`'
var DIST_PATH = path.resolve('./build')
var CSS_PATHS = [
  path.resolve('./src/css/app.css')
]

var chunks = {
  names: ['vendor', 'manifest'],
  minChunks: Infinity
}

var purifyConfig = {
  basePath: process.cwd(),
  paths: [SRC_PATH],
  info: true
}


var uglifyConfig = {
  compress: {
    warnings: false,
    drop_console: true
  },
  mangle: {
    except: ['$', 'webpackJsonp'],
    screw_ie8: true,
    keep_fnames: true
  },
  beautify: false,
  comments: false
}

var cleanConfig = {
  root:process.cwd()
}


var config = {
  entry:{
    app:SRC_PATH,
    vendor:VENDOR_PATHS,
    style:CSS_PATHS
  },
  output:{
    filename:OUTPUT_FILENAME,
    chunkFilename:OUTPUT_CHUNKFILENAME
  },
  module:{
    loaders:[
      {
        test:/\.css$/,
        loader:ExtractTextPlugin.extract('style','css')
      }
    ]
  },
  devtool:'source-map',
  plugins:[
    new CommonsChunkPlugin(chunks),
    new ExtractTextPlugin(OUTPUT_FILENAME),
    new PurifyCssPlugin(purifyConfig),
    new UglifyPlugin(uglifyConfig),
    new VisualizerPlugin(),
    new CleanPlugin([DIST_PATH],cleanConfig)
  ]
}

module.exports = config
