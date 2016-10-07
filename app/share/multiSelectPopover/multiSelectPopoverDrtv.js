(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('multiSelectPopover', multiSelectPopover);

  function multiSelectPopover($document, $timeout) {
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
                setTimeout(function () {
                  let allModals = document.getElementsByClassName('dropmodal');
                  for (var i = 0; i < allModals.length; i++) {
                      console.log(allModals[i].classList.length);
                      if (allModals[i].classList.length == 3) {
                        allModals[i].className = 'dropmodal'
                      }
                    }
                }, 0)
                setTimeout(function () {
                  scope.openContent = !scope.openContent;
                  scope.upAndDown = !scope.upAndDown;
                }, 1)
                $timeout(function () {

                }, 1)
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
