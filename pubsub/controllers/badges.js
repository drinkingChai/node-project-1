'use strict';

var _ = require('underscore');
var model = require('../models/badges')
//
// Send badges to model to be saved
//
exports.save = function(req, res, next) {
  var badges = _.clone(req.body);
  model.save(badges, function(err) {
    if (err) return res.json({ error: true }); });
    next();
    model.trim();   //trim will execute asynchronously after next();
};

//
// Send badges to pub/sub socket in model
//
exports.send = function(req, res, next) {
  var badges = _.clone(req.body);
  mode.send(badges, function(err) {
    res.json(200, { error: null }); //when send is done, respond with code 200
  });
  next();
};

//
// get 10 badges from model
//
exports.get = function(req, res) {
  model.get(function(err, data) {
    if (err) return res.json(503, { error: true });
    res.json(200, data);
  });
};
