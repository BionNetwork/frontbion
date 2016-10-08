'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets', {
      abstract: true,
      url: '/mywidgets',
      templateUrl: 'routes/app/myWidgets/myWidgets.html',
      controller: ['$scope', function($scope) {
        $scope.currentUrl = '/mywidgets';
        $scope.showDashboardList = false;
      }]
    });

}]);
