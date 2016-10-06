(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('simplePopoverCtrl', ['$scope', '$state', simplePopoverCtrl]);

  function simplePopoverCtrl($scope, $state) {
    // console.log('simplePopoverCtrl');
    $scope.click = function (name) {
        console.log(name);
    }

  }

})();
