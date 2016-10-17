'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets', {
      abstract: true,
      url: '/mywidgets',
      templateUrl: 'routes/app/myWidgets/myWidgets.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {
        $scope.currentUrl = '/mywidgets';
        $scope.showSearch = true;
        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        // $scope.breadcrumbs = {
        //   url: '/mywidgets',
        //   name: 'Мои приложения'
        // };
        $scope.$watch('allStrings', function () {
          if ($scope.allStrings) {
            $scope.breadcrumbs = {
              url: '/mywidgets',
              name: $scope.allStrings.header.menu.myWidgets
            };
          }
        });

        var categories = {
        get: {
            success: function(response) {
              $scope.allCategories = response.data.data;
              // console.log($scope.allCards);
            },
            error: function(response) {
            }
          }
        };
        $http({
        method: 'GET',
        url: '/api/v1/cards/categories',
        headers: {
          'X-AUTHORIZE-TOKEN': $scope.token,
          'Accept-Language' : $scope.language
        }
        }).then(categories.get.success, categories.get.error);

        // functions

        $scope.changeVisibility = function (item) {
          $scope.showSearch = item;
        };


      }]
    });

}]);
