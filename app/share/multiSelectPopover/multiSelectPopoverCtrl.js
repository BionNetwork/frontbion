(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('multiSelectPopoverCtrl', ['$scope', '$state', multiSelectPopoverCtrl]);

  function multiSelectPopoverCtrl($scope, $state) {

        $scope.selectedObject = [];

        $scope.clickedItems = function (item) {
          // $scope.selectedObject.forEach(function (value) {
          //   if (item != value) item.push(value);
          // });
          // $scope.selectedObject.push(item)
          item.selected = !item.selected;
          if ($scope.selectedObject.indexOf(item.name) == -1 && item.selected) {
            $scope.selectedObject.push(item.name)
          }
          if (!item.selected) {
            var index = $scope.selectedObject.indexOf(item.name);
            $scope.selectedObject.splice(index, 1);
          }
        };

        $scope.clickedDefault = function (content) {
          // console.log($scope.defaultItems);
          // console.log($scope.selectedObject);
          for (var i = 0; i < content.length; i++) {
            content[i].selected = false;
          }
          $scope.selectedObject = []
        };



  }

})();
