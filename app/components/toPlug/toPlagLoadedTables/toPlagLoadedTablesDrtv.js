(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('toPlagLoadedTables', toPlagLoadedTables);

  function toPlagLoadedTables() {
    return {
      scope: {
        getResourcesTables: '=?',
        resourseId: '=?',
        showTablePreview: '=?',
      },
      restrict: 'E',
      controller: 'toPlagLoadedTablesCtrl',
      templateUrl: 'components/toPlug/toPlagLoadedTables/toPlagLoadedTablesTmpl.html',
      link: function(scope, element, attrs){
          // console.log(scope.resourseId);
  			}
    };
  }
})();
