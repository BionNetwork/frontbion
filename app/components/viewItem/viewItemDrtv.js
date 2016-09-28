(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('viewItem', viewItem);

  function viewItem() {
    return {
      scope: {
        cardKey: '=?'
      },
      restrict: 'E',
      controller: 'viewItemCtrl',
      templateUrl: 'components/viewItem/viewItemTmpl.html'
    };
  }
})();
