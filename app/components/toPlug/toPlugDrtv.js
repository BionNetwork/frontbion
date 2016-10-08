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
        getResourcesTables: '=?',
        showTablePreview: '=?',
        tablePreview: '=?',
        argumentBound: '=?'
      },
      restrict: 'E',
      controller: 'toPlugCtrl',
      templateUrl: 'components/toPlug/toPlugTmpl.html'
    };
  }
})();
