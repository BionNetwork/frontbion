(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('mainDashboardSmallCardCtrl', ['$scope', mainDashboardSmallCardCtrl]);

  function mainDashboardSmallCardCtrl($scope) {
    // console.log('mainDashboardSmallCardCtrl');

  

      $scope.changeGrath = function functionName(index) {
        $scope.index = 2;
      }

  }

})();
