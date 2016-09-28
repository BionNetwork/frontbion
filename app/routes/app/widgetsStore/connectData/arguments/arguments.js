'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore.connectData.arguments', {
      url: '/arguments/:id',
      templateUrl: 'routes/app/widgetsStore/connectData/arguments/arguments.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {

        $scope.token = window.localStorage.getItem('token');
        var arguments = {
          get: {
            success: function(response) {
              $scope.allArguments = response.data.data;
              // console.log($scope.allCards);
            },
            error: function(response) {
            }
          }
        };
        var card = {
          get: {
            success: function(response) {
              $scope.cardKey = response.data.data;
              // console.log($scope.allCards);
            },
            error: function(response) {
            }
          }
        };


        $http({
          method: 'GET',
          url: '/api/v1/card/'+ $state.params.id +'/arguments',
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token
          }
        }).then(arguments.get.success, arguments.get.error);

        $http({
          method: 'GET',
          url: '/api/v1/cards',
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token
          },
          params: {
            id: $state.params.id
          }
        }).then(card.get.success, card.get.error);



      }]
    });

}]);
