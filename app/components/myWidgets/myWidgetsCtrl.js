(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('myWidgetsCtrl', ['$scope', myWidgetsCtrl]);

  function myWidgetsCtrl($scope) {
    // console.log('myWidgetsCtrl');
    $scope.idEnglish = window.localStorage.getItem('lang') == 'en' ? false : true;

    $scope.getCategoryOfCard = function (cards, id) {
      console.log(id);
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
    };
  }

})();
