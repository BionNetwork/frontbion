(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('oneSelectPopover', oneSelectPopover);

  function oneSelectPopover($compile) {
    return {
      scope: {
        name: '@',
        title: '@',
        placement: '@',
        content: '=?'
      },
      restrict: 'E',
      controller: 'oneSelectPopoverCtrl',
      templateUrl: 'share/oneSelectPopover/oneSelectPopoverTmpl.html',
      link: function(scope, element, attrs){
            $(element).popover({
              	html: true,
                title: scope.title,
                placement: scope.placement,
                content: function() {
                      // return $('#popover-'+scope.name+'').html();
                      return $('#popover-'+scope.name+'').html();
                    }
              });
  			}
    };
  }
})();
