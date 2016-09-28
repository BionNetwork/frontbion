(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('viewItemCtrl', ['$scope', viewItemCtrl]);

  function viewItemCtrl($scope) {
    // console.log('viewItemCtrl');
    $scope.$watch('cardKey', function () {
      if ($scope.cardKey) {
        $scope.cardData = $scope.cardKey[0];
      }
    });
  }

})();
