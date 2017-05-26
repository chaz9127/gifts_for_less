angular.module('GiftsForLess')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$state'];

function HomeCtrl($scope, $state) {
  $scope.holidays = ['All', 'Mother\'s Day', 'Father\'s Day'];
  $scope.selectedHoliday = 'All';
  $scope.price = 15;
  $scope.selectedSort = 'newest';

  $scope.items = [
    {
      title: 'Title',
      description: 'This should be much longer text.This should be much longer text.This should be much longer text.This should be much longer text.',
      price: 15.58,
      link: 'https://www.amazon.com'
    },
    {
      title: 'This Foo',
      description: 'This should be much longer text.much longer text. should be much should be much. is should be much longer tex.',
      price: 82.58,
      link: 'https://www.amazon.com'
    },
    {
      title: 'A Bar over here',
      description: 'This should be much longer text.',
      price: 12.58,
      link: 'https://www.amazon.com'
    }
  ]
}
