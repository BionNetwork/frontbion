'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.dashboard.dashboardContent', {
      url: 'dashboard',
      templateUrl: 'routes/app/dashboard/dashboardContent/dashboardContent.html',
      controller: ['$scope', '$state', function($scope, $state) {
        $scope.params = $state.params.id;
        // $scope.currentUrl = '/'
      }]
    });

}]);
