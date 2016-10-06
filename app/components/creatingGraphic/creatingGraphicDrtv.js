(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('creatingGraphic', creatingGraphic);

  function creatingGraphic() {
    return {
      scope: {
        // allArguments: '=?',
        // cardKey: '=?',
        // allResources: '=?'
      },
      restrict: 'E',
      controller: 'creatingGraphicCtrl',
      templateUrl: 'components/creatingGraphic/creatingGraphicTmpl.html'
    };
  }
})();
