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
        activationId: '=?',
        getResources: '=?',
        onShowRes: '=?',
        table: '=?',
        onGetPreview: '=?',
        resId: '=?',
        getResourcesTables: '=?',
        onShowTable: '=?'
      },
      restrict: 'E',
      controller: 'toPlugCtrl',
      templateUrl: 'components/toPlug/toPlugTmpl.html'
    };
  }
})();
