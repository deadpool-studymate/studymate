angular.module('studyMate.eventsListCtrl', [])

.controller('eventsListCtrl',function($scope, eventsListFact){

  $scope.displayEvent = function(){
      eventsListFact.getEvents()
    .then(function(data){
      $scope.data = data;
    }).catch(function(err) {
      console.log(err);
    });
  };


  $scope.displayEvent();

});
