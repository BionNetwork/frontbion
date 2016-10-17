(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('menuTopCtrl', ['$scope', '$state', '$window', menuTopCtrl]);

  function menuTopCtrl($scope, $state, $window) {
    // console.log($scope.allStrings.header.menu.desktop);
    $scope.exitString = window.localStorage.getItem('lang') == 'en' ? "Exit" : "Выход";
    $scope.$watch('allStrings' ,function () {
      if ($scope.allStrings) {
        $scope.menuPopoverContent = [
            {name: $scope.allStrings.header.menu.desktop, url: '/dashboard'},
            {name: $scope.allStrings.header.menu.myWidgets, url: '/mywidgets/view'},
            {name: $scope.allStrings.header.menu.widgetsStore, url: '/cardshop/view'},
            {name: $scope.allStrings.header.menu.language },
            {name: $scope.exitString, url: '/login'}
        ];

      }
    });

    $scope.contentSecondRu = [
        {name: "Прибыль по проектам"}
    ];
    $scope.contentSecondEng = [
        {name: "Profit project"}
    ];
    $scope.dashboardContent = window.localStorage.getItem('lang') == 'en' ? $scope.contentSecondEng : $scope.contentSecondRu;
    $scope.dashboardTitle = window.localStorage.getItem('lang') == 'en' ? 'Desktops' : 'Рабочие столы';
    $scope.widgetsTitle = window.localStorage.getItem('lang') == 'en' ? 'Type of card' : 'Тип карточек';
    $scope.priceTitle = window.localStorage.getItem('lang') == 'en' ? 'Any price' : 'Любая цена';
    $scope.resetFilters = window.localStorage.getItem('lang') == 'en' ? 'Reset filters' : 'Сбросить фильтры';
    $scope.searchMyCards = window.localStorage.getItem('lang') == 'en' ? 'Search my cards' : 'Поиск по моим карточкам';
    $scope.widgetsContentRu = {
      name: "Все типы приложений",
      id: 0
    };
    $scope.widgetsContentEng = {
      name: "All types of applications",
      id: 0
    };
    $scope.widgetsContent = window.localStorage.getItem('lang') == 'en' ? $scope.widgetsContentEng : $scope.widgetsContentRu;
    $scope.contentPriceRu = [
        {name: "Любая цена"}
    ];
    $scope.contentPriceEng = [
        {name: "Any price"}
    ];
    $scope.contentPrice = window.localStorage.getItem('lang') == 'en' ? $scope.contentPriceEng : $scope.contentPriceRu;
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
    // categories
    $scope.$watch('allCategories', function () {
      if ($scope.allCategories) {
        $scope.allCategories.unshift($scope.widgetsContent);
        $scope.newCat = $scope.allCategories.filter(function (item) {
          return item.id != 6;
        });
      }
    });

  }

})();
