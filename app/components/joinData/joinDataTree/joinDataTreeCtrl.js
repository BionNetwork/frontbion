(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('joinDataTreeCtrl', ['$scope', '$state', '$timeout', joinDataTreeCtrl]);

  function joinDataTreeCtrl($scope, $state, $timeout) {
    $scope.contentSecond = [
        {name: "Прибыль по проектам"},
        {name: "Прибыль по проектам1"},
        {name: "Прибыль по проектам2"},
        {name: "Прибыль по проектам3"},
        {name: "Прибыль по проектам4"},
        {name: "Прибыль по проектам5"},
    ];

    $scope.myCounter = 0;

  }

})();
