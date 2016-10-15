(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('showCard', showCard);

  function showCard() {
    return {
      scope: {
        params: '=?',
        dashboardCards: '=?'
      },
      restrict: 'E',
      controller: 'showCardCtrl',
      templateUrl: 'components/showCard/showCardTmpl.html',
      link: function (scope, element, attr) {
        // console.log(scope.dashboardCards);
      }
    };
  }
})();
