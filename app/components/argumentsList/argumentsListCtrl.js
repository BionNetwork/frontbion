(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('argumentsListCtrl', ['$scope', 'acivateWidgetDataServ', argumentsListCtrl]);

  function argumentsListCtrl($scope, acivateWidgetDataServ) {
    $scope.mainParams = window.localStorage.getItem('lang') == 'en' ? 'MAIN SETTINGS' : 'ОСНОВНЫЕ ПАРАМЕТРЫ';
    $scope.addColumn = window.localStorage.getItem('lang') == 'en' ? 'Add the value of the column' : 'Добавьте колонку со значением';
    $scope.$watch('allStrings', function () {
      if ($scope.allStrings) {
        // console.log($scope.allStrings);
      }
    });

    $scope.isArgumentBound = function (boundedArguments, curentArgId) {
      if (boundedArguments) {
          for (var i = 0; i < boundedArguments.length; i++) {
            if (boundedArguments[i].argument == curentArgId) {
              return curentArgId;
            }
          }
      }else {
        return 0;
      }
    };

    $scope.onClickActivateWidgetData = function (id) {
      // console.log(id);
      acivateWidgetDataServ.activateWidgetData(id);
    };


  }

})();
