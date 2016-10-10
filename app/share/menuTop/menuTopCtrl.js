(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('menuTopCtrl', ['$scope', '$state', menuTopCtrl]);

  function menuTopCtrl($scope, $state) {
    // console.log($scope.allStrings.header.menu.desktop);
    $scope.contentFirst = [
        {name: "Рабочий стол", url: '/dashboard'},
        {name: "Мои приложения", url: '/mywidgets/view'},
        {name: "Магазин", url: '/cardshop/view'},
        {name: "English", url: ''},
        {name: "Выход", url: '/login'}
    ];

    $scope.contentSecond = [
        {name: "Прибыль по проектам"}
    ];
    // console.log($scope.contentSecond);


  }

})();
