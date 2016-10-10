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
      templateUrl: 'components/viewItem/viewItemTmpl.html',
      link: function (scope, element, attr) {
          $('.your-class').slick();
          // element[0].querySelector('.your-class').slick();
      }
    };
  }
})();
