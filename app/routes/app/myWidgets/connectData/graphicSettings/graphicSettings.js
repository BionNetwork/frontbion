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

      }]
    });

}]);
