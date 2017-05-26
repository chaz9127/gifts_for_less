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
      link: 'https://www.amazon.com',
      image: 'https://cdn.thisiswhyimbroke.com/images/method-2-drivable-robot-suit1-300x250.jpg'
    },
    {
      title: 'This Foo',
      description: 'This should be much longer text.much longer text. should be much should be much. is should be much longer tex.',
      price: 82.58,
      link: 'https://www.amazon.com',
      image: 'https://cdn.thisiswhyimbroke.com/images/motion-activated-alien-egg-thefowndry-300x250.jpg'
    },
    {
      title: 'A Bar over here',
      description: 'This should be much longer text.',
      price: 12.58,
      link: 'https://www.amazon.com',
      image: 'https://cdn.thisiswhyimbroke.com/images/worlds-smallest-universal-travel-adapter-300x250.jpg'
    },
    {
      title: 'Title',
      description: 'This should be much longer text.This should be much longer text.This should be much longer text.This should be much longer text.',
      price: 15.58,
      link: 'https://www.amazon.com',
      image: 'https://cdn.shopify.com/s/files/1/2005/1747/products/760bf2c0b49da958b63eed0181f07857_345x345@2x.jpg?v=1494878685'
    },
    {
      title: 'A Bar over here',
      description: 'This should be much longer text.',
      price: 12.58,
      link: 'https://www.amazon.com',
      image: 'https://cdn.shopify.com/s/files/1/2005/1747/products/maxresdefault_1_250x250@2x.jpg?v=1494893350'
    }
  ]
}
