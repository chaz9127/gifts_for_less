angular.module('GiftsForLess')
  .factory('ProductsAPI', ProductsAPI);

ProductsAPI.$inject = ['$http'];

function ProductsAPI($http) {

  var service = {
    index: index
  };

  return service;

  ///////////

  function index(data) {
    return $http.get('/api/web/products', data);
  }

}
