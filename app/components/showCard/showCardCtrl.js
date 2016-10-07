(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('showCardCtrl', ['$scope', showCardCtrl]);

  function showCardCtrl($scope) {
    // console.log('showCardCtrl');
    $scope.contentSecond = [
        {name: "Etton"},
        {name: "Etton center"},
        {name: "Etton grupp"},
        {name: "Etton grupp1"},
        {name: "Etton grupp2"},
        {name: "Etton grupp3"}
    ];
    $scope.chart = 'pie';
    $scope.changeChart = function (type) {
      $scope.chart = type;
    }
    $scope.data = {
          title: {
              text: 'Temperature data'
          },
          xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },

          series: [{
              data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }]
      };
      $scope.pieData = [{
              name: "Microsoft Internet Explorer",
              y: 56.33
          }, {
              name: "Chrome",
              y: 24.03,
          }, {
              name: "Firefox",
              y: 10.38
          }, {
              name: "Safari",
              y: 4.77
          }, {
              name: "Opera",
              y: 0.91
          }, {
              name: "Proprietary or Undetectable",
              y: 0.2
      }];
      $scope.legend = {
          margin: 5,
          symbolWidth: 10,
          symbolHeight: 10,
          itemStyle: {
              fontWeight: 'normal',
              fontSize: '10px',
              color: '#727272'
          },
          itemMarginBottom: 5
      };


  }

})();
