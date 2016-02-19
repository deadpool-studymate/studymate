angular.module('studyMate')

.controller('eventsListCtrl',function($scope, eventsListFact){
$scope.data = [];
  $scope.displayEvent = function(){
      eventsListFact.getEvents()
    .then(function(data){
      $scope.data.push(data);
      console.log($scope.data);
    }).catch(function(err) {
      console.log(err);
    });
  };
  $scope.displayEvent();

});
