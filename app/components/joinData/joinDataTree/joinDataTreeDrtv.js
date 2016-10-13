(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('joinDataTree', joinDataTree);

  function joinDataTree() {
    return {
      scope: {

      },
      restrict: 'E',
      controller: 'joinDataTreeCtrl',
      templateUrl: 'components/joinData/joinDataTree/joinDataTreeTmpl.html',
      link: function(scope, element, attrs){
          // console.log(scope.resourseId);
  			}
    };
  }
})();
