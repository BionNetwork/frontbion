(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('oneSelectPopoverCtrl', ['$scope', '$state', oneSelectPopoverCtrl]);

  function oneSelectPopoverCtrl($scope, $state) {
        $scope.$watch('content', function () {
          if ($scope.content) {
              $scope.popoverHeadName = $scope.content[0].name;
          }
        });


        $scope.changePopoverHead = function (item) {
          $scope.popoverHeadName = item.name;
          $scope.openContent = false;
          $scope.upAndDown = false;
        };

        $scope.onClickItem = function (item) {
          if ($scope.onChange) {
            $scope.onChange(item);
          }
        };


  }

})();
