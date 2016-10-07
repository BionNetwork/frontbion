'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets.connectData.toPlug', {
      url: '/toplug/:id',
      templateUrl: 'routes/app/myWidgets/connectData/toPlug/toPlug.html',
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
              $scope.activationId = response.data.data[0].id;
              $scope.getResources(response.data.data[0].id);
            },
            error: function(response) {
            }
          }
        };
        var resources = {
          get: {
            success: function(response) {
              $scope.allResources = response.data.data;
            },
            error: function(response) {
            }
          }
        };
        var resource = {
          get: {
            success: function(response) {
              console.log(response.data.data)
              // $scope.table = response.data.data[0].name;
              $scope.table = response.data.data;
            },
            error: function(response) {
            }
          }
        };
        var preview = {
          get: {
            success: function(response) {
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

        $scope.getResourcesTables = function (id) {
          return $http({
            method: 'GET',
            url: '/api/v1/resources/'+ id +'/tables',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token
            }
          }).then(function (response) {
            return response.data.data;
          }, function(error) {
            console.log('error', error);
          });
        };

        $scope.showResource = function(res) {
          $scope.resId = res.id;

          $http({
            method: 'GET',
            url: '/api/v1/resources/' + res.id + '/tables',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token
            }
          }).then(resource.get.success, resource.get.error);
        }

        $scope.getPreview = function(resId, table) {
          console.log(resId, table)
          $http({
            method: 'GET',
            url: '/api/v1/resources/' + resId + '/preview',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token
            },
            params: {
              table_name: table
            }
          }).then(preview.get.success, preview.get.error);
        }

        $scope.showTable = function() {
          console.log('defined');
        }

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
