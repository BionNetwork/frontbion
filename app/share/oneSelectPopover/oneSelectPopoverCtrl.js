(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('oneSelectPopoverCtrl', ['$scope', '$state', oneSelectPopoverCtrl]);

  function oneSelectPopoverCtrl($scope, $state) {
    console.log('oneSelectPopoverCtrl');
    $scope.selectedItem = $scope.content[0].name;

    $scope.onClickItem = function (item) {
      // $scope.selectedItem = item.name;
      console.log(item);
    };

  }

})();
