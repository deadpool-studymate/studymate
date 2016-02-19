// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('studyMate.authController')

.controller('authController', function ($scope, $window, $location, $state, authFact) {
  $scope.user = {};

  $scope.signin = function () {
    authFact.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $state.go('eventsHome');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    AuthFact.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
