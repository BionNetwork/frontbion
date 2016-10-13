(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('viewItem', viewItem);

  function viewItem() {
    return {
      scope: {
        cardKey: '=?',
        breadcrumbs: '=?',
        allBoughtCards: '=?'
      },
      restrict: 'E',
      controller: 'viewItemCtrl',
      templateUrl: 'components/viewItem/viewItemTmpl.html',
      link: function (scope, element, attr) {
          $('.slick-slider').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
          });
          // element[0].querySelector('.your-class').slick();
      }
    };
  }
})();
