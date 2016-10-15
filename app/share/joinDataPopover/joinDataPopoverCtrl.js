(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('joinDataPopoverCtrl', ['$scope', '$state', joinDataPopoverCtrl]);

  function joinDataPopoverCtrl($scope, $state) {
        $scope.popoverHeadName = "Choose";
        $scope.popoverHeadShow = false;
        $scope.stringJoin = window.localStorage.getItem('lang') == 'en' ? "JOIN" : "СВЯЗАТЬ";
        $scope.stringTitle = window.localStorage.getItem('lang') == 'en' ? "Tables" : "Таблицы";


        $scope.changePopoverHead = function (item) {
          $scope.popoverHeadName = item.name;
          $scope.popoverHeadShow = true;
          $scope.openContent = false;
          $scope.upAndDown = false;
        };

        $scope.changeHeadIcon = function (name) {
          console.log(name);
          $scope.iconName = name;
        }


  }

})();
