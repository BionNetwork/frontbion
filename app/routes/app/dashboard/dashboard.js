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
        // $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        // console.log($scope.cardsCards);
        // $scope.$watch('oneOne', function(newValue, oldValue) {
        //   if ($scope.oneOne) {
        //       console.log($scope.oneOne);
        //   }
        // });
        $scope.dashboardCards = [
          {
            id: 1,
            size: 1,
            name: 'Выручка',
            charts: ['pie', 'line'],
            filters: [
              {
                id: 1,
                name: 'name'
              }
            ],
            data: []
          },
          {
            id: 3,
            size: 2,
            name: 'Дебиторка',
            charts: ['line', 'pie'],
            filters: [
              {
                id: 1,
                name: 'name'
              }
            ],
            data: []
          },
          {
            id: 4,
            size: 1,
            name: 'Кредиторка',
            charts: ['pie', 'line'],
            filters: [
              {
                id: 1,
                name: 'name'
              }
            ],
            data: []
          },
          {
            id: 4,
            size: 2,
            name: 'Дебиторка',
            charts: ['line', 'pie'],
            filters: [
              {
                id: 1,
                name: 'name'
              }
            ],
            data: []
          },
        ]



      }]
    });

}]);
