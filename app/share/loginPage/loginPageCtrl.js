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
      if (!window.localStorage.getItem('lang')) {
        window.localStorage.setItem("lang", 'ru');
      }

    };

    $scope.contentLang = [
        {name: "Русский"}
    ];

    $scope.changeLang = function (item) {
      window.localStorage.setItem("lang", item);
      if (item == 'en') {
        $scope.string = {
          onEnter: 'To login enter your username and password',
          login: 'Your login',
          pass: 'Your password',
          enter: 'Log in',
        };
      }
      if (item == 'ru') {
        $scope.string = {
          onEnter: 'Для входа укажите ваш логин и пароль',
          login: 'Ваш логин',
          pass: 'Ваш пароль',
          enter: 'Войти',
        };
      }
    };

    $scope.string = {
      onEnter: 'Для входа укажите ваш логин и пароль',
      login: 'Ваш логин',
      pass: 'Ваш пароль',
      enter: 'Войти',
    };



  }

})();
