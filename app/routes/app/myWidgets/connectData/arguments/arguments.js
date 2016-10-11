'use strict';

angular.module('BIONApp')
      .config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('root.myWidgets.connectData.arguments', {
      url: '/arguments/:id',
      templateUrl: 'routes/app/myWidgets/connectData/arguments/arguments.html',
      controller: ['$scope', '$http', '$state', function($scope, $http, $state) {


      }]
    });

}]);
