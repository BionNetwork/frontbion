(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('simplePopover', simplePopover);

  function simplePopover() {
    return {
      scope: {
        name: '@',
        title: '@',
        placement: '@',
        toggleName: '@',
        content: '=?',
        iconName: '@'
      },
      restrict: 'E',
      controller: 'simplePopoverCtrl',
      templateUrl: 'share/simplePopover/simplePopoverTmpl.html',
      link: function(scope, element, attrs){
            $('[data-toggle="'+scope.toggleName+'"]').popover({
              	html: true,
                title: scope.title,
                placement: scope.placement,
                content: function() {
                      return $('.'+scope.toggleName+'-name').html();
                    }
              });
  			}
    };
  }
})();
