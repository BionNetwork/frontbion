(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('showCardCtrl', ['$scope', '$state', showCardCtrl]);

  function showCardCtrl($scope, $state) {
    // console.log('showCardCtrl');
    $scope.data = $scope.dashboardCards.find(function (item) {
      return item.id == $state.params.id;
    });
    $scope.listOfFilters = [];

    $scope.showClickedItems = function (item) {
      var found = false;
      for(var i = 0; i < $scope.listOfFilters.length; i++) {
          if ($scope.listOfFilters[i].name == item.name) {
              found = true;
              if (item.values.length == 0) {
                $scope.listOfFilters[i].values = []
              }
              break;
          }
      }

      if (!found) {
          $scope.listOfFilters.push(item);
      }


    };

    $scope.contentSecond = [
        {name: "Etton"},
        {name: "Etton center"},
        {name: "Etton grupp"},
        {name: "Etton grupp1"},
        {name: "Etton grupp2"},
        {name: "Etton grupp3"}
    ];
    $scope.contentThird = [
        {name: "Etton1"},
        {name: "Etton center2"},
        {name: "Etton grup"},
        {name: "Etton gru"},
        {name: "Etton grupp5"},
        {name: "Etton grupp6"}
    ];
    $scope.contentForth = [
        {name: "Альт"},
        {name: "Базис"},
        {name: "Мегаполис"}
    ];
    $scope.contentFive = [
        {name: "Электроника"},
        {name: "Одежда"},
        {name: "Бижутерия"}
    ];

    $scope.chart = 'line';
    $scope.changeChart = function (type) {
      $scope.chart = type;
    };

    $scope.filterData = function (pieSeries, pieData) {
      var series = [...pieSeries.y];
      var data = [...pieData];
      return {
          y: series.map(s => ({
              data: data.map(row => row[s.index]),
              name: s.header
          })),
          x: {
              name: pieSeries.x.header,
              data: data.map(row => row[pieSeries.x.index])
          }
      }
    };

    $scope.chartData = $scope.filterData($scope.data.series, $scope.data.data);
    // console.log($scope.chartData);


  }

})();
