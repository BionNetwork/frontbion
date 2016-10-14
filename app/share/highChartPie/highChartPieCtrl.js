(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('highChartPieCtrl', ['$scope', highChartPieCtrl]);

  function highChartPieCtrl($scope) {
    // console.log('highChartPieCtrl');
    $scope.onAction = function(item) {
      console.log(item);
    }



  }

})();
