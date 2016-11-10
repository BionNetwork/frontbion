(function() {
  'use strict';
  angular
  .module('BIONApp')
  .service('filterOneSelectServ', ['$http', '$state', '$q', '$log', function ($http, $state, $q, $log) {

      var token = window.localStorage.getItem('token');

      this.getActiveActivationSrv = function () {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: '/api/v1/activations',
          headers: {
            'X-AUTHORIZE-TOKEN': token
          },
          params: {
            card_id: $state.params.id,
            activation_status: 'active'
          }
        }).success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject('error');
        });
        return deferred.promise;
      };

      this.getActiveActivationBoundsSrv = function () {
        var getPromise = function() {
        //create the promise, this will be returned from this function
            var promise = $http({
                method: 'GET',
                url: '/api/v1/activations',
                headers: {
                  'X-AUTHORIZE-TOKEN': token
                },
                params: {
                  card_id: $state.params.id,
                  activation_status: 'active'
                }
            });
        //on error do some logging here
            promise.error(function(data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });

            return promise;
        };

        return {
            getPromise: getPromise
        }
      }

      this.onInterval = function (query) {
        // var activeActivations = this.getActiveActivationSrv();
        // this.getActiveActivationSrv();
        // console.log(activeActivations);
        // var a = this.getActiveActivationSrv();
        // var b = this.s(a);
        // console.log(b);
        // this.getActiveActivationSrv().then(function () {
        //   return '1';
        // });

        this.getActiveActivationBoundsSrv().getPromise().then(function (data) {
          console.log(data);
          return data
        })


        // return query;

      };


  }])

})();
