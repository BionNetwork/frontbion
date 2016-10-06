(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('graphicSettings', graphicSettings);

  function graphicSettings() {
    return {
      scope: {
        // allArguments: '=?',
        // cardKey: '=?',
        // allResources: '=?'
      },
      restrict: 'E',
      controller: 'graphicSettingsCtrl',
      templateUrl: 'components/graphicSettings/graphicSettingsTmpl.html'
    };
  }
})();
