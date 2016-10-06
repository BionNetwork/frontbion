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
        {name: "Рабочий стол1"},
        {name: "Рабочий стол2"},
        {name: "Рабочий стол3"}
    ];
    // console.log($scope.contentSecond);


  }

})();
