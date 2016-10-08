(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlugCtrl', ['$scope', toPlugCtrl]);

  function toPlugCtrl($scope) {

    $scope.onShowRes = $scope.onShowRes || function() {
      console.error('Define onShowRes function in toPlug route');
    }

    $scope.onGetPreview = $scope.onGetPreview || function() {
      console.error('Define onGetPreview function in toPlug route');
    }

    $scope.getTableName = function (tableName, resourseId) {
      $scope.choosedTableName = tableName;
      $scope.choosedTableResourceId = resourseId;
    }

    // console.log($scope.tablePreview);

  }

})();
