'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets', {
      url: '/mywidgets',
      templateUrl: 'routes/app/myWidgets/myWidgets.html',
      controller: ['$scope', function($scope) {

      }]
    });

}]);
