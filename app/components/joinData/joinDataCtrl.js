(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('joinDataCtrl', ['$scope', joinDataCtrl]);

  function joinDataCtrl($scope) {
    // console.log($scope.parentUrl);
    // $scope.stepJoin = window.localStorage.getItem('lang') == 'en' ? 'STEP 3: Merge Data Sources.' : 'ШАГ 3. Объеденить источники данных.';
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
