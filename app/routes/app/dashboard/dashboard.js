'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.dashboard', {
      abstract: true,
      url: '/',
      templateUrl: 'routes/app/dashboard/dashboard.html',
      controller: ['$scope', function($scope) {
        $scope.currentUrl = '/dashboard';
      }]
    });

}]);
