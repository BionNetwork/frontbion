(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('myWidgetsCtrl', ['$scope', myWidgetsCtrl]);

  function myWidgetsCtrl($scope) {
    // console.log('myWidgetsCtrl');
    $scope.idEnglish = window.localStorage.getItem('lang') == 'en' ? false : true;

    $scope.getCategoryOfCard = function (cards, id) {
      if (id == 0 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.card.id == 0) ;
        });
        return newCards;
      }
      if (id == 1 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.card.id == 13 || item.card.id == 6 || item.card.id == 12 || item.card.id == 8 || item.card.id == 24) ;
        });
        return newCards;
      }
      if (id == 2 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.card.id == 14 || item.card.id == 15 || item.card.id == 17 || item.card.id == 18 || item.card.id == 19  || item.card.id == 22) ;
        });
        return newCards;
      }
      if (id == 3 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.card.id == 9 || item.card.id == 20) ;
        });
        return newCards;
      }
      if (id == 4 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.card.id == 7 || item.card.id == 16) ;
        });
        return newCards;
      }
      if (id == 5 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.card.id == 11 || item.card.id == 10) ;
        });
        return newCards;
      }
      if (id == 6 && cards) {
        var newCards = cards.filter(function (item) {
          return (item.card.id == 0) ;
        });
        return newCards;
      }
    };
  }

})();
