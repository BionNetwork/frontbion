(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('viewItemCtrl', ['$scope', '$state', viewItemCtrl]);

  function viewItemCtrl($scope, $state) {
    $scope.url = $state.$current.parent.url.prefix
    $scope.$watch('cardKey', function () {
      if ($scope.cardKey) {
        $scope.cardData = $scope.cardKey[0];
      }
    });
  }

})();
