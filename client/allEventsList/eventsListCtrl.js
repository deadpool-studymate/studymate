angular.module('studyMate')

.controller('eventsListCtrl', function($scope, eventsListFact){
  $scope.displayEvent = function(){
    $scope.eventsListFact.getEvents()
    .then(function(data){
      $scope.data = data;
    }).catch(function(err) {
      console.log(err);
    })
  }
  $scope.displayEvent();
})
