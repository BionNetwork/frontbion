;(function() {
  'use strict';
  angular
    .module('BIONApp')
    .config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'routes/login/login.html',
        controller: ['$scope', '$state', '$http', '$httpParamSerializer', '$window',
        function($scope, $state, $http, $httpParamSerializer, $window) {

          var login = {
            get: {
              success: function(response) {
                var token = response.data.data.token;
                window.localStorage.setItem('token', token);
                $window.location.href = "#/dashboard";
              },
              error: function(response) {
                console.log(response, 'error');
              }
            }
          };


          $scope.loginPage = function (user, pass) {
            $http({
              method: 'POST',
              url: '/api/v1/auth/logins',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Authorize-Key': '4dc961de-9cee-4061-a0a8-494000734e78'
              },
              data: $httpParamSerializer({ login: user, password: pass })
            }).then(login.get.success, login.get.error);
          };

        }]
      });
  }]);

})();
