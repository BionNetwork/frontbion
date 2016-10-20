'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets.connectData.graphicSettings', {
      url: '/graphic/:id',
      templateUrl: 'routes/app/myWidgets/connectData/graphicSettings/graphicSettings.html',
      controller: ['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location) {
          // console.log($location.search().agumentId);
        $scope.token = window.localStorage.getItem('token');
        var activations = {
          get: {
            success: function(response) {
              $scope.activeActivastionId = 1;
              if (response.data.data.length != 0) {
                  $scope.getDataForCharts(response.data.data);
              }
              // console.log($scope.activeActivastionId);
            },
            error: function(response) {
            }
          }
        };

        $http({
          method: 'GET',
          url: '/api/v1/activations',
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token
          },
          params: {
            card_id: $state.params.id,
            activation_status: 'active'
          }
        }).then(activations.get.success, activations.get.error);

        // functions start

        $scope.getDataForCharts = function (activeActivations) {
          if (activeActivations.length == 0) {
            // break;
          };
          var boundedActiveArguments = {
            get: {
              success: function(response) {
                $scope.argumentsForQuery(response.data.data, activeActivations[0].id);
              },
              error: function(response) {
              }
            }
          };
          $http({
            method: 'GET',
            url: '/api/v1/activations/' + activeActivations[0].id + '/bonds',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token
            }
          }).then(boundedActiveArguments.get.success, boundedActiveArguments.get.error);

          $scope.argumentsForQuery = function (data, id) {
            var queryArguments = {
              get: {
                success: function(response) {
                  var queriesObject = [];
                  var a = response.data.data.sources[data[0].resource.remote_id][0].columns;
                  // console.log(response.data.data.sources[data[0].resource.remote_id][0].columns);
                  for (var i = 0; i < data.length; i++) {
                    for (var l = 0; l < a.length; l++) {
                      var b = data[i];
                      if (data[i].column_name == a[l].orig_column) {
                          queriesObject.push({data: data[i], click_column: a[l].click_column})
                      }
                    }
                  }
                  $scope.getQuery(queriesObject, id);
                },
                error: function(response) {
                }
              }
            };
            $http({
              method: 'POST',
              url: '/api/v1/activations/'+ id +'/data',
              headers: {
                'X-AUTHORIZE-TOKEN': $scope.token
              }
            }).then(queryArguments.get.success, queryArguments.get.error);
          };

        };

        $scope.getQuery = function (data, id) {
          console.log(data);
          console.log(id);

          var query = {
          get: {
              success: function(response) {
                // $scope.allCategories = response.data.data;
                // $scope.allCategoriesForCards = response.data.data;
                console.log(response.data.data);
              },
              error: function(response) {
              }
            }
          };
          var i = {
            "dims": [
              {
                name: 'data',
                type: 'TextDim',
                field: 'c_16_105_4336658476196458068_8540502850571451334'
              }
            ]
          };

          $http({
            method: 'POST',
            url: '/api/v1/activations/16/query',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token,
              'Content-Type': 'application/json',
            },
            data: {
                  query: JSON.stringify(i)
            }
          }).then(query.get.success, query.get.error);



        };

      }]
    });

}]);
