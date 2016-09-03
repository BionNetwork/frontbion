(function() {
  'use strict';
  angular
  .module('HotelApp')
  .directive('menuTop', menuTop);

  function menuTop() {
    return {
      scope: {
        
      },
      restrict: 'E',
      controller: 'menuTopCtrl',
      templateUrl: 'templates/menuTop/menuTopTmpl.html'
    };
  }
})();
