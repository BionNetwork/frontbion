'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets.view', {
      url: '/view',
      templateUrl: 'routes/app/myWidgets/view/view.html',
      controller: ['$scope', '$http', function($scope, $http) {

        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        var myCards = {
          get: {
            success: function(response) {
              $scope.myAllCards = response.data.data;
              // console.log($scope.allCards);
            },
            error: function(response) {
            }
          }
        };

        $http({
          method: 'GET',
          url: '/api/v1/purchases',
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token,
            'Accept-Language' : $scope.language

          }
        }).then(myCards.get.success, myCards.get.error);



      }]
    });

}]);
