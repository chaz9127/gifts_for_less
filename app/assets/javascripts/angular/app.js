'use strict'

angular.module('GiftsForLess', [
  'ui.router.compat',
  'templates',
  'ngMaterial',
  'dibari.angular-ellipsis'
]).config(configGiftsForLess);

configGiftsForLess.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$mdThemingProvider'];

function configGiftsForLess($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider, $mdThemingProvider) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);

  $mdThemingProvider.theme('default')
    .primaryPalette('amber')
    .accentPalette('indigo');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      templateUrl:"home/_index.html"
    })
}
