#!/usr/bin/env node
require('../server.babel'); // babel registration (runtime transpilation for node)

// var bs = require('browser-sync').create();
var path = require('path');
var rootDir = path.resolve(__dirname, '..');
// var httpProxy = require('http-proxy');
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (__DEVELOPMENT__) {
	var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];


  for (var k in interfaces) {
      for (var k2 in interfaces[k]) {
          var address = interfaces[k][k2];
          if (address.family === 'IPv4' && !address.internal) {
              addresses.push(address.address);
          }
      }
  }

   wphost=addresses[0];

  if (!require('piping')({
      hook: true,
      ignore: /(\/\.|~$|\.json|\.scss|\.css$)/i
    })) {
    return;
  }
  // Start a Browsersync proxy
  // bs.init({
  //   proxy: "http://localhost:3000",
  //   ui: {
  //     port: 4005
  //   },
  //   port: 4002,
  //   open: false
  // });
  // var proxy = httpProxy.createProxyServer({
  //   target: 'http://' + 'localhost' + ':' + '3000',
  //   ws: true
  // }).listen("4000", "192.168.0.101" );
}

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
  .development(__DEVELOPMENT__)
  .server(rootDir, function() {
    require('../app/server');
  });
