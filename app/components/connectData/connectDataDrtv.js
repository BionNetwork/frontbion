(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('connectData', connectData);

  function connectData() {
    return {
      scope: {
        allArguments: '=?',
        cardKey: '=?'
      },
      restrict: 'E',
      controller: 'connectDataCtrl',
      templateUrl: 'components/connectData/connectDataTmpl.html'
    };
  }
})();
