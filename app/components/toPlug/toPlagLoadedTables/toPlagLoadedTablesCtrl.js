(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlagLoadedTablesCtrl', ['$scope', '$state', '$timeout', toPlagLoadedTablesCtrl]);

  function toPlagLoadedTablesCtrl($scope, $state, $timeout) {

    $scope.getResourcesTables($scope.resourseId).then(function(items) {
      $scope.items = JSON.parse(JSON.stringify(items));
    });

    $scope.onShowTable = $scope.onShowTable || function() {
    	console.error('Define onShowtable function in to plug route');
    }
  }

})();
