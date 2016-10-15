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
    // console.log($scope.data);
    $scope.listOfFilters = [];
    // its for multimulti select
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
    // its for casual


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

    $scope.chart = $scope.data.charts[0];
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
    $scope.getCheckedItemsForFilter = function (filter) {
      // console.log(filter);
      var series = [...$scope.data.series.y];
      var data = [...$scope.data.data];
      if (filter.type == 'checkbox') {
         var series = series.filter((s, index) => Array.isArray(filter.values) ? filter.values.indexOf(index + 1)!==-1 : filter.values === index + 1)
        //  console.log(series2);
         var newDataForChart = {
             y: series.map(s => ({
                 data: data.map(row => row[s.index]),
                 name: s.header
             })),
             x: {
                 name: $scope.data.series.x.header,
                 data: data.map(row => row[$scope.data.series.x.index])
             }
         };
         if ($scope.chart == 'pie') {
            $scope.onFilterChartPie(newDataForChart);
         }
         if ($scope.chart == 'line') {
            $scope.onFilterChartLine(newDataForChart);
         }
        //  console.log(newDataForChart);
      };
      if (filter == 'null') {
        var initalState = $scope.filterData($scope.data.series, $scope.data.data);
        if ($scope.chart == 'pie') {
          $scope.onFilterChartPie(initalState);
        }
        if ($scope.chart == 'line') {
          $scope.onFilterChartLine(initalState);
        }
      }
    };


  }

})();
