(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('graphicSettingsCtrl', ['$scope', graphicSettingsCtrl]);

  function graphicSettingsCtrl($scope) {
      $scope.choosedChart = 'pie';
      $scope.changeChart = function (chart) {
        $scope.choosedChart = chart;
      }

  }

})();
