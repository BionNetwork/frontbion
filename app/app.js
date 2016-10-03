;(function() {
  'use strict';
    angular.module('BIONApp', ['ui.router'])
           .config(['$httpProvider', function ($httpProvider) {
              // window.location.hash = '/';
           }]);

	angular.module('BIONApp').controller('mainCtrl', ['$scope', function($scope) {
	        console.log('mainCtrl');
	        
	}]);

	angular.module('BIONApp').controller("Ctrl1",function($scope){
 
	})
    .directive('toggle', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
			  if (attrs.toggle=="popover"){
			    $(element).popover({
			    	html: true, 
					content: function() {
				          return $('.popover-content').html();
				        }
			    });
			  }
			}
		};
	});


})();
