'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore.connectData.toPlug', {
      url: '/toplug/:id',
      templateUrl: 'routes/app/widgetsStore/connectData/toPlug/toPlug.html',
      controller: ['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location) {
          // console.log($location.search().agumentId);
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
        var activations = {
          get: {
            success: function(response) {
              // console.log(response.data.data[0]);
              $scope.getResources(response.data.data[0].id);
            },
            error: function(response) {
            }
          }
        };
        var resources = {
          get: {
            success: function(response) {
              console.log(response.data.data);
              $scope.allResources = response.data.data;
            },
            error: function(response) {
            }
          }
        };
        // functions
        $scope.getResources = function (id) {
          $http({
            method: 'GET',
            url: '/api/v1/resources',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token
            },
            params: {
              activation_id: id
            }
          }).then(resources.get.success, resources.get.error);
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

        $http({
          method: 'GET',
          url: '/api/v1/activations',
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token
          },
          params: {
            card_id: $state.params.id,
            activation_status: 'pending'
          }
        }).then(activations.get.success, activations.get.error);



      }]
    });

}]);
