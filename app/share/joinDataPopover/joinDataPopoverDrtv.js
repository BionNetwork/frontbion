(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('joinDataPopover', joinDataPopover);

  function joinDataPopover($document) {
    return {
      scope: {
        title: '@',
        placement: '@',
        content: '=?',
        iconName: '@'
      },
      restrict: 'E',
      controller: 'joinDataPopoverCtrl',
      templateUrl: 'share/joinDataPopover/joinDataPopoverTmpl.html',
      link: function(scope, element, attrs){
            // scope.openContent = false;

            scope.openDropContent = function () {
              // scope.openContent = !scope.openContent;
              element[0].querySelector('.dropmodal').classList.toggle("dropmodal--active");
              scope.upAndDown = !scope.upAndDown;
              let allModals = document.getElementsByClassName('dropmodal');
              for (var i = 0; i < allModals.length; i++) {
                // console.log(allModals[i]);
                if (allModals[i].classList.length == 3 && element[0].querySelector('.dropmodal') != allModals[i]) {
                  allModals[i].classList.remove("dropmodal--active");
                }

              }

            };

            scope.closeDropContent = function () {
              // scope.openContent = false;
              element[0].querySelector('.dropmodal').classList.remove("dropmodal--active");
              scope.upAndDown = false;
            };

            element.bind('click', function(event) {
               event.stopPropagation();
            });
            $document.bind('click', function(){
                // scope.openContent = false;
                element[0].querySelector('.dropmodal').classList.remove("dropmodal--active");
                scope.upAndDown = false;
                scope.$apply();
            });
  		}
    };
  }
})();
