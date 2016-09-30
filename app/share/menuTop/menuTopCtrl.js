(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('menuTopCtrl', ['$scope', '$state', menuTopCtrl]);

  function menuTopCtrl($scope, $state) {
    $scope.url = $state.$current.parent.url.prefix
    $scope.url2 = $state.current.url
    console.log($state.$current.parent);
    // console.log('menuTopCtrl');
  }

})();
