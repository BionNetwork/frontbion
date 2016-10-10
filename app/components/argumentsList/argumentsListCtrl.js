(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('argumentsListCtrl', ['$scope', argumentsListCtrl]);

  function argumentsListCtrl($scope) {

    $scope.$watch('allStrings', function () {
      if ($scope.allStrings) {
        console.log($scope.allStrings);
      }
    });
  }

})();
