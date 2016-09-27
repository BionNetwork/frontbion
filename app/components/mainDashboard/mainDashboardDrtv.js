(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('mainDashboard', mainDashboard);

  function mainDashboard() {
    return {
      scope: {

      },
      restrict: 'E',
      controller: 'mainDashboardCtrl',
      templateUrl: 'components/mainDashboard/mainDashboardTmpl.html'
    };
  }
})();
