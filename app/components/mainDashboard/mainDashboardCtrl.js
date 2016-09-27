(function() {
  'use strict';
  angular
  .module('HotelApp')
  .controller('mainDashboardCtrl', ['$scope', mainDashboardCtrl]);

  function mainDashboardCtrl($scope) {
    console.log('mainDashboardCtrl');
  }

})();
