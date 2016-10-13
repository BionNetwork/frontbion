(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('viewItemCtrl', ['$scope', '$state', viewItemCtrl]);

  function viewItemCtrl($scope, $state) {
    $scope.url = $state.$current.parent.url.prefix
    $scope.$watch('cardKey', function () {
      if ($scope.cardKey) {
        $scope.cardData = $scope.cardKey;
      }
    });


    $scope.slickConfig = {
        enabled: true,
        autoplay: true,
        draggable: false,
        autoplaySpeed: 3000,
        method: {},
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
            }
        }
    };

    $scope.isBought = function (cardId, allBoughtCards) {
      if (allBoughtCards && allBoughtCards.length > 0) {
        for (var i = 0; i < allBoughtCards.length; i++) {
          if (allBoughtCards[i].card.id == cardId) {
            return true;
          }
        }
      }
    }


  }

})();
