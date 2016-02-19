angular.module('studyMate')

.factory('eventsListFact', function($http){
  var getEvents = function() {
    return $http({
      method: 'GET',
      url: '/api/events/getEvent',
    }).then( function successs(response) {
      console.log(response)
      return response.data;
    }, function error(response) {
      console.log(response);
    });
  };
  return {
    getEvents: getEvents
  };
});
