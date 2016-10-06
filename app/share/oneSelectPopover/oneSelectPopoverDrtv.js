(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('oneSelectPopover', oneSelectPopover);

  function oneSelectPopover($document) {
    return {
      scope: {
        title: '@',
        placement: '@',
        content: '=?',
        iconName: '@'
      },
      restrict: 'E',
      controller: 'oneSelectPopoverCtrl',
      templateUrl: 'share/oneSelectPopover/oneSelectPopoverTmpl.html',
      link: function(scope, element, attrs){
            scope.openContent = false;

            scope.openDropContent = function () {
              scope.openContent = !scope.openContent;
              scope.upAndDown = !scope.upAndDown;


            };

            scope.closeDropContent = function () {
              scope.openContent = false;
              scope.upAndDown = false;
            };

            element.bind('click', function(event) {
               event.stopPropagation();
            });
            $document.bind('click', function(){
                scope.openContent = false;
                scope.upAndDown = false;
                scope.$apply();
            });
  		}
    };
  }
})();
