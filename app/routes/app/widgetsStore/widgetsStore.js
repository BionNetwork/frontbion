'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.widgetsStore', {
      url: '/cardshop',
      templateUrl: 'routes/app/widgetsStore/widgetsStore.html',
      controller: ['$scope', function($scope) {

      }]
    });

}]);
