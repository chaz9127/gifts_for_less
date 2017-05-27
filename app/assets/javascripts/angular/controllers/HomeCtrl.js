angular.module('GiftsForLess')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$state', 'ProductsAPI', 'TagsAPI'];

function HomeCtrl($scope, $state, ProductsAPI, TagsAPI) {
  $scope.sorts = ['Newest', 'Price: Low to High', 'Price: High to Low'];
  $scope.holidays = ['All'];
  $scope.selectedHoliday = 'all';
  $scope.price = 15;
  $scope.selectedSort = 'newest';
  $scope.products = [];
  $scope.reverseOrder = false;

  $scope.goTo = function(url) {
    window.location = url;
  }

  $scope.$watch('selectedHoliday', function() {
      $scope.displayProducts();
  });

  $scope.priceRangeFilter = function (product) {
    return product.price/100 <= $scope.price;
  };

  $scope.displayProducts = function() {
    var params = { params: { holiday: $scope.selectedHoliday } };
    ProductsAPI.index(params).then(function(resp){
      $scope.products = resp.data.products;
    })
  }

  $scope.displayHolidays = function() {
    var params = { params: { list: $scope.selectedHoliday } };
    TagsAPI.index(params).then(function(resp){
      $scope.holidays = $scope.holidays.concat(resp.data.tags);
    })
  }

  $scope.dynamicOrder = function(product) {
    var sortBy = null;
    if ($scope.selectedSort === 'newest') {
      sortBy = 'created_at';
      $scope.reverseOrder = true;
    } else if ($scope.selectedSort === 'price-low-to-high') {
      sortBy = 'price';
      $scope.reverseOrder = false;
    } else if ($scope.selectedSort === 'price-high-to-low') {
      sortBy = 'price';
      $scope.reverseOrder = true;
    }
    return product[sortBy];
  }

  $scope.displayHolidays();
  $scope.displayProducts();

}
