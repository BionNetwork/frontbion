(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('showCard', showCard);

  function showCard() {
    return {
      scope: {
        params: '=?'
      },
      restrict: 'E',
      controller: 'showCardCtrl',
      templateUrl: 'components/showCard/showCardTmpl.html'
    };
  }
})();
