(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlugLoadCtrl', ['$scope', '$state', '$location','$toPlugLoadSrv', toPlugLoadCtrl]);

  function toPlugLoadCtrl($scope, $state, $location, $toPlugLoadSrv) {

    $scope.showChooseColumn = false;

    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });

    // console.log($scope.getResources);
    $scope.upload = function(files) {
      if (!files) {
        return;
      } else {
        $toPlugLoadSrv.addFiles(files, $scope.activationId, $scope.getResources);
      }
    };

    $scope.onSelectedColumn = function (index, key) {
      $scope.selectedColumnName = key;
      $scope.selectedColumn = index;
      $scope.showChooseColumn = true;
    };

    $scope.onChooseColumn = function () {
      // console.log($scope.selectedColumnName);
      // console.log($scope.activationId);
      // console.log($scope.choosedTableName);
      // console.log($location.search().agumentId);
      $scope.agumentId = $location.search().agumentId;
      $scope.argumentBound($scope.activationId,
        $scope.choosedTableResourceId, $scope.agumentId,
        $scope.choosedTableName, $scope.selectedColumnName);
      // console.log($state);
    };


  }

})();
