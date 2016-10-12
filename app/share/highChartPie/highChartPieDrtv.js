(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('highChartPie', highChartPie);

  function highChartPie() {
    return {
      scope: {
        pieData: '=?',
        title: '@',
        legend: '=?',
      },
      restrict: 'E',
      controller: 'highChartPieCtrl',
      templateUrl: 'share/highChartPie/highChartPieTmpl.html',
      link: function (scope, element) {
        Highcharts.chart(element[0], {
          // colors: ['#395C9B', '#923532', '#7B972E', '#6A538D', '#3B83A1', '#CB7221', '#F2E200'],
          title: {
              y: -10,
              text: scope.title
          },
          legend: scope.legend,
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie',
              spacing: [0,0,0,0],
              animation: false,
              width: null,
              height: null
            },
            plotOptions: {
                series: {
                    animation: true
                },
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    innerSize: '60%',
                    showInLegend: true,
                    minSize: 176,
                    states: {
                        hover: {
                            halo: {size: 2}
                        }
                    }
                }
            },
            series: [{
                data: scope.pieData
            }]
        });
      }
    };
  }
})();
