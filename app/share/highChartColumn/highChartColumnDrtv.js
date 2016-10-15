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
          var columnSeries = scope.filterData ? scope.getColumnData(scope.filterData).series : defaultColumnSeries;
          var columnSeriesxAxis = scope.filterData ? scope.getColumnData(scope.filterData).xAxis : defaultColumnxAxis;
          var columnSeriesyAxis = scope.filterData ? scope.getColumnData(scope.filterData).yAxis : defaultColumnyAxis;


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

          scope.onActionColumn = function (colors, legend) {
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
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
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
      }
    };
  }
})();
