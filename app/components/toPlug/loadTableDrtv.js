(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('loadtable', loadTable);

  function loadTable() {
    return {
      restrict: 'A',
      link: function(scope, element) {

        element.bind('click', function(e) {
          angular.element(document.querySelector('#loadTable').click());
        });
      }
    };
  }
})();
