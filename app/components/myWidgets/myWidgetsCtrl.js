(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('myWidgetsCtrl', ['$scope', myWidgetsCtrl]);

  function myWidgetsCtrl($scope) {
    // console.log('myWidgetsCtrl');
    $scope.idEnglish = window.localStorage.getItem('lang') == 'en' ? false : true;
  }

})();
