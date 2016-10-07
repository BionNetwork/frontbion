;(function() {
  'use strict';
  angular
  .module('BIONApp')
  .service('$toPlugLoadSrv', ['$http', toPlugLoadSrv]);

  function toPlugLoadSrv($http) {

    this.addFiles = function(files) {

      var fileData = files[0];
      var myData = new FormData();
      myData.append('resource_file', fileData);
      myData.append('activation_id', '185');

      fetch('/api/v1/resource/add', {
        method: "POST",
        headers: {
          'X-Authorize-Token': window.localStorage.getItem('token')
        },
        body: myData
      })

    };
  }
})();