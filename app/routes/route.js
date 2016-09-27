;(function() {
  'use strict';
  angular
    .module('BIONApp')
    .config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('root', {
        abstract: true,
        url: '',
        templateUrl: 'main.html',
        controller: ['$scope', function($scope) {

        }]
      })
      .state('not-found', {
        url: '/not-found',
        template: ''
      });

    $urlRouterProvider.otherwise(function($injector, $location){
      if (($location.path() === '/') || ($location.path() === '')) {
        return '/';
      }
      return '/not-found';
    });

  }]);

})();
