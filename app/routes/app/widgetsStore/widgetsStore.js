'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore', {
      abstract: true,
      url: '/cardshop',
      templateUrl: 'routes/app/widgetsStore/widgetsStore.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {
        $scope.currentUrl = '/cardshop'
        $scope.showDashboardList = false;
        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        $scope.$watch('allStrings', function () {
          if ($scope.allStrings) {
            $scope.breadcrumbs = {
              url: '/mywidgets',
              name: $scope.allStrings.header.menu.widgetsStore
            };
          }
        });




      }]
    });

}]);
