angular.module('studyMate',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('signin', {
    url: '/signin',
    templateUrl: 'signin.html'
  });
  $stateProvider.state('signout', {
    url: '/signout',
    templateUrl: 'signout.html'
  });
  $stateProvider.state('eventsHome', {
    url: '/eventsHome',
    templateUrl: 'eventsHome.html'
  });
  $urlRouterProvider.otherwise('/signin');
});
