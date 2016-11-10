'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore.connectData.graphicSettings', {
      url: '/graphic/:id',
      templateUrl: 'routes/app/widgetsStore/connectData/graphicSettings/graphicSettings.html',
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
                            queriesObject.push({data: data[i],
                                                click_column: a[l].click_column,
                                                type: a[l].type})
                        }
                      }
                    }
                    console.log(queriesObject);
                    $scope.getQuery(queriesObject, 48);
                  },
                  error: function(response) {
                  }
                }
              };
              $http({
                method: 'POST',
                url: '/api/v1/activations/'+ 48 +'/data',
                headers: {
                  'X-AUTHORIZE-TOKEN': $scope.token
                }
              }).then(queryArguments.get.success, queryArguments.get.error);
            };

          };

          $scope.getQuery = function (data, id) {
            var query = {
            get: {
                success: function(response) {
                  console.log(response.data.data);
                  $scope.graphicSettingsData = response.data.data.data;
                  $scope.graphicSettingsSeries = {
                    x: {
                        index: 0,
                        header: 'Date'
                    },
                    y: [

                    ]
                  };
                  for (var i = 0; i < response.data.data.fields.length; i++) {
                    $scope.graphicSettingsSeries.y.push({
                          index: i+1,
                          header: response.data.data.fields[i]
                    })
                  };
                },
                error: function(response) {
                }
              }
            };

            var queryJson = {
              "transform": "true",
              "dims": [
              ],
              "measures" : [

              ],
            };
            for (var i = 0; i < data.length; i++) {
              if (data[i].type == 'timestamp' && queryJson.dims.length == 0) {
                queryJson.dims.push({
                  field: data[i].click_column,
                  type: 'date',
                  name: "date",
                  order: '1',
                  interval: "toStartOfMonth",
                  order_by: "desc"
                })
              }
              if (data[i].type == 'text' && data[i].data.column_name == 'Организация') {
                queryJson.dims.push({
                  field: data[i].click_column,
                  type: 'text',
                  name: "org",
                  order: '2'
                })
              }
              if (data[i].type == 'double precision') {
                queryJson.measures.push({
                  field: data[i].click_column,
                  type: 'field',
                  "agg_type": "sum",
                  name: "remain",
                  order: '3'
                })
              }
            }

            console.log(queryJson);

            $http({
              method: 'POST',
              url: '/api/v1/activations/'+ id +'/query',
              headers: {
                'X-AUTHORIZE-TOKEN': $scope.token,
                'Content-Type': 'application/json',
              },
              data: {
                    query: JSON.stringify(queryJson)
              }
            }).then(query.get.success, query.get.error);



          };


      }]
    });

}]);
