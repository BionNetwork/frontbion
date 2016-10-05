(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('oneSelectPopover', oneSelectPopover);

  function oneSelectPopover() {
    return {
      scope: {
        // name: '@',
        // title: '@',
        // placement: '@',
        // toggleName: '@',
        // content: '=?',
        // iconName: '@'
      },
      restrict: 'E',
      controller: 'oneSelectPopoverCtrl',
      templateUrl: 'share/oneSelectPopover/oneSelectPopoverTmpl.html',
      // link: function(scope, element, attrs){
      //       $('[data-toggle="'+scope.toggleName+'"]').popover({
      //         	html: true,
      //           title: scope.title,
      //           placement: scope.placement,
      //           content: function() {
      //                 return $('.'+scope.toggleName+'-name').html();
      //               }
      //         });
  		// 	}
    };
  }
})();
