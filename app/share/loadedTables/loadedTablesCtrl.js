(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('loadedTablesCtrl', ['$scope', '$state', '$timeout', loadedTablesCtrl]);

  function loadedTablesCtrl($scope, $state, $timeout) {
    
        $scope.getResourcesTables($scope.resourseId).then(function(items) {
          $scope.items = JSON.parse(JSON.stringify(items));
        });


  }

})();
