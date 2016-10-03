(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlugCtrl', ['$scope', toPlugCtrl]);

  function toPlugCtrl($scope) {


    $scope.onLoadTable = $scope.onLoadTable || function() {
      console.error("Define onLoadTable function in toPlug router");
    };


  }

})();
