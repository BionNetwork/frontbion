(function() {
  'use strict';
  angular
  .module('HotelApp')
  .controller('leftNavigationCtrl', ['$scope', leftNavigationCtrl]);

  function leftNavigationCtrl($scope) {
    console.log('leftNavigationCtrl');
  }

})();
