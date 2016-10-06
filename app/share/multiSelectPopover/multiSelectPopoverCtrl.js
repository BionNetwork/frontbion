(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('multiSelectPopoverCtrl', ['$scope', '$state', multiSelectPopoverCtrl]);

  function multiSelectPopoverCtrl($scope, $state) {

        $scope.selectedObject = [];

        $scope.clickedItems = function (item) {
          $scope.selectedObject.push(item)
          item.selected = !item.selected;
        };

        $scope.clickedDefault = function (content) {
          // console.log($scope.defaultItems);
          console.log($scope.selectedObject);
        };
  }

})();
