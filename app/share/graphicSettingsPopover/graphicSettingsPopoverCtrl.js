(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('graphicSettingsPopoverCtrl', ['$scope', '$state', graphicSettingsPopoverCtrl]);

  function graphicSettingsPopoverCtrl($scope, $state) {
    // console.log('simplePopoverCtrl');
    $scope.legendStringRu = {
      legend: 'Легенда',
      save: 'Сохранить',
      cancel: 'Отменить'
    };
    $scope.legendStringEng = {
      legend: 'Legend',
      save: 'Save',
      cancel: 'Cancel'
    };
    $scope.legendString = window.localStorage.getItem('lang') == 'en' ? $scope.legendStringEng : $scope.legendStringRu;




    $scope.showLegend = true;
    $scope.onColorChange = function (item) {
      console.log(item);

    };

    // $scope.click = function() {
    //   console.log(document.getElementsByClassName('col-indicator'));
    // };

  }

})();
