(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('radioButtonSelect', radioButtonSelect);

  function radioButtonSelect() {
    return {
      scope: {
        content: '=?'
      },
      restrict: 'E',
      controller: 'radioButtonSelectCtrl',
      templateUrl: 'share/radioButtonSelect/radioButtonSelectTmpl.html',
      link: function(scope, element, attrs){

  			}
    };
  }
})();
