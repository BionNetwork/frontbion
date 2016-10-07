(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('multiSelectPopover', multiSelectPopover);

  function multiSelectPopover($document) {
    return {
      scope: {
        content: '=?',
        title: '@',
        onChange: '=?'
      },
      restrict: 'E',
      controller: 'multiSelectPopoverCtrl',
      templateUrl: 'share/multiSelectPopover/multiSelectPopoverTmpl.html',
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
