(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('widgetsStoreCtrl', ['$scope', widgetsStoreCtrl]);

  function widgetsStoreCtrl($scope) {
    // console.log('widgetsStoreCtrl');
    $scope.idEnglish = window.localStorage.getItem('lang') == 'en' ? false : true;
    $scope.ruString = {
      mark: 'Маркетинг',
      strat: 'Стратегический менеджмент',
      mon: 'Мониторинг и аналитика',
      upr: 'Управленческая отчетность',
      cat: 'Финансы / коммерческие операции',
      all: 'Все',
      skl: 'Склад',
      rek: 'Маркетинг и реклама',
      per: 'Персонал',
      prod: 'Продажа и сбыт',
      ruk: 'Руководителю',
    };
    $scope.engString = {
      mark: 'Marketing',
      strat: 'Strategic management',
      mon: 'Monitoring and Analytics',
      upr: 'Management reporting',
      cat: 'Finance / commercial operations',
      all: 'All',
      skl: 'Stock',
      rek: 'Marketing and Advertising',
      per: 'Staff',
      prod: 'Sales and marketing',
      ruk: 'Head',
    };
    $scope.string = window.localStorage.getItem('lang') == 'en' ? $scope.engString : $scope.ruString;

    $scope.getCategoryOfCard = function (cards, id) {
      if (id == 0 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.id == 0) ;
        });
        return newCards;
      }
      if (id == 1 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.id == 13 || item.id == 6 || item.id == 12 || item.id == 8 || item.id == 24) ;
        });
        return newCards;
      }
      if (id == 2 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.id == 14 || item.id == 15 || item.id == 17 || item.id == 18 || item.id == 19  || item.id == 22) ;
        });
        return newCards;
      }
      if (id == 3 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.id == 9 || item.id == 20) ;
        });
        return newCards;
      }
      if (id == 4 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.id == 7 || item.id == 16) ;
        });
        return newCards;
      }
      if (id == 5 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.id == 11 || item.id == 10) ;
        });
        return newCards;
      }
      if (id == 6 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.id == 0) ;
        });
        return newCards;
      }
    };



  }

})();
