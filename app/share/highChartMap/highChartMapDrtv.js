(function() {
  'use strict';
  angular
  .module('BIONApp')
  .directive('highChartMap', highChartMap);

  function highChartMap() {
    return {
      scope: {
        data: '=?'
      },
      restrict: 'E',
      controller: 'highChartMapCtrl',
      templateUrl: 'share/highChartMap/highChartMapTmpl.html',
      link: function (scope, element) {
          Highcharts.chart(element[0],
            {
              chart : {
                borderWidth : 1,
                type: 'map'
            },

            title: {
                text: ''
            },

            subtitle : {
                text : ''
            },
            xAxis: {visible: false},
            yAxis: {visible: false},

            legend: {
                enabled: false,
                // layout: 'vertical',
                verticalAlign: 'bottom',
                align: 'center',
                floating: true,
                width: undefined,
                margin: 5,
                symbolWidth: undefined,
                symbolHeight: undefined,
                // symbolRadius: 6,
                itemStyle: {
                    fontWeight: 'normal',
                    fontSize: '10px',
                    color: '#727272'
                },
                itemMarginBottom: 0
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                },
                enableDoubleClickZoom: false,
                enableButtons: false,
                enableMouseWheelZoom: false,
            },
            series : [{
                name: 'Countries',
                minSize: 4,
                maxSize: '12%',
                mapData: Highcharts.maps.world,
                color: '#E0E0E0',
                enableMouseTracking: false
            }, {
                // type: 'mapbubble',
                mapData: Highcharts.maps.world,
                name: 'Population 2010',
                joinBy: 'code',
                data: [
                  {
                  "code": "AF",
                  "value": 53,
                  "name": "Afghanistan"
                  },
                  {
                  "code": "AL",
                  "value": 117,
                  "name": "Albania"
                  },
                  {
                  "code": "DZ",
                  "value": 15,
                  "name": "Algeria"
                  },
                  {
                  "code": "AS",
                  "value": 342,
                  "name": "American Samoa"
                  },
                  {
                  "code": "AD",
                  "value": 181,
                  "name": "Andorra"
                  }
                ],
                minSize: 4,
                maxSize: '12%',
                tooltip: {
                    pointFormat: '{point.code}: {point.z} thousands'
                }
            }]
              }
          );
      }
    };
  }
})();
