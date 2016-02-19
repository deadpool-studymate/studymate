angular.module('studyMate', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('eventsHome', {
    url: '/eventsHome',
    templateUrl: 'allEventsList/eventsHome.html'
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'log/signin.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'log/signup.html'
  });
  $urlRouterProvider.otherwise('/signin');
});
//just kept this here to test and make sure that the app is running
// .run(function($state, $rootScope) {
//   console.log("app running");
//   $rootScope.$on('$stateChangeStart', function(event, toState) {
//     console.log("stateChange ", toState);
//   });
// });
