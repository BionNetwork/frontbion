(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('joinDataPopoverCtrl', ['$scope', '$state', joinDataPopoverCtrl]);

  function joinDataPopoverCtrl($scope, $state) {
        $scope.popoverHeadName = "Choose";
        $scope.popoverHeadShow = false;



        $scope.changePopoverHead = function (item) {
          $scope.popoverHeadName = item.name;
          $scope.popoverHeadShow = true;
          $scope.openContent = false;
          $scope.upAndDown = false;
        };


  }

})();
