(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('joinData', joinData);

  function joinData() {
    return {
      scope: {
        breadcrumbs: '=?',
        cardKey: '=?',
        allResources: '=?',
        getResourcesTables: '=?',
        allStrings: '=?'
      },
      restrict: 'E',
      controller: 'joinDataCtrl',
      templateUrl: 'components/joinData/joinDataTmpl.html',
      link: function (scope, element, attr) {
            $(".scrollbar").niceScroll();
      }
    };
  }
})();
