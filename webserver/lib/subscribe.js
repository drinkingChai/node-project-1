'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect(8001, '127.0.0.1'); //connecting to 8001 port from broadcast

socket.on('error', function(err) {
  throw err;
});

module.exports = socket;
