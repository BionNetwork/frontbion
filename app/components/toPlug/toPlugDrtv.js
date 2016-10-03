(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('toPlug', toPlug);

  function toPlug() {
    return {
      scope: {
        allArguments: '=?',
        cardKey: '=?',
        allResources: '=?',
        onLoadTable: '=?'
      },
      restrict: 'E',
      controller: 'toPlugCtrl',
      templateUrl: 'components/toPlug/toPlugTmpl.html'
    };
  }
})();
