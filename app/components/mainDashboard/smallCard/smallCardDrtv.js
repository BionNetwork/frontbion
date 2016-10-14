(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('mainDashboardSmallCard', mainDashboardSmallCard);

  function mainDashboardSmallCard() {
    return {
      scope: {
        data: '=?',
        index: '=?'
      },
      restrict: 'E',
      controller: 'mainDashboardSmallCardCtrl',
      templateUrl: 'components/mainDashboard/smallCard/smallCardTmpl.html',
      link: function (scope, element, attr) {
      }
    };
  }
})();
