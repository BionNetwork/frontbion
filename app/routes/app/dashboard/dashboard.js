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
            series: {
              x: {
                  index: 3,
                  header: 'Date'
              },
              y: [
                  {
                      index: 0,
                      header: 'Alt'
                  },
                  {
                      index: 1,
                      header: 'Bazis'
                  },
                  {
                      index: 2,
                      header: 'Megapolis'
                  }
              ]
            },
            data: [
              [300000,1300000,700000,"Jan-13"],
              [300000,1300000,670000,"Feb-13"],
              [350000,1300000,710000,"Mar-13"],
              [370000,1400000,740000,"Apr-13"],
              [400000,1450000,720000,"May-13"],
              [403000,1450000,780000,"Jun-13"],
              [400000,1400000,800000,"Jul-13"],
              [405000,1460000,830000,"Aug-13"],
              [450000,1500900,850000,"Sep-13"],
              [450000,1510000,840000,"Oct-13"],
              [530000,1550000,800000,"Nov-13"],
              [530000,1600000,1000000,"Dec-13"],
              [500000,1600000,850000,"Jan-14"],
              [560000,1600000,800000,"Feb-14"],
              [650000,1640000,805000,"Mar-14"],
              [700000,1710000,780000,"Apr-14"],
              [680000,1770000,820000,"May-14"],
              [680000,1800000,850000,"Jun-14"],
              [706000,1800000,870000,"Jul-14"],
              [700000,1780000,920000,"Aug-14"],
              [760000,1790000,900000,"Sep-14"],
              [780000,1800000,940000,"Oct-14"],
              [800000,1820000,910000,"Nov-14"],
              [820000,1750000,1300000,"Dec-14"],
              [800000,1770000,980000,"Jan-15"],
              [780000,1810000,980400,"Feb-15"],
              [840000,1835000,1091000,"Mar-15"],
              [850000,1860000,1105000,"Apr-15"],
              [870000,1900000,1140000,"May-15"],
              [870000,1900000,1200000,"Jun-15"],
              [850000,1965000,1250000,"Jul-15"],
              [840000,2060400,1167000,"Aug-15"],
              [900000,2000000,1100700,"Sep-15"],
              [905000,1950030,1000168,"Oct-15"],
              [840000,1875900,910000,"Nov-15"],
              [760000,1820000,830000,"Dec-15"]
          ]
          },
          // {
          //   id: 3,
          //   size: 2,
          //   name: 'Дебиторка',
          //   charts: ['line', 'pie'],
          //   filters: [
          //     {
          //       id: 1,
          //       name: 'name'
          //     }
          //   ],
          //   data: []
          // },
          // {
          //   id: 4,
          //   size: 1,
          //   name: 'Кредиторка',
          //   charts: ['pie', 'line'],
          //   filters: [
          //     {
          //       id: 1,
          //       name: 'name'
          //     }
          //   ],
          //   data: []
          // },
          // {
          //   id: 4,
          //   size: 2,
          //   name: 'Дебиторка',
          //   charts: ['line', 'pie'],
          //   filters: [
          //     {
          //       id: 1,
          //       name: 'name'
          //     }
          //   ],
          //   data: []
          // },
        ]



      }]
    });

}]);
