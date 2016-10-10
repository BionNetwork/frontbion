;(function() {
  'use strict';
    angular.module('BIONApp', ['ui.router', 'ngFileUpload'])
           .config(['$httpProvider', function ($httpProvider) {
             $httpProvider.interceptors.push(['$q', function($q) {
                return {
                  responseError: function(response) {
                    if (response.config.url.indexOf("/api/v1/cards") !== -1) {
                      return response;
                    }
                    if (response.status === 403) {

                      window.location.hash = 'login';
                    }
                    return response;
                  }
                };
              }]);
           }]);

	angular.module('BIONApp').controller('mainCtrl', ['$scope', function($scope) {
	        console.log('mainCtrl');

	}]);


})();
