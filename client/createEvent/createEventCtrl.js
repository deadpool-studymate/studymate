angular.module('studyMate')

.controller('createEventCtrl', function($scope, createEventFact){
  $scope.sendEvent = function(argument) {
    var eventObj = {};
    eventObj.topic = $scope.topic;
    eventObj.time = $scope.time;
    eventObj.date = $scope.date;
    eventObj.place = $scope.place;
    eventObj.host = 'user'; //taken from sessions?
    eventObj.guests = [];
    createEventFact.addEvent(eventObj);
  };
});
