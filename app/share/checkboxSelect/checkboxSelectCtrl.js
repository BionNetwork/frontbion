(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('checkboxSelectCtrl', ['$scope', '$state', checkboxSelectCtrl]);

  function checkboxSelectCtrl($scope, $state) {
    // console.log('colorPopoverCtrl');
    $scope.selectedObject = [];
    $scope.allAtOne = {};
    // rempve selected checboxes
    for (var i = 0; i < $scope.content.length; i++) {
      $scope.content[i].selected = false;
    }

    $scope.checkItem = function (item) {
      item.selected = !item.selected;
      if ($scope.selectedObject.indexOf(item.name) == -1 && item.selected) {
        $scope.selectedObject.push(item.value)
      }
      if (!item.selected) {
        var index = $scope.selectedObject.indexOf(item.name);
        $scope.selectedObject.splice(index, 1);
      }
      $scope.allAtOne = {
        values: $scope.selectedObject,
        type: 'checkbox'
      }
      // console.log($scope.allAtOne);
      $scope.getCheckedItemsForFilter($scope.allAtOne)

    };

    $scope.checkDefaultItem = function (content) {
      for (var i = 0; i < content.length; i++) {
        content[i].selected = false;
      }
      if ($scope.selectedObject.length != 0) {

        $scope.selectedObject = [];
        $scope.getCheckedItemsForFilter("null")
      }
    };

  }

})();
