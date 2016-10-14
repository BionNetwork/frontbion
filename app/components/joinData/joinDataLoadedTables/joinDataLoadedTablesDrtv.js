(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('joinDataLoadedTables', joinDataLoadedTables);

  function joinDataLoadedTables() {
    return {
      scope: {
        getResourcesTables: '=?',
        resourseId: '=?',
        downloadTableNames: '='
      },
      restrict: 'E',
      controller: 'joinDataLoadedTablesCtrl',
      templateUrl: 'components/joinData/joinDataLoadedTables/joinDataLoadedTablesTmpl.html',
      link: function(scope, element, attrs){
          // console.log(scope.resourseId);

  			}
    };
  }
})();
