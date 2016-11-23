(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('highChartColumn', highChartColumn);

  function highChartColumn() {
    return {
      scope: {
        data: '=?',
        onActionColumn: '=?',
        onFilterColumn: '=?',
        onActionAxis: '=?',
        onActionAxisX: '=?',
        filterData: '=?'
      },
      restrict: 'E',
      controller: 'highChartColumnCtrl',
      templateUrl: 'share/highChartColumn/highChartColumnTmpl.html',
      link: function (scope, element) {
          var defaultColumnSeries = [{
              name: 'Tokyo',
              data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

          }, {
              name: 'New York',
              data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

          }, {
              name: 'London',
              data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

          }];
          var defaultColumnxAxis = {
              categories: [
                  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul',
                  'Aug','Sep','Oct','Nov','Dec'
              ],
              crosshair: true
          };
          var defaultColumnyAxis = {
              min: 0,
              title: {
                  text: 'Rainfall (mm)'
              }
          };
          scope.getColumnData = function (d) {
            return {
                  xAxis: {
                      categories: d.x.data
                  },
                  series: d.y.map(yData => {
                      return {
                          data: yData.data,
                          marker: {enabled: false},
                          name: yData.name
                      }
                  }),
                  yAxis: {
                      title: null
                  }
              }
          };
          // var columnSeries = scope.filterData ? scope.getColumnData(scope.filterData).series : defaultColumnSeries;
          // var columnSeriesxAxis = scope.filterData ? scope.getColumnData(scope.filterData).xAxis : defaultColumnxAxis;
          // var columnSeriesyAxis = scope.filterData ? scope.getColumnData(scope.filterData).yAxis : defaultColumnyAxis;

          scope.$watch('filterData', function() {
            if (scope.filterData) {
              var columnSeries = scope.getColumnData(scope.filterData).series;
              var columnSeriesxAxis = scope.getColumnData(scope.filterData).xAxis;
              var columnSeriesyAxis = scope.getColumnData(scope.filterData).yAxis;
              Highcharts.chart(element[0],
                {
                  colors: ["#4bc2ed", "#ffbb71", "#ff818b", '#6adc53', '#8b56c6'],
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: ''
                  },
                  subtitle: {
                      text: ''
                  },
                  xAxis: columnSeriesxAxis,
                  yAxis: columnSeriesyAxis,
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: columnSeries
                }
              );
            }
          })

          // Highcharts.chart(element[0],
          //   {
          //     colors: ["rgb(33, 187, 239)", "rgb(156, 205, 100)", "rgb(72, 165, 234)"],
          //     chart: {
          //         type: 'column'
          //     },
          //     title: {
          //         text: ''
          //     },
          //     subtitle: {
          //         text: ''
          //     },
          //     xAxis: columnSeriesxAxis,
          //     yAxis: columnSeriesyAxis,
          //     tooltip: {
          //         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          //         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          //             '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          //         footerFormat: '</table>',
          //         shared: true,
          //         useHTML: true
          //     },
          //     plotOptions: {
          //         column: {
          //             pointPadding: 0.2,
          //             borderWidth: 0
          //         }
          //     },
          //     series: columnSeries
          //   }
          // );

          scope.onActionColumn = function (colors, legend) {
            scope.legendDef = legend;
            scope.colorsDef = colors;
            scope.xAxisInit = {
              showLabel: null,
              periodNumber: 12,
              text: '',
              showScale: true,
              footNumber: 1,
              footNumberText: 12,
              osWidth: 1
            };
            scope.yAxisInit = {
              showLabel: "middle",
              periodNumber: 12,
              text: 'Temperature (°C)',
              showScale: true,
              footNumber: 1,
              footNumberText: 12,
              osWidth: 1
            };

            scope.yAxisDefShow = scope.yAxisDef ? scope.yAxisDef : scope.yAxisInit;
            scope.xAxisDefShow = scope.xAxisDef ? scope.xAxisDef : scope.xAxisInit;

            Highcharts.chart(element[0],
              {
                colors: colors,
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                legend: {
                    enabled: legend
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {
                       enabled: scope.xAxisDefShow.showScale,
                       style: {
                         'font-size': scope.xAxisDefShow.footNumberText+'px'
                       }
                    },
                    gridLineWidth: scope.xAxisDefShow.osWidth,
                    tickInterval: scope.xAxisDefShow.footNumber,
                    title: {
                        text: scope.xAxisDefShow.text,
                        enabled: null,
                        style: {
                          'font-size': scope.xAxisDefShow.periodNumber+'px'
                        }
                    },
                },
                yAxis: {
                    // lineWidth: 1,
                    labels: {
                       enabled: scope.yAxisDefShow.showScale,
                       style: {
                         'font-size': scope.yAxisDefShow.footNumberText+'px'
                       }
                    },
                    gridLineWidth: scope.yAxisDefShow.osWidth,
                    tickInterval: scope.yAxisDefShow.footNumber,
                    title: {
                        text: scope.yAxisDefShow.text,
                        enabled: null,
                        style: {
                          'font-size': scope.yAxisDefShow.periodNumber+'px'
                        }
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                        animation: false,
                    }
                },
                series: [{
                    name: 'Tokyo',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                }, {
                    name: 'New York',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                }, {
                    name: 'London',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                }]
              }
            );
          };

          scope.onFilterColumn = function (data) {
            // console.log(data);
            var newSeries = scope.getColumnData(data);
            // console.log(newSeries);
            Highcharts.chart(element[0],
              {
                colors: ["rgb(33, 187, 239)", "rgb(156, 205, 100)", "rgb(72, 165, 234)"],
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: newSeries.xAxis,
                yAxis: newSeries.yAxis,
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: newSeries.series
              }
            );
          };

          scope.onActionAxis = function (title, showLabel, periodString, periodNumber, showScale,
            footNumber, footNumberText, showOs, osNumber) {

              var defColors = scope.colorss ? scope.colorss : ["#4bc2ed", "#ffbb71", "#ff818b", '#6adc53', '#8b56c6'];
              var defLegend = scope.legendDef ? scope.legendDef : true;
              var enableAxis = showLabel ? "middle" : periodString = null;
              var osWidth = showOs ? osNumber : 0;

              scope.yAxisDef = {
                showLabel: enableAxis,
                text: periodString,
                periodNumber: periodNumber,
                showScale: showScale,
                footNumber: footNumber,
                footNumberText: footNumberText,
                osWidth: osWidth
              };
              scope.xAxisInit = {
                showLabel: null,
                periodNumber: 12,
                text: '',
                showScale: true,
                footNumber: 1,
                footNumberText: 12,
                osWidth: 1
              };

              scope.xAxisDefShow = scope.xAxisDef ? scope.xAxisDef : scope.xAxisInit;

              Highcharts.chart(element[0],
                {
                  colors: defColors,
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: ''
                  },
                  subtitle: {
                      text: ''
                  },
                  legend: {
                      enabled: defLegend
                  },
                  xAxis: {
                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                      labels: {
                         enabled: scope.xAxisDefShow.showScale,
                         style: {
                           'font-size': scope.xAxisDefShow.footNumberText+'px'
                         }
                      },
                      gridLineWidth: scope.xAxisDefShow.osWidth,
                      tickInterval: scope.xAxisDefShow.footNumber,
                      title: {
                          text: scope.xAxisDefShow.text,
                          enabled: null,
                          style: {
                            'font-size': scope.xAxisDefShow.periodNumber+'px'
                          }
                      },
                  },
                  yAxis: {
                      // lineWidth: 1,
                      labels: {
                         enabled: showScale,
                         style: {
                           'font-size': footNumberText+'px'
                         }
                      },
                      gridLineWidth: osWidth,
                      tickInterval: footNumber,
                      title: {
                          text: periodString,
                          enabled: null,
                          style: {
                            'font-size': periodNumber+'px'
                          }
                      },
                      plotLines: [{
                          value: 0,
                          width: 1,
                          color: '#808080'
                      }]
                  },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0,
                          animation: false,
                      }
                  },
                  series: [{
                      name: 'Tokyo',
                      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                  }, {
                      name: 'New York',
                      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                  }, {
                      name: 'London',
                      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                  }]
                }
              );

          };

          scope.onActionAxisX = function (title, showLabel, periodString, periodNumber, showScale,
            footNumber, footNumberText, showOs, osNumber) {

              var defColors = scope.colorss ? scope.colorss : ["rgb(33, 187, 239)", "rgb(156, 205, 100)", "rgb(72, 165, 234)"];
              var defLegend = scope.legendDef ? scope.legendDef : true;
              var enableAxis = showLabel ? "middle" : periodString = null;
              var osWidth = showOs ? osNumber : 0;

              scope.yAxisInit = {
                showLabel: "middle",
                periodNumber: 12,
                text: 'Temperature (°C)',
                showScale: true,
                footNumber: 1,
                footNumberText: 12,
                osWidth: 1
              };

              scope.xAxisDef = {
                showLabel: enableAxis,
                text: periodString,
                periodNumber: periodNumber,
                showScale: showScale,
                footNumber: footNumber,
                footNumberText: footNumberText,
                osWidth: osWidth
              };

              scope.yAxisDefShow = scope.yAxisDef ? scope.yAxisDef : scope.yAxisInit;

              Highcharts.chart(element[0],
                {
                  colors: defColors,
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: ''
                  },
                  subtitle: {
                      text: ''
                  },
                  legend: {
                      enabled: defLegend
                  },
                  xAxis: {
                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                      labels: {
                         enabled: showScale,
                         style: {
                           'font-size': footNumberText+'px'
                         }
                      },
                      gridLineWidth: osWidth,
                      tickInterval: footNumber,
                      title: {
                          text: periodString,
                          enabled: null,
                          style: {
                            'font-size': periodNumber+'px'
                          }
                      },
                  },
                  yAxis: {
                      // lineWidth: 1,
                      labels: {
                         enabled: scope.yAxisDefShow.showScale,
                         style: {
                           'font-size': scope.yAxisDefShow.footNumberText+'px'
                         }
                      },
                      gridLineWidth: scope.yAxisDefShow.osWidth,
                      tickInterval: scope.yAxisDefShow.footNumber,
                      title: {
                          text: scope.yAxisDefShow.text,
                          enabled: null,
                          style: {
                            'font-size': scope.yAxisDefShow.periodNumber+'px'
                          }
                      },
                      plotLines: [{
                          value: 0,
                          width: 1,
                          color: '#808080'
                      }]
                  },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0,
                          animation: false,
                      }
                  },
                  series: [{
                      name: 'Tokyo',
                      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                  }, {
                      name: 'New York',
                      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                  }, {
                      name: 'London',
                      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                  }]
                }
              );
          };


      }
    };
  }
})();
