// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('studyMate')

.controller('logController', function ($scope, $window, $location, $state, logFact) {
  $scope.user = {};

  $scope.signin = function () {
    logFact.signin($scope.user)
    .then(function(response) {
      if(response.isValid) {
        $state.go('eventsHome');
      } else {
        $state.go('signup');
      }
    });
    //if the user exists, then we want to redirect to the events home html,
    //otherwise then we want to redirect to signup
    //.then()
  };

  $scope.signup = function () {
    logFact.signup($scope.user)
    .then(function(response) {
      if(response) {
        $state.go('signin');
      } else {
        $state.go('eventsHome');
      }
    });
  };
});
