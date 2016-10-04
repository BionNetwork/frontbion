(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('popover', popover);

  function popover() {
    return {
      scope: {
        content: '=?',
        name: '@',
        title: '@',
        placement: '@',
        showIcon: '='
      },
      restrict: 'E',
      controller: 'popoverCtrl',
      templateUrl: 'share/popover/popoverTmpl.html',
      link: function(scope, element, attrs){
            $('[data-toggle="popover"]').popover({
              	html: true,
                title: scope.title,
                placement: scope.placement,
                content: function() {
                      return $('.popover-'+scope.name).html();
                    }
              });
  			}
    };
  }
})();
