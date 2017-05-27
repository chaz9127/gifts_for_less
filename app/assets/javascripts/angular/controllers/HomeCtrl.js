angular.module('GiftsForLess')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$state', 'ProductsAPI'];

function HomeCtrl($scope, $state, ProductsAPI) {
  $scope.holidays = ['All', 'Mother\'s Day', 'Father\'s Day'];
  $scope.sorts = ['Newest', 'Price: Low to High', 'Price: High to Low'];
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
    var params = {
        params: {
          holiday: $scope.selectedHoliday
        }
    };

    ProductsAPI.index(params).then(function(resp){
      $scope.products = resp.data.products;
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


  $scope.displayProducts();


}
