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
          Highcharts.chart(element[0], scope.data);
      }
    };
  }
})();
