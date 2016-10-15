(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('highChartLine', highChartLine);

  function highChartLine() {
    return {
      scope: {
        data: '=?',
        onActionLine: '=?',
        onFilterLine: '=?',
        filterData: '=?'
      },
      restrict: 'E',
      controller: 'highChartLineCtrl',
      templateUrl: 'share/highChartLine/highChartLineTmpl.html',
      link: function (scope, element) {
        // console.log(scope.filterData);
          var defaultLineSeries = [{
              name: 'Tokyo',
              data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
          }, {
              name: 'New York',
              data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
          }, {
              name: 'Berlin',
              data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
          }];
          var defaultLinexAxis = {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          };
          var defaultLineyAxis = {
              title: {
                  text: 'Temperature (°C)'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          };
          scope.getLineData = function (d) {
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
          var lineSeries = scope.filterData ? scope.getLineData(scope.filterData).series : defaultLineSeries;
          var lineSeriesxAxis = scope.filterData ? scope.getLineData(scope.filterData).xAxis : defaultLinexAxis;
          var lineSeriesyAxis = scope.filterData ? scope.getLineData(scope.filterData).yAxis : defaultLineyAxis;


          Highcharts.chart(element[0],
              {
                colors: ["rgb(33, 187, 239)", "rgb(156, 205, 100)", "rgb(72, 165, 234)"],
                  title: {
                      text: '',
                      x: -20 //center
                  },
                  subtitle: {
                      text: '',
                      x: -20
                  },
                  xAxis: lineSeriesxAxis,
                  yAxis: lineSeriesyAxis,
                  tooltip: {
                      valueSuffix: '°C'
                  },
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom',
                      borderWidth: 0
                  },
                  series: lineSeries
              }
          );

          scope.onActionLine = function (colors, legend) {
            Highcharts.chart(element[0],
                {
                    colors: colors,
                    title: {
                        text: 'Monthly Average Temperature',
                        x: -20 //center
                    },
                    subtitle: {
                        text: 'Source: WorldClimate.com',
                        x: -20
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    plotOptions: {
                      line: {
                          animation: false
                      }
                    },
                    yAxis: {
                        title: {
                            text: 'Temperature (°C)'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        valueSuffix: '°C'
                    },
                    legend: {
                        enabled: legend,
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: [{
                        name: 'Tokyo',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                    }, {
                        name: 'New York',
                        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                    }, {
                        name: 'Berlin',
                        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                    }]
                }
            );
          };

          scope.onFilterLine = function (data) {
            // console.log(data);
            var newSeries = scope.getLineData(data);
            // console.log(newSeries);
            Highcharts.chart(element[0],
                {
                  colors: ["rgb(33, 187, 239)", "rgb(156, 205, 100)", "rgb(72, 165, 234)"],
                    title: {
                        text: '',
                        x: -20 //center
                    },
                    subtitle: {
                        text: '',
                        x: -20
                    },
                    xAxis: newSeries.yAxis,
                    yAxis: newSeries.xAxis,
                    tooltip: {
                        valueSuffix: '°C'
                    },
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        borderWidth: 0
                    },
                    series: newSeries.series
                }
            );
          };
      }
    };
  }
})();
