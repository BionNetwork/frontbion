(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlagLoadedTablesCtrl', ['$scope', '$state', '$timeout', toPlagLoadedTablesCtrl]);

  function toPlagLoadedTablesCtrl($scope, $state, $timeout) {

    $scope.$watch('downloadTableNames', function() {
      if ($scope.downloadTableNames && !$scope.items) {
        $scope.getResourcesTables($scope.resourseId).then(function(items) {
          $scope.items = JSON.parse(JSON.stringify(items));
        });
      }
    });

    $scope.onShowTablePreview = function (tableName) {
      $scope.showTablePreview(tableName, $scope.resourseId);
      $scope.getTableName(tableName, $scope.resourseId);
    };

  }

})();
