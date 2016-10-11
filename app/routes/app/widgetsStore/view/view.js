'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore.view', {
      url: '/view',
      templateUrl: 'routes/app/widgetsStore/view/view.html',
      controller: ['$scope', '$http', function($scope, $http) {

        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        var cards = {
          get: {
            success: function(response) {
              $scope.allCards = response.data.data;
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
          }
        }).then(cards.get.success, cards.get.error);

        // functions
        $scope.$watch('changeVisibility', function () {
          if ($scope.changeVisibility) {
            $scope.changeVisibility(true);
          }
        });

      }]
    });

}]);
