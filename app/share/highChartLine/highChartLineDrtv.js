(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('highChartLine', highChartLine);

  function highChartLine() {
    return {
      scope: {
        data: '=?'
      },
      restrict: 'E',
      controller: 'highChartLineCtrl',
      templateUrl: 'share/highChartLine/highChartLineTmpl.html',
      link: function (scope, element) {
          Highcharts.chart(element[0],
            {
                  title: {
                      text: 'Temperature data'
                  },
                  xAxis: {
                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },

                  series: [{
                      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                  }]
              }
          );
      }
    };
  }
})();
