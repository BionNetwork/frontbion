;(function() {
  'use strict';
    angular.module('BIONApp', ['ui.router'])
           .config(['$httpProvider', function ($httpProvider) {
              // window.location.hash = '/';
           }]);

  angular.module('BIONApp').controller('mainCtrl', ['$scope', function($scope) {
            console.log('mainCtrl');

  }]);

})();
