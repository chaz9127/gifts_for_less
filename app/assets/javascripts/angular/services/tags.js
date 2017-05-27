angular.module('GiftsForLess')
  .factory('TagsAPI', TagsAPI);

TagsAPI.$inject = ['$http'];

function TagsAPI($http) {

  var service = {
    index: index
  };

  return service;

  ///////////

  function index(data) {
    return $http.get('/api/web/tags', data);
  }

}
