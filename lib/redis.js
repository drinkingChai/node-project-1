'use strict';

var redis = require('redis');
var client = redis.createClient();

client.on('error', function(err) {
  throw err;  //throws??? the error
})

modules.exports = client;
