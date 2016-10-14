;(function() {
  'use strict';
  angular
  .module('BIONApp')
  .service('$toPlugLoadSrv', ['$http', toPlugLoadSrv]);

  function toPlugLoadSrv($http) {

    this.addFiles = function(files, activationId, getResources) {
      var fileData = files[0] || files;

      if (!fileData) {
        alert("Только файлы эксель");
        return;
      }

      var myData = new FormData();
      myData.append('resource_file', fileData);
      myData.append('activation_id', activationId);
      myData.append('connection_type', 'Excel');

      fetch('/api/v1/resources', {
        method: "POST",
        headers: {
          'X-Authorize-Token': window.localStorage.getItem('token')
        },
        body: myData
      }).then(function(response){
        if (response.status == 201) {
          getResources(activationId);
        }
      })

    };
  }
})();
