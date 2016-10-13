'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets.connectData', {
      abstract: true,
      url: '/connect-data',
      templateUrl: 'routes/app/myWidgets/connectData/connectData.html',
      controller: ['$scope', '$http', '$state', '$httpParamSerializer', function($scope, $http, $state, $httpParamSerializer) {

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
        var activations = {
          get: {
            success: function(response) {
              if (response.data.data.length > 0) {
                $scope.activationId = response.data.data[0].id;
              }else {
                $scope.onActivateCardAgain($state.params.id);
              }
              // console.log(response.data.data);
              // $scope.getResources(response.data.data[0].id);
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

        $http({
          method: 'GET',
          url: '/api/v1/activations',
          headers: {
            'X-AUTHORIZE-TOKEN': $scope.token
          },
          params: {
            card_id: $state.params.id,
            activation_status: 'pending'
          }
        }).then(activations.get.success, activations.get.error);
        // $http({
        //   method: 'GET',
        //   url: '/api/v1/cards/'+ $state.params.id,
        //   headers: {
        //     'X-AUTHORIZE-TOKEN': $scope.token
        //
        //   }
        // }).then(boundedArguments.get.success, boundedArguments.get.error);

        $scope.$watch('changeVisibility', function () {
          if ($scope.changeVisibility) {
            $scope.changeVisibility(false);
          }
        });

        // functions

        $scope.onActivateCardAgain = function (cardId) {
          var activateAgain = {
            get: {
              success: function(response) {
                // console.log(response.data.data);
                $scope.activateCardAgain(response.data.data.id);
              },
              error: function(response) {
              }
            }
          };

          $http({
            method: 'POST',
            url: '/api/v1/purchases',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-AUTHORIZE-TOKEN': $scope.token
            },
            data: $.param({
                  'card': cardId
                })
          }).then(activateAgain.get.success, activateAgain.get.error);

          // functions
                  $scope.activateCardAgain = function (id) {

                    var pendingId = {
                      get: {
                        success: function(response) {
                          $scope.activationId = response.data.data.id;

                        },
                        error: function(response) {
                        }
                      }
                    };

                    $http({
                      method: 'POST',
                      url: '/api/v1/purchases/' + id + '/activations',
                      headers: {
                        'X-AUTHORIZE-TOKEN': $scope.token

                      }
                    }).then(pendingId.get.success, pendingId.get.error);
                  };

        };

      }]
    });

}]);
