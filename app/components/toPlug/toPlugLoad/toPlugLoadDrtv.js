(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('toPlugLoad', toPlugLoad);

  function toPlugLoad() {
    return {
      scope: {
        parentUrl: '=?',
        activationId: '=?',
        getResources: '=?',
        tablePreview: '=?',
        choosedTableName: '=?',
        choosedTableResourceId: '=?',
        argumentBound: '=?',
        allStrings: '=?',
      },
      restrict: 'E',
      controller: 'toPlugLoadCtrl',
      templateUrl: 'components/toPlug/toPlugLoad/toPlugLoadTmpl.html',
      link: function (scope, element, attr) {
            $(".scrollbar").niceScroll();
      }
    };
  }
})();
