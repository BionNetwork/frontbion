(function() {
  'use strict';
  angular
  .module('BIONApp')
  .service('acivateWidgetDataServ', ['$http', '$state', '$q', '$window', function ($http, $state, $q, $window) {

      var token = window.localStorage.getItem('token');

      this.activateWidgetData = function (id) {
        $http({
          method: 'POST',
          url: '/api/v1/activations/' + id + '/data',
          headers: {
            'X-AUTHORIZE-TOKEN': token
          }
        }).success(function (data) {

          console.log(data);
          $window.location.href = "#/mywidgets/connect-data/graphic/"+$state.params.id;
        }).error(function () {

        });
      }
      // var activateWidgetData = {
      //   get: {
      //     success: function(response) {
      //       console.log(response.data);
      //     },
      //     error: function(response) {
      //     }
      //   }
      // };
      //
      // $http({
      //   method: 'GET',
      //   url: '/api/v1/activations/' + + '/data',
      //   headers: {
      //     'X-AUTHORIZE-TOKEN': $scope.token
      //
      //   }
      // }).then(activateWidgetData.get.success, activateWidgetData.get.error);


  }])

})();
