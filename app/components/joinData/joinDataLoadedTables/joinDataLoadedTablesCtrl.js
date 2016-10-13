(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('joinDataLoadedTablesCtrl', ['$scope', '$state', '$timeout', joinDataLoadedTablesCtrl]);

  function joinDataLoadedTablesCtrl($scope, $state, $timeout) {

    $scope.$watch('downloadTableNames', function() {
      if ($scope.downloadTableNames && !$scope.items) {
        $scope.getResourcesTables($scope.resourseId).then(function(items) {
          $scope.items = JSON.parse(JSON.stringify(items));
        });
      }



    });

  }

})();
