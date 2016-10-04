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
        {name: "Рабочий стол2"},
        {name: "Мои приложения2"},
        {name: "Магазин2"}
    ];
    // console.log($scope.contentSecond);


  }

})();
