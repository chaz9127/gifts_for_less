'use strict'

angular.module('GiftsForLess', [
  'ui.router.compat',
  'templates',
  'ngMaterial',
  'dibari.angular-ellipsis'
]).config(configGiftsForLess);

configGiftsForLess.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];

function configGiftsForLess($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      templateUrl:"home/_index.html"
    })
}
