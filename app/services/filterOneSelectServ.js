(function() {
  'use strict';
  angular
  .module('BIONApp')
  .service('filterOneSelectServ', ['$http', '$state', '$q', '$log', function ($http, $state, $q, $log) {

      var token = window.localStorage.getItem('token');

      this.getNewDataForChartSrv = function (queryJson, id) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: '/api/v1/activations/'+ id +'/query',
          headers: {
            'X-AUTHORIZE-TOKEN': token
          },
          data: {
                query: JSON.stringify(queryJson)
          }
        }).success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject('error');
        });
        return deferred.promise;
      };

      this.onInterval = function (query, items) {
        var data = items.data;
        var queryJson = {
          "transform": "true",
          "dims": [
          ],
          "measures" : [

          ],
        };
        for (var i = 0; i < data.length; i++) {
          if (data[i].type == 'timestamp' && queryJson.dims.length == 0) {
            queryJson.dims.push({
              field: data[i].click_column,
              type: 'date',
              name: "date",
              order: '1',
              interval: query.query,
              order_by: "asc"
            })
          }
          if (data[i].type == 'text' && data[i].data.column_name == 'Организация') {
            queryJson.dims.push({
              field: data[i].click_column,
              type: 'text',
              name: "org",
              order: '2'
            })
          }
          if (data[i].type == 'double precision') {
            queryJson.measures.push({
              field: data[i].click_column,
              type: 'field',
              "agg_type": "sum",
              name: "remain",
              order: '3'
            })
          }
        }

        return this.getNewDataForChartSrv(queryJson, items.id);


        // return query;

      };


  }])

})();
