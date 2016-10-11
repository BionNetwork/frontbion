(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('colorPopover', colorPopover);

  function colorPopover() {
    return {
      scope: {
        
      },
      restrict: 'E',
      controller: 'colorPopoverCtrl',
      templateUrl: 'share/colorPopover/colorPopoverTmpl.html',
      link: function(scope, element, attrs){

  			}
    };
  }
})();
