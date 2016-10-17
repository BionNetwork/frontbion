(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('myWidgets', myWidgets);

  function myWidgets() {
    return {
      scope: {
        myAllCards: '=?',
        allCategoriesForCards: '=?',
      },
      restrict: 'E',
      controller: 'myWidgetsCtrl',
      templateUrl: 'components/myWidgets/myWidgetsTmpl.html'
    };
  }
})();
