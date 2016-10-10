'use strict';

var redis = require('../lib/redis')
//
// Save badges to database
// @param {Array} badges
// @param {callback} function
//
//
//
exports.save = function(badges, callback) {
  if (!badges.length) return callback(null, null);
  var badge = badges.pop();
  redis.lpush('badges', JSON.stringify(badge), function(err) {
    if (err) return callback(err, null);
    exports.save(badges, callback);
  })
}

//
// Trim down the list
//
//
exports.trim = function() {
  redis.ltrim('badges', 0, 9);
}