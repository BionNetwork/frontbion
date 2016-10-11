(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('loginPageCtrl', ['$scope', loginPageCtrl]);

  function loginPageCtrl($scope) {
    // console.log('loginPageCtrl');

    $scope.onLoginPage = function (user, pass) {
      event.preventDefault();
      if (user && pass) {
        $scope.loginPage(user, pass);
      }
    };

    $scope.contentLang = [
        {name: "Русский"}
    ];



  }

})();
