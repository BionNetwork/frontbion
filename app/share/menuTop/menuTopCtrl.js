(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('menuTopCtrl', ['$scope', '$state', menuTopCtrl]);

  function menuTopCtrl($scope, $state) {
    $scope.contentFirst = [
        {name: "Рабочий стол"},
        {name: "Мои приложения"},
        {name: "Магазин"}
    ];

    $scope.contentSecond = [
        {name: "Прибыль по проектам"}
    ];
    // console.log($scope.contentSecond);


  }

})();
