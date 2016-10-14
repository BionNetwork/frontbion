(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('graphicSettingsCtrl', ['$scope', graphicSettingsCtrl]);

  function graphicSettingsCtrl($scope) {
      $scope.choosedChart = 'pie';
      $scope.changeChart = function (chart) {
        $scope.choosedChart = chart;
      }

      $scope.setColor = function (colors) {
        $scope.chartColors = colors;
      };

      var colors = ["rgb(226, 65, 135)", "rgb(215, 226, 70)", "rgb(92, 109, 178)"];

      $scope.setColor(colors);
      $scope.myFn = $scope.myFn || function() {
          console.log('undefined');
       }


      $scope.getChoosedColorsOn = function (colors, legend) {
          $scope.myFn(colors, legend);
      };




  }

})();
