angular.module('studyMate')

.factory('eventsListFact', function($http) {
  var getEvents = function() {
    return $http({
      method: 'GET',
      url: '/api/events/getEvents',
    }).then( function successs(response) {
      console.log(response);
      return response.data;
    }, function error(response) {
      console.log(response);
    });
  };

  var joinToggle = function(joinData) {
    return $http({
      method: 'POST',
      url: 'api/events/joinToggle',
      data: joinData
    }).then(function(resp) {
      console.log(resp);
      return resp.data;
    });
  };

  var getGuestList = function(eventid, token) {
    var data = {
      eventid: eventid,
      token: token
    };
    return $http({
      method: 'POST',
      url: 'api/events/getGuestList',
      data: data
    }).then(function success (response) {
      return response.data;
    }, function error(response) {
      console.log(response);
    });
  };

  return {
    getEvents: getEvents,
    joinToggle: joinToggle,
    getGuestList: getGuestList
  };
});
