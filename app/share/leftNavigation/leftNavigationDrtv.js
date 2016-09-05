(function() {
  'use strict';
  angular
  .module('HotelApp')
  .directive('leftNavigation', leftNavigation);

  function leftNavigation() {
    return {
      scope: {

      },
      restrict: 'E',
      controller: 'leftNavigationCtrl',
      templateUrl: 'share/leftNavigation/leftNavigationTmpl.html'
    };
  }
})();
