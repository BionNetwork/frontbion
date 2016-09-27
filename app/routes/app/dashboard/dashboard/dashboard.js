'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.dashboard', {
      url: '/',
      templateUrl: 'routes/app/dashboard/dashboard/dashboard.html',
      controller: ['$scope', function($scope) {

      }]
    });

}]);
