(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('graphicSettingsPopover', graphicSettingsPopover);

  function graphicSettingsPopover($document) {
    return {
      scope: {
        title: '=?',
        placement: '@',
        content: '=?',
        iconName: '@',
        showIcon: '=',
        onChange: '=?',
        activeActivastionId: '=?',
        getChoosedColorsOn: '=?',
      },
      restrict: 'E',
      controller: 'graphicSettingsPopoverCtrl',
      templateUrl: 'share/graphicSettingsPopover/graphicSettingsPopoverTmpl.html',
      link: function(scope, element, attrs){
          scope.onClickChangeColor = function() {
            // console.log(element[0].getElementsByClassName('col-indicator').style);
            var colorsElement = element[0].getElementsByClassName('col-indicator');
            var colors = [];
            for (var i = 0; i < colorsElement.length; i++) {

              colors.push(colorsElement[i].style.backgroundColor)
            }
            // console.log(colors);
            scope.getChoosedColorsOn(colors, scope.showLegend);

          };

          scope.onClickShowLegend = function () {
            scope.showLegend = !scope.showLegend;
            var colorsElement = element[0].getElementsByClassName('col-indicator');
            var colors = [];
            for (var i = 0; i < colorsElement.length; i++) {

              colors.push(colorsElement[i].style.backgroundColor)
            }
            // console.log(colors);
            scope.getChoosedColorsOn(colors, scope.showLegend);
          };

          scope.openDropContent = function () {

            element[0].querySelector('.dropmodal').classList.toggle("dropmodal--active");
            // scope.upAndDown = !scope.upAndDown;
            let allModals = document.getElementsByClassName('dropmodal');
            for (var i = 0; i < allModals.length; i++) {
              // console.log(allModals[i]);
              if (allModals[i].classList.length == 3 && element[0].querySelector('.dropmodal') != allModals[i]) {
                allModals[i].classList.remove("dropmodal--active");
              }

            }


          };

          scope.closeDropContent = function () {
            element[0].querySelector('.dropmodal').classList.remove("dropmodal--active");
            let defaultColors = ["rgb(33, 187, 239)", "rgb(156, 205, 100)", "rgb(72, 165, 234)"];
            scope.getChoosedColorsOn(defaultColors, true);
          };

          scope.onClickClose = function (item) {
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
