'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore', {
      abstract: true,
      url: '/cardshop',
      templateUrl: 'routes/app/widgetsStore/widgetsStore.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {
        $scope.currentUrl = '/cardshop'
        $scope.showSearch = true;
        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        $scope.$watch('allStrings', function () {
          if ($scope.allStrings) {
            $scope.breadcrumbs = {
              url: '/cardshop',
              name: $scope.allStrings.header.menu.widgetsStore
            };
          }
        });
        var categories = {
        get: {
            success: function(response) {
              $scope.allCategories = response.data.data;
              $scope.allCategoriesForCards = response.data.data;
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
        $scope.filterByCategory = function (item) {
          // console.log(item);
          if (item.id == 0) {
            $scope.allCategoriesForCards = $scope.allCategories;
          }else if (item.id > 0) {
            $scope.allCategoriesForCards = $scope.allCategories.filter(function (cat) {
                return cat.id == item.id;
            });
          }
        };

        $scope.onTypingSearch = function (text) {
          console.log(text);
          $scope.searchCard = text;
        };


      }]
    });

}]);
