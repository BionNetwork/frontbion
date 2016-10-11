(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('menuTopCtrl', ['$scope', '$state', '$window', menuTopCtrl]);

  function menuTopCtrl($scope, $state, $window) {
    // console.log($scope.allStrings.header.menu.desktop);
    $scope.$watch('allStrings' ,function () {
      if ($scope.allStrings) {
        $scope.menuPopoverContent = [
            {name: $scope.allStrings.header.menu.desktop, url: '/dashboard'},
            {name: $scope.allStrings.header.menu.myWidgets, url: '/mywidgets/view'},
            {name: $scope.allStrings.header.menu.widgetsStore, url: '/cardshop/view'},
            {name: $scope.allStrings.header.menu.language, url: ''},
            {name: "Выход", url: '/login'}
        ];

      }
    });
    $scope.contentSecond = [
        {name: "Прибыль по проектам"}
    ];
    // functions
    $scope.onChange = function (item) {
      if (item == 'English' || item == 'Русский') {
        if (window.localStorage.getItem('lang') == 'ru') {
          window.localStorage.setItem('lang', 'en');
          $window.location.reload();
        }else if(window.localStorage.getItem('lang') == 'en' || !window.localStorage.getItem('lang')){
          window.localStorage.setItem('lang', 'ru');
          $window.location.reload();
        }
      };
    };
    // console.log($scope.contentSecond);


  }

})();
