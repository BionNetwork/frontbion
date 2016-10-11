'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore.item', {
      url: '/item/:id',
      templateUrl: 'routes/app/widgetsStore/viewItem/viewItem.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {

        var cardId = $state.params.id;
        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

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
          url: '/api/v1/cards/'+ $state.params.id,
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token,
            'Accept-Language' : $scope.language
          }
        }).then(cards.get.success, cards.get.error);


        // functions
        $scope.$watch('changeVisibility', function () {
          if ($scope.changeVisibility) {
            $scope.changeVisibility(false);
          }
        });


      }]
    });

}]);
