(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('widgetsStore', widgetsStore);

  function widgetsStore() {
    return {
      scope: {
        allCards: '=?',
        allCategoriesForCards: '=?'
      },
      restrict: 'E',
      controller: 'widgetsStoreCtrl',
      templateUrl: 'components/widgetsStore/widgetsStoreTmpl.html',
      link: function (scope, element, attr) {
          $('.slick-slider').slick({
            dots: false,
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            draggable: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: '20000',
            swipe: true
          });
      }
    };
  }
})();
