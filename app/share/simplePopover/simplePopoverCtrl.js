(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('simplePopoverCtrl', ['$scope', '$state', simplePopoverCtrl]);

  function simplePopoverCtrl($scope, $state) {
    // console.log('simplePopoverCtrl');
    $scope.click = function (name) {
      if ($scope.onChange) {
          return $scope.onChange(name);
      }
    }

  }

})();
