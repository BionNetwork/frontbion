(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('argumentsListCtrl', ['$scope', argumentsListCtrl]);

  function argumentsListCtrl($scope) {

    $scope.$watch('allStrings', function () {
      if ($scope.allStrings) {
        // console.log($scope.allStrings);
      }
    });

    $scope.isArgumentBound = function (boundedArguments, curentArgId) {
      if (boundedArguments) {
          for (var i = 0; i < boundedArguments.length; i++) {
            if (boundedArguments[i].argument == curentArgId) {
              return curentArgId;
            }
          }
      }else {
        return 0;
      }
    };


  }

})();
