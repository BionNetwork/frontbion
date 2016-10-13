(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('radioButtonSelectCtrl', ['$scope', '$state', radioButtonSelectCtrl]);

  function radioButtonSelectCtrl($scope, $state) {
    // console.log('colorPopoverCtrl');
    $scope.selectedObject = [];
    $scope.allAtOne = {};

    $scope.checkRadioItem = function (item, index) {

      if ($scope.selectedObject.indexOf(item.name) == -1) {
        $scope.selectedObject = [];
        $scope.selectedObject.push(item.name)
        console.log($scope.selectedObject);
        // filter from here
      }

    };

    $scope.defaultRadioItem = function () {
      if ($scope.selectedObject.length != 0) {
          $scope.selectedObject = [];
          console.log($scope.selectedObject);
          // filter from here
      }
    };


  }

})();
