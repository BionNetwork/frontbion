'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.dashboard', {
      abstract: true,
      url: '/',
      templateUrl: 'routes/app/dashboard/dashboard.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {
        $scope.currentUrl = '/dashboard';
        $scope.showDashboardList = true;
        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        // console.log($scope.cardsCards);
        // $scope.$watch('oneOne', function(newValue, oldValue) {
        //   if ($scope.oneOne) {
        //       console.log($scope.oneOne);
        //   }
        // });

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
