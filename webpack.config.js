var webpack=require('webpack');

var CleanPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');

var relativeAssetsPath=__dirname + "/assets";

module.exports = {
    // devtool: 'source-map',
  entry: [
    './app/client.js'
  ],
  output: {
    path: __dirname + "/assets",
    publicPath: 'assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
    test: /\.global\.css$/,
    loaders: [
      'style-loader',
      'css-loader?importLoaders=1',
      'postcss?browsers=last 2 version'
    ]
  }, {
    test: /^((?!\.global).)*\.css$/,
    loaders: [
      'style-loader',
      'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      'postcss?browsers=last 2 version'
    ]
  },
  {
    test: /\.global\.less$/,
    loaders: [
      'style-loader',
      'css-loader?sourceMap&importLoaders=2',
      'postcss?browsers=last 2 version',
      'less-loader'
    ]
  }, {
    test: /^((?!\.global).)*\.less$/,
    loaders: [
      'style-loader',
      'css-loader?modules&sourceMap&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
      'postcss?browsers=last 2 version',
      'less-loader'
    ]
  },
    {
      test: /\.jpg$|\.png$|\.svg$|\.gif$|\.eot$|\.ttf$|\.woff$/,
      exclude: /node_modules/,
      loader: 'file-loader'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    contentBase: './'
  },
  historyApiFallback: {
  index: '/index.html'
  },
  plugins: [
    new CleanPlugin([relativeAssetsPath]),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.DedupePlugin()
],
};
