(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('checkboxSelect', checkboxSelect);

  function checkboxSelect() {
    return {
      scope: {
        content: '=?',
      },
      restrict: 'E',
      controller: 'checkboxSelectCtrl',
      templateUrl: 'share/checkboxSelect/checkboxSelectTmpl.html',
      link: function(scope, element, attrs){

  			}
    };
  }
})();
