(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('graphicSettingsPopoverCtrl', ['$scope', '$state', graphicSettingsPopoverCtrl]);

  function graphicSettingsPopoverCtrl($scope, $state) {
    // console.log('simplePopoverCtrl');
    $scope.onColorChange = function (item) {
      console.log(item);
    };

    $scope.catchChanges = function() {
      
    };

  }

})();
