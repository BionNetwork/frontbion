'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore.connectData.joinData', {
      url: '/join-data/:id',
      templateUrl: 'routes/app/widgetsStore/connectData/joinData/joinData.html',
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





      }]
    });

}]);
