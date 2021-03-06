(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('menuTop', menuTop);

  function menuTop() {
    return {
      scope: {
        currentUrl: '=?',
        showDashboardList: '=',
        allStrings: '=?',
        showSearch: '=',
        allCategories: '=?',
        filterByCategory: '=?',
        onTypingSearch: '=?',
      },
      restrict: 'E',
      controller: 'menuTopCtrl',
      templateUrl: 'share/menuTop/menuTopTmpl.html'
    };
  }
})();
