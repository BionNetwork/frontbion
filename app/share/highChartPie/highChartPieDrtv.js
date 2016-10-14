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
        pieLayout: '@',
        pieVerticalAlign: '@',
        pieAlign: '@',
        pieLegendWidth: '@',
        onAction: '=?'
      },
      restrict: 'E',
      controller: 'highChartPieCtrl',
      templateUrl: 'share/highChartPie/highChartPieTmpl.html',
      link: function (scope, element) {

        scope.onAction = function(colors, legend) {
          // scope.getChartColors = ["red", "rgb(156, 205, 100)", "red"]
          console.log(colors);
          Highcharts.chart(element[0], {
            colors: colors,
            title: {
                y: -10,
                text: ''
            },
            legend: {
                enabled: legend,
                layout: scope.pieLayout,//"horizontal" or "vertical"
                verticalAlign: scope.pieVerticalAlign,//top, middle or bottom
                animation: false,
                align: scope.pieAlign, //left, center and right.
                width: +scope.pieLegendWidth,//width 90 or 300px
                margin: 5,
                symbolWidth: 10,
                symbolHeight: 10,
                itemStyle: {
                    fontWeight: 'normal',
                    fontSize: '12px',
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
                  data: [
                      {
                          name: "Microsoft Internet Explorer",
                          y: 56.33
                      }, {
                          name: "Chrome",
                          y: 24.03,
                      }, {
                          name: "Firefox",
                          y: 10.38
                      }
                    ]
              }]
          });

        }

        var getChartColors = scope.getChartColors ? scope.getChartColors : ["rgb(33, 187, 239)", "rgb(156, 205, 100)", "rgb(72, 165, 234)"];
        Highcharts.chart(element[0], {
          colors: ["rgb(33, 187, 239)", "rgb(156, 205, 100)", "rgb(72, 165, 234)"],
          title: {
              y: -10,
              text: ''
          },
          legend: {
              layout: scope.pieLayout,//"horizontal" or "vertical"
              verticalAlign: scope.pieVerticalAlign,//top, middle or bottom
              animation: false,
              align: scope.pieAlign, //left, center and right.
              width: +scope.pieLegendWidth,//width 90 or 300px
              margin: 5,
              symbolWidth: 10,
              symbolHeight: 10,
              itemStyle: {
                  fontWeight: 'normal',
                  fontSize: '12px',
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
                data: [
                    {
                        name: "Microsoft Internet Explorer",
                        y: 56.33
                    }, {
                        name: "Chrome",
                        y: 24.03,
                    }, {
                        name: "Firefox",
                        y: 10.38
                    }
                  ]
            }]
        });


      }
    };
  }
})();
