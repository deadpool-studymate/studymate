var db = require('../db/schema.js');
var User = require('../models/userModel.js');

module.exports = {
  signin: function (req, res, next) {

  },

  signup: function (req, res, next) {
    console.log('inside route signup');
    console.log(req);
    
  },

  checkAuth: function (req, res, next) {

  }



}