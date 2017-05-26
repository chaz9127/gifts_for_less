angular.module('GiftsForLess')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$state', 'ProductsAPI'];

function HomeCtrl($scope, $state, ProductsAPI) {
  $scope.holidays = ['All', 'Mother\'s Day', 'Father\'s Day'];
  $scope.sorts = ['Newest', 'Most Popular'];
  $scope.selectedHoliday = 'All';
  $scope.price = 15;
  $scope.selectedSort = 'newest';
  $scope.products = [];

  $scope.goTo = function(url) {
    window.location = url;
  }

  ProductsAPI.index().then(function(resp){
    $scope.products = resp.data.products
  })


}
