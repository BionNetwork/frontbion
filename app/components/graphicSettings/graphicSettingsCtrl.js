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


      $scope.choosedChart = 'column';
      $scope.changeChart = function (chart) {
        $scope.choosedChart = chart;
      }

      $scope.setColor = function (colors) {
        $scope.chartColors = colors;
      };

      var colors = ["rgb(226, 65, 135)", "rgb(215, 226, 70)", "rgb(92, 109, 178)"];

      $scope.setColor(colors);


      $scope.getChoosedColorsOn = function (colors, legend) {
        if ($scope.choosedChart == 'pie') {
          $scope.changeIssuesPie(colors, legend);
        }
        if ($scope.choosedChart == 'line') {
          $scope.changeIssuesLine(colors, legend);
        }
        if ($scope.choosedChart == 'column') {
          $scope.changeIssuesColumn(colors, legend);
        }
      };

      $scope.getChoosedAxisOn = function (title, showLabel, periodString, periodNumber, showScale,
        footNumber, footNumberText, showOs, osNumber) {
          if ($scope.choosedChart == 'line') {
            if (title == 'Axis Y') {
              $scope.changeIssuesAxisLine(title, showLabel, periodString, periodNumber, showScale,
                footNumber, footNumberText, showOs, osNumber);
            }
            if (title == 'Axis X') {
              $scope.changeIssuesAxisLineX(title, showLabel, periodString, periodNumber, showScale,
                footNumber, footNumberText, showOs, osNumber);
            }
          }
          if ($scope.choosedChart == 'column') {
            if (title == 'Axis Y') {
              $scope.changeIssuesAxisColumn(title, showLabel, periodString, periodNumber, showScale,
                footNumber, footNumberText, showOs, osNumber);
            }
            if (title == 'Axis X') {
              $scope.changeIssuesAxisColumnX(title, showLabel, periodString, periodNumber, showScale,
                footNumber, footNumberText, showOs, osNumber);
            }
          }

      };



  }

})();
