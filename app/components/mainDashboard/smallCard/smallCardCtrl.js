(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('mainDashboardSmallCardCtrl', ['$scope', mainDashboardSmallCardCtrl]);

  function mainDashboardSmallCardCtrl($scope) {
    // console.log('mainDashboardSmallCardCtrl');


      $scope.changeGrath = function functionName(index) {
        $scope.index = 2;
      };

      $scope.filterData = function (pieSeries, pieData) {
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

      $scope.chartData = $scope.filterData($scope.data.series, $scope.data.data);

  }

})();
