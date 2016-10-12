(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('highChartColumn', highChartColumn);

  function highChartColumn() {
    return {
      scope: {
        data: '=?'
      },
      restrict: 'E',
      controller: 'highChartColumnCtrl',
      templateUrl: 'share/highChartColumn/highChartColumnTmpl.html',
      link: function (scope, element) {
          Highcharts.chart(element[0],
            {
              chart: {
                    renderTo: 'container',
                    type: 'column'
                  },
                  yAxis: {
                      title: {
                          text: '',
                          useHTML: true,
                          style: {
                              "-webkit-transform": "rotate(90deg)",
                              "-moz-transform": "rotate(90deg)",
                              "-o-transform": "rotate(90deg)"
                          }
                      }
                  },
                  series: [{
                      data: [23,45,12,89,123,12,5]
                  }]
              }
          );
      }
    };
  }
})();
