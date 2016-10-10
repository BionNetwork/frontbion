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
          $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';
          var strings = {
            get: {
              success: function(response) {
                $scope.allStrings = response.data.data;
              },
              error: function(response) {
              }
            }
          };

          $http({
            method: 'GET',
            url: '/api/v1/config/strings',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token,
              'Accept-Language' : $scope.language
            }
          }).then(strings.get.success, strings.get.error);
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
