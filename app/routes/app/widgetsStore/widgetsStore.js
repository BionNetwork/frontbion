'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore', {
      abstract: true,
      url: '/cardshop',
      templateUrl: 'routes/app/widgetsStore/widgetsStore.html',
      controller: ['$scope', '$http', function($scope, $http) {
        $scope.currentUrl = '/cardshop'
        $scope.showDashboardList = false;
        // $scope.token = window.localStorage.getItem('token');
        // var cards = {
        //   get: {
        //     success: function(response) {
        //       $scope.allCards = response.data.data;
        //       console.log($scope.allCards);
        //     },
        //     error: function(response) {
        //     }
        //   }
        // };
        //
        // $http({
        //   method: 'GET',
        //   url: '/api/v1/cards',
        //   headers: {
        //     'X-AUTHORIZE-TOKEN': $scope.token
        //   }
        // }).then(cards.get.success, cards.get.error);



      }]
    });

}]);
