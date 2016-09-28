(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('widgetsStore', widgetsStore);

  function widgetsStore() {
    return {
      scope: {

      },
      restrict: 'E',
      controller: 'widgetsStoreCtrl',
      templateUrl: 'components/widgetsStore/widgetsStoreTmpl.html'
    };
  }
})();
