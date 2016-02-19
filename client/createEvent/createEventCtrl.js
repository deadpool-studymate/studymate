angular.module('studyMate.createEventCtrl')

.controller('createEventCtrl', function($scope, createEventFact){
  $scope.event = {guests: []}; // initialize the event object to have an empty array of guests

  $scope.sendEvent = function() {
    createEventFact.addEvent($scope.event);
  };
});
