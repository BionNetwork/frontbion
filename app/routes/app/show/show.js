'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.show', {
      url: '/show/:id',
      templateUrl: 'routes/app/show/show.html',
      controller: ['$scope', function($scope) {

      }]
    });

}]);
