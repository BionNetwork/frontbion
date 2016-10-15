(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('graphicSettingsCtrl', ['$scope', graphicSettingsCtrl]);

  function graphicSettingsCtrl($scope) {

      $scope.graphStringRu = {
        filters: 'Фильтры',
        period: 'Период',
        prog: 'Прогноз на',
        fact: 'Факт'
      };
      $scope.graphStringEng = {
        filters: 'Filters',
        period: 'Period',
        prog: 'Forecast',
        fact: 'Fact'
      };
      $scope.graphString = window.localStorage.getItem('lang') == 'en' ? $scope.graphStringEng : $scope.graphStringRu;


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
        if ($scope.choosedChart == 'pie') {
          $scope.changeIssues(colors, legend);
        }
        if ($scope.choosedChart == 'line') {
          $scope.changeIssues2(colors, legend);
        }
        if ($scope.choosedChart == 'column') {
          $scope.changeIssues3(colors, legend);
        }
      };




  }

})();
