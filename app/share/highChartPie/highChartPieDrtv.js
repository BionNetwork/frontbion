(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('highChartPie', highChartPie);

  function highChartPie() {
    return {
      scope: {
        title: '@',
        legend: '=?',
        pieLayout: '@',
        pieVerticalAlign: '@',
        pieAlign: '@',
        pieLegendWidth: '@',
        onAction: '=?',
        data: '=?'
      },
      restrict: 'E',
      controller: 'highChartPieCtrl',
      templateUrl: 'share/highChartPie/highChartPieTmpl.html',
      link: function (scope, element) {
        console.log(scope.data);
        var defaultPieSeries = [
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
        ];

        // var pieSeries = scope.data.series ? scope.data.series : defaultPieSeries;
        scope.filterData = function (pieSeries, pieData) {
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

        var filteredData = scope.filterData(scope.data.series, scope.data.data);

        scope.getPieData = function (d) {
            let data = d.y.map((yData, index) => {
                return {
                    name: yData.name,
                    y: yData.data.reduce((v1, d) => v1 + d, 0)
                }
            })
            let total = data.reduce((v1, d) => v1 + d.y, 0);

            return {
                series: [{
                    name: null,
                    colorByPoint: true,
                    data: data
                }],
                // title: {
                //     align: 'center',
                //     verticalAlign: 'middle',
                //     text: `<span class="donut-title">${(total / 1000000).toFixed(3).replace('.',',')}<small></small></span>`,
                //     useHTML: true,
                //     width: 80,
                //     // x: -10
                // }
            }
        };
        let b = scope.getPieData(filteredData);
        console.log(b.series);
        let a = [{
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
        }];
        console.log(a);



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
            series: b.series
        });


      }
    };
  }
})();
