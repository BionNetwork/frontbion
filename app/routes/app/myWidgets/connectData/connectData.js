'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets.connectData', {
      abstract: true,
      url: '/connect-data',
      templateUrl: 'routes/app/myWidgets/connectData/connectData.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {

        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        var card = {
          get: {
            success: function(response) {
              $scope.cardKey = response.data.data;
              // console.log(response.data.data);
              $scope.allArguments = response.data.data.arguments;
              // console.log($scope.allCards);
            },
            error: function(response) {
            }
          }
        };

        $http({
          method: 'GET',
          url: '/api/v1/cards/'+ $state.params.id,
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token,
            'Accept-Language' : $scope.language

          }
        }).then(card.get.success, card.get.error);



      }]
    });

}]);
