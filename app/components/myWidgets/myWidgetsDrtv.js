(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('myWidgets', myWidgets);

  function myWidgets() {
    return {
      scope: {

      },
      restrict: 'E',
      controller: 'myWidgetsCtrl',
      templateUrl: 'components/myWidgets/myWidgetsTmpl.html'
    };
  }
})();
