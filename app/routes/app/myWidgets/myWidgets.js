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
        $scope.showDashboardList = false;
        $scope.token = window.localStorage.getItem('token');
        $scope.language = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'ru';

        $scope.breadcrumbs = {
          url: '/mywidgets',
          name: 'Мои приложения'
        };


      }]
    });

}]);
