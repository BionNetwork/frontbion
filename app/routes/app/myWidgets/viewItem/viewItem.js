'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets.item', {
      url: '/item/:id',
      templateUrl: 'routes/app/myWidgets/viewItem/viewItem.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {

        var cardId = $state.params.id;
        $scope.token = window.localStorage.getItem('token');
        var cards = {
          get: {
            success: function(response) {
              $scope.cardKey = response.data.data;
              // console.log($scope.cardKey);
            },
            error: function(response) {
            }
          }
        };

        $http({
          method: 'GET',
          url: '/api/v1/cards',
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token
          },
          params: {
            id: cardId
          }
        }).then(cards.get.success, cards.get.error);



      }]
    });

}]);
