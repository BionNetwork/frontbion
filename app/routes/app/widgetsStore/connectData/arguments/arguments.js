'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore.connectData.arguments', {
      url: '/arguments/:id',
      templateUrl: 'routes/app/widgetsStore/connectData/arguments/arguments.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {

        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        $scope.$watch('activationId' ,function () {
          if ($scope.activationId) {
            $scope.getBoundedArguments($scope.activationId);
          }
        });

        var boundedArguments = {
          get: {
            success: function(response) {
              $scope.allBoundedArguments = response.data.data;
            },
            error: function(response) {
            }
          }
        };

        // functions

        $scope.getBoundedArguments = function (id) {
          $http({
            method: 'GET',
            url: '/api/v1/activations/' + id + '/bonds',
            headers: {
              'X-AUTHORIZE-TOKEN': $scope.token

            }
          }).then(boundedArguments.get.success, boundedArguments.get.error);
        };

      }]
    });

}]);
