(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('simplePopover', simplePopover);

  function simplePopover($document) {
    return {
      scope: {
        title: '=?',
        placement: '@',
        content: '=?',
        iconName: '@',
        showIcon: '=',
        onChange: '=?'
      },
      restrict: 'E',
      controller: 'simplePopoverCtrl',
      templateUrl: 'share/simplePopover/simplePopoverTmpl.html',
      link: function(scope, element, attrs){


          scope.openDropContent = function () {

            element[0].querySelector('.dropmodal').classList.toggle("dropmodal--active");
            // scope.upAndDown = !scope.upAndDown;
            var allModals = document.getElementsByClassName('dropmodal');
            for (var i = 0; i < allModals.length; i++) {
              // console.log(allModals[i]);
              if (allModals[i].classList.length == 3 && element[0].querySelector('.dropmodal') != allModals[i]) {
                allModals[i].classList.remove("dropmodal--active");
              }

            }


          };

          scope.closeDropContent = function () {
            element[0].querySelector('.dropmodal').classList.remove("dropmodal--active");
          };

          element.bind('click', function(event) {
             event.stopPropagation();
          });
          $document.bind('click', function(){
            element[0].querySelector('.dropmodal').classList.remove("dropmodal--active");
            scope.$apply();
          });

  			}
    };
  }
})();
