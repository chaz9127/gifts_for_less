angular.module('GiftsForLess')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$state'];

function HomeCtrl($scope, $state) {
  $scope.state = $state.current.name;
  console.log($scope.state);
}
