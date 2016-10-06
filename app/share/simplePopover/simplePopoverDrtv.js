(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('simplePopover', simplePopover);

  function simplePopover($document, $window) {
    return {
      scope: {
        title: '@',
        placement: '@',
        content: '=?',
        iconName: '@',
        showIcon: '='
      },
      restrict: 'E',
      require: '?ngModel',
      controller: 'simplePopoverCtrl',
      templateUrl: 'share/simplePopover/simplePopoverTmpl.html',
      link: function(scope, element, attrs){
          scope.openContent = false;

          scope.openDropContent = function () {
            scope.openContent = !scope.openContent;


          };

          scope.closeDropContent = function () {
            scope.openContent = false;
          };

          scope.doSth = function () {
            console.log('123');
          };


  			}
    };
  }
})();
