(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('mainDashboardCtrl', ['$scope', mainDashboardCtrl]);

  function mainDashboardCtrl($scope) {
    console.log('mainDashboardCtrl');
  }

})();
