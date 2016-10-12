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
          $('.slick-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            adaptiveHeight: true
          });
          // element[0].querySelector('.your-class').slick();
      }
    };
  }
})();
