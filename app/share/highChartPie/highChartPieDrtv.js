(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('highChartPie', highChartPie);

  function highChartPie() {
    return {
      scope: {
        pieData: '=?',
        title: '@'
      },
      restrict: 'E',
      controller: 'highChartPieCtrl',
      templateUrl: 'share/highChartPie/highChartPieTmpl.html',
      link: function (scope, element) {
        Highcharts.chart(element[0], {
          title: {
              y: -10,
              text: scope.title
          },
          legend: {
              layout: 'vertical',
              verticalAlign: 'middle',
              align: 'right',
              width: 90,
              margin: 5,
              symbolWidth: 10,
              symbolHeight: 10,
              // symbolRadius: 6,
              itemStyle: {
                  fontWeight: 'normal',
                  fontSize: '10px',
                  color: '#727272'
              },
              itemMarginBottom: 5
          },
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
                    animation: false
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
