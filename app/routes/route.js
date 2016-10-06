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
        controller: ['$scope', '$http', function($scope, $http) {
          $scope.token = window.localStorage.getItem('token');
          var cards = {
            get: {
              success: function(response) {
              },
              error: function(response) {
                console.log(response, 'error');
                window.location.hash = '/login';
              }
            }
          };

          $http({
            method: 'GET',
            url: '/api/v1/cards',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token
            }
          }).then(cards.get.success, cards.get.error);
        }]
      })
      .state('not-found', {
        url: '/not-found',
        template: ''
      });

    $urlRouterProvider.otherwise(function($injector, $location){
      if (($location.path() === '/') || ($location.path() === '')) {
        return '/dashboard';
      }
      return '/not-found';
    });

  }]);

})();
