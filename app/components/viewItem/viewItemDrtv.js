(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('viewItem', viewItem);

  function viewItem() {
    return {
      scope: {
        cardKey: '=?',
        breadcrumbs: '=?'
      },
      restrict: 'E',
      controller: 'viewItemCtrl',
      templateUrl: 'components/viewItem/viewItemTmpl.html',
      link: function (scope, element, attr) {
          $('.slick-slider').slick();
          // element[0].querySelector('.your-class').slick();
      }
    };
  }
})();
