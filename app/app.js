;(function() {
  'use strict';
    angular.module('HotelApp', ['ui.router'])
           .config(['$httpProvider', function ($httpProvider) {
              // window.location.hash = '/';
           }]);

  angular.module('HotelApp').controller('mainCtrl', ['$scope', function($scope) {
            console.log('mainCtrl');

  }]);

})();
