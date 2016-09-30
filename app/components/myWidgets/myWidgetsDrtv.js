(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('myWidgets', myWidgets);

  function myWidgets() {
    return {
      scope: {
        allCards: '=?'
      },
      restrict: 'E',
      controller: 'myWidgetsCtrl',
      templateUrl: 'components/myWidgets/myWidgetsTmpl.html'
    };
  }
})();
