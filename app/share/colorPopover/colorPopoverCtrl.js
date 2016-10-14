(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('colorPopoverCtrl', ['$scope', '$state', colorPopoverCtrl]);

  function colorPopoverCtrl($scope, $state) {
    // console.log('colorPopoverCtrl');
    $scope.color = {
      "background-color" : 'red'
    }

    $scope.chooseColorsObj = [
      {name: 'gentle-pink', color: '#f15347'},
      {name: 'chritsmas-tree', color: '#1fa89e'},
      {name: 'pink', color: '#e24187'},
      {name: 'grass', color: '#6bb76c'},
      {name: 'green', color: '#9ccd64'},
      {name: 'purple', color: '#b540c5'},
      {name: 'violet', color: '#7e58bd'},
      {name: 'gentle-green', color: '#d7e246'},
      {name: 'night', color: '#5c6db2'},
      {name: 'yellow', color: '#fdf054'},
      {name: 'sky', color: '#48a5ea'},
      {name: 'orange', color: '#f6cc22'},
      {name: 'blue', color: '#21bbef'},
      {name: 'mandarin', color: '#ffa42c'},
      {name: 'cyanogen', color: '#2fc5c3'},
      {name: 'sunrise', color: '#fa7147'},
    ];


  }

})();
