(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('toPlug', toPlug);

  function toPlug() {
    return {
      scope: {
        breadcrumbs: '=?',
        parentUrl: '=?',
        allArguments: '=?',
        cardKey: '=?',
        allResources: '=?',
        activationId: '=?',
        getResources: '=?',
        getResourcesTables: '=?',
        showTablePreview: '=?',
        tablePreview: '=?',
        argumentBound: '=?',
        allStrings: '=?',
        loadExcelFiles: '=?'
      },
      restrict: 'E',
      controller: 'toPlugCtrl',
      templateUrl: 'components/toPlug/toPlugTmpl.html',
      link: function (scope, element, attr) {
            $(".scrollbar").niceScroll();
      }
    };
  }
})();
