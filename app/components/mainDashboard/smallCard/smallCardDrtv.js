(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('mainDashboardSmallCard', mainDashboardSmallCard);

  function mainDashboardSmallCard() {
    return {
      scope: {

      },
      restrict: 'E',
      controller: 'mainDashboardSmallCardCtrl',
      templateUrl: 'components/mainDashboard/smallCard/smallCardTmpl.html'
    };
  }
})();
