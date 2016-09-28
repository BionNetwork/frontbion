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
                $window.location.href = "#/";
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
                'X-Authorize-Key': '279d590d-47af-456c-8c65-8a51f1453b1f'
              },
              data: $httpParamSerializer({ login: user, password: pass })
            }).then(login.get.success, login.get.error);
          };

        }]
      });
  }]);

})();
