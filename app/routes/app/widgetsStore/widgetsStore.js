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

        $scope.breadcrumbs = {
          url: '/cardshop',
          name: 'Магазин приложений'
        };

        var strings = {
          get: {
            success: function(response) {
              $scope.allStrings = response.data.data;
              // console.log($scope.menuStrings);
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
            'Accept-Language' : 'ru'
          }
        }).then(strings.get.success, strings.get.error);



      }]
    });

}]);
