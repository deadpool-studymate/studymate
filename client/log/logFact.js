angular.module('studyMate')
.factory('logFact', function ($http) {

  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      console.log(resp);
      return resp.data;
    });
  };

  return {
    signin: signin,
    signup: signup
  };

});
