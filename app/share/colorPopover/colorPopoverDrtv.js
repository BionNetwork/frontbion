(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('colorPopover', colorPopover);

  function colorPopover() {
    return {
      scope: {
        onColorChange: '=?',
        onClickChangeColor: '=?'
      },
      restrict: 'E',
      controller: 'colorPopoverCtrl',
      templateUrl: 'share/colorPopover/colorPopoverTmpl.html',
      link: function(scope, element, attrs){

        scope.chooseColors = function (color, index) {
          scope.color = {
            "background-color" : color
          }

          scope.currentIndex = index;
          scope.onColorChange(color);
          setTimeout(function() {
            scope.onClickChangeColor();
          }, 0)
        };
  			}
    };
  }
})();
