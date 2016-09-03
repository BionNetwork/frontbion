'use strict';

angular.module('HotelApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.dashboard', {
      url: '/dashboard',
      templateUrl: 'routes/app/dashboard/dashboard/dashboard.html',
      controller: ['$scope', function($scope) {

      }]
    });

}]);
