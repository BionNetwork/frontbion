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
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        $scope.parentUrl = '/cardshop';

        $scope.$watch('activationId', function () {
          if ($scope.activationId) {
            $scope.getResources($scope.activationId);
          }
        });

        var resources = {
          get: {
            success: function(response) {
              $scope.allResources = response.data.data;
            },
            error: function(response) {
            }
          }
        };

        var tablePreview = {
          get: {
            success: function(response) {
              // console.log(response.data.data)
              $scope.tablePreview = response.data.data;
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
              'X-AUTHORIZE-TOKEN': $scope.token,
              'Accept-Language' : $scope.language
            },
            params: {
              activation_id: id
            }
          }).then(resources.get.success, resources.get.error);
        };

        $scope.getResourcesTables = function (id) {
          return $http({
            method: 'GET',
            url: '/api/v1/resources/'+ id,
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token
            }
          }).then(function (response) {
            return response.data.data;
          }, function(error) {
            console.log('error', error);
          });
        };

        $scope.showTablePreview = function(tableName, id) {
          $http({
            method: 'GET',
            url: '/api/v1/resources/'+ id +'/preview',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token
            },
            params: {
              table_name: tableName
            }
          }).then(tablePreview.get.success, tablePreview.get.error);
        };

        $scope.argumentBound = function (activationId, choosedTableResourceId, agumentId, choosedTableName, selectedColumnName) {
          $http({
            method: 'POST',
            url: '/api/v1/activations/'+ activationId +'/resources/' + choosedTableResourceId +'/arguments/'+ agumentId,
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token,
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $.param({
                  'table_name': choosedTableName,
                  'column_name': selectedColumnName
                })
          }).then(function (response) {
            return response.data.data;
          }, function(error) {
            console.log('error', error);
          });
        };

        // end functions


      }]
    });

}]);
