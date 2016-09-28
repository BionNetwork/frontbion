(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('loginPage', loginPage);

  function loginPage() {
    return {
      scope: {
        loginPage: '=?'
      },
      restrict: 'E',
      controller: 'loginPageCtrl',
      templateUrl: 'share/loginPage/loginPageTmpl.html'
    };
  }
})();
