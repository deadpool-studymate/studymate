angular.module('studyMate')

.controller('createEventCtrl', function($scope, createEventFact, eventsListFact){
  $scope.event = {guests: []}; // initialize the event object to have an empty array of guests

  $scope.sendEvent = function() {
    createEventFact.addEvent($scope.event);
  };
});
