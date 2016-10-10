(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('argumentsList', argumentsList);

  function argumentsList() {
    return {
      scope: {
        allArguments: '=?',
        cardKey: '=?',
        parentUrl: '@',
        breadcrumbs: '=?'
      },
      restrict: 'E',
      controller: 'argumentsListCtrl',
      templateUrl: 'components/argumentsList/argumentsListTmpl.html'
    };
  }
})();
