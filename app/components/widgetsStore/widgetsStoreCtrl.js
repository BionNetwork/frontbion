(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('widgetsStoreCtrl', ['$scope', widgetsStoreCtrl]);

  function widgetsStoreCtrl($scope) {
    // console.log('widgetsStoreCtrl');
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
  }

})();
