(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('graphicSettings', graphicSettings);

  function graphicSettings() {
    return {
      scope: {
        breadcrumbs: '=?',
        cardKey: '=?',
        activeActivastionId: '=?',
        allArguments: '=?'
      },
      restrict: 'E',
      controller: 'graphicSettingsCtrl',
      templateUrl: 'components/graphicSettings/graphicSettingsTmpl.html'
    };
  }
})();
