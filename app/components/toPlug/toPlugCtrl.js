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

    // console.log($scope.tablePreview);

  }

})();
