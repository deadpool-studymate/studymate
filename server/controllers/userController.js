var User = require('../models/userModel.js');
var Users = require('../collections/userCollection.js');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt-nodejs');

// token secret
var secret = 'deadpoolsecret';

module.exports = {

  signin: function(req, res) {
    //we want to check the database and see if the username and password exist
    var username = req.body.username;
    var password = req.body.password;

    var validObj = {isValid: false};

    new User({ username: username }).fetch()
    .then(function(found) {
      if(found) {
        bcrypt.compare(password, found.get('password'), function(err, result) {
          if(result) {
            var token = jwt.encode({username: username}, secret);
            validObj.token = token;
            validObj.isValid = true;
            res.send(validObj);
          }
        });
      } else {
        res.send(validObj);
      }
    });
  },

  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phonenumber = req.body.phonenumber;
    var email = req.body.email;
    var gender = req.body.gender;
    var birthday = req.body.birthday;
    var school = req.body.school;
    var topic = req.body.topic;
    var validObj = {isValid: false};

    debugger;
    new User({username: username}).fetch()
      .then(function(found) {
        if(found) {
          res.send(validObj);
        } else {
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, null, function(err, hash) {
              var user = new User({
                username: username,
                password: hash,
                firstname: firstname,
                lastname: lastname,
                phonenumber: phonenumber,
                email: email,
                gender: gender,
                birthday: birthday,
                school: school,
                topic: topic
              });

              var token = jwt.encode({username: username}, secret);
              validObj.token = token;
              validObj.isValid = true;

              user.save()
                .then(function(newUser) {
                  Users.add(newUser);
                  res.send(validObj);
                });
            });
          });
        }
      });
  }
};
