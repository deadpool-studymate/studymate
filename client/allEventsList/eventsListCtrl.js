angular.module('studyMate')

.controller('eventsListCtrl', function($scope, $window, $state, eventsListFact, logFact) {
  $scope.data = [];
  $scope.allGuestLists = {};
  $scope.currentUser = '';

  $scope.signout = function() {
    logFact.signout();
  };

  $scope.upcomingEvents = function(obj) {
    var date = new Date();
    var eventDate = new Date(obj.datetime);
    return eventDate >= date;
  };

  $scope.displayEvent = function() {
    eventsListFact.getEvents()
      .then(function(data) {
        data.forEach(function(value) {
          value.formatted = moment(value.datetime, moment.ISO_8601).format('MMM D, h:mm A');
        });
        $scope.data = data;
      }).catch(function(err) {
        console.log(err);
      });
  };

  $scope.joinToggle = function(event) {
    $scope.toggleButton = !$scope.toggleButton;
    var token = $window.localStorage.getItem('com.studymate');

    var eventJoinData = {
      token: token,
      event: event
    };

    eventsListFact.joinToggle(eventJoinData)
      .then(function(response) {
        if (response.isValid) {
          $scope.getGuestList(event);
        } else {
          console.log('Event join failed');
        }
      });
  };

  $scope.getGuestList = function(event) {
    var list = [];
    var token = $window.localStorage.getItem('com.studymate');

    eventsListFact.getGuestList(event.id, token)
      .then(function(data) {
        $scope.currentUser = data.currentUser;
        data.list.forEach(function(item) {
          list.push(item.username);
        });
        $scope.allGuestLists[event.id] = list;
      })
  }

  $scope.isJoined = function(user, event) {
    if ($scope.allGuestLists[event.id]) {
      if ($scope.allGuestLists[event.id].indexOf($scope.currentUser) !== -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  $scope.displayEvent();
});
