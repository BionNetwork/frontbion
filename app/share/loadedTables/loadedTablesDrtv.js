(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('loadedTables', loadedTables);

  function loadedTables() {
    return {
      scope: {
        getResourcesTables: '=?',
        resourseId: '=?'
      },
      restrict: 'E',
      controller: 'loadedTablesCtrl',
      templateUrl: 'share/loadedTables/loadedTablesTmpl.html',
      link: function(scope, element, attrs){
          console.log(scope.resourseId);
  			}
    };
  }
})();
