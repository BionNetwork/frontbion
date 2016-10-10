'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets.connectData.arguments', {
      url: '/arguments/:id',
      templateUrl: 'routes/app/myWidgets/connectData/arguments/arguments.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {

        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        var card = {
          get: {
            success: function(response) {
              $scope.cardKey = response.data.data;
              // console.log(response.data.data);
              $scope.allArguments = response.data.data[0].argument;
              // console.log($scope.allCards);
            },
            error: function(response) {
            }
          }
        };

        $http({
          method: 'GET',
          url: '/api/v1/cards',
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token,
            'Accept-Language' : $scope.language

          },
          params: {
            id: $state.params.id
          }
        }).then(card.get.success, card.get.error);



      }]
    });

}]);
