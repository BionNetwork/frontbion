(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('graphicSettingsCtrl', ['$scope', 'filterOneSelectServ', graphicSettingsCtrl]);

  function graphicSettingsCtrl($scope, filterOneSelectServ) {
      $scope.intervalTitle = 'Интервал';
      $scope.intervalContent = [
          { name: "Выбрать интревал", query: null, type: "interval" },
          { name: "Месяц", query: "toStartOfMonth", type: "interval" },
          { name: "Квартал", query: "toStartOfQuarter", type: "interval" },
          { name: "Год", query: "toStartOfYear", type: "interval" },
      ];
      $scope.onFilterOneSelect = function (query) {
        var newDataForChart = $scope.filterData($scope.graphicSettingsSeries, $scope.graphicSettingsData);
        console.log(filterOneSelectServ.onInterval(query));;
        // if ($scope.choosedChart == 'pie') {
        //   $scope.onFilterChartPie(newDataForChart)
        //   // console.log();
        // }
      }

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

      $scope.filterData = function (pieSeries, pieData) {
        var series = [...pieSeries.y];
        var data = [...pieData];
        return {
            y: series.map(s => ({
                data: data.map(row => row[s.index]),
                name: s.header
            })),
            x: {
                name: pieSeries.x.header,
                data: data.map(row => row[pieSeries.x.index])
            }
        }
      };

      $scope.$watch('graphicSettingsData', function() {
        if ($scope.graphicSettingsData) {
          $scope.$watch('graphicSettingsSeries', function () {
            if ($scope.graphicSettingsSeries) {
              // console.log($scope.filterData($scope.graphicSettingsSeries, $scope.graphicSettingsData));
              $scope.chartData = $scope.filterData($scope.graphicSettingsSeries, $scope.graphicSettingsData);
            }
          })
        }
      });
      
  }

})();
