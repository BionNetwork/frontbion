(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('toPlugLoad', toPlugLoad);

  function toPlugLoad() {
    return {
      scope: {
        activationId: '=?',
        getResources: '=?',
        tablePreview: '=?'
      },
      restrict: 'E',
      controller: 'toPlugLoadCtrl',
      templateUrl: 'components/toPlug/toPlugLoad/toPlugLoadTmpl.html'
    };
  }
})();
