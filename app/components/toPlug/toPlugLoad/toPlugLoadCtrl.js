(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlugLoadCtrl', ['$scope', 'Upload', '$timeout', '$http', '$httpParamSerializer', toPlugLoadCtrl]);

  function toPlugLoadCtrl($scope, Upload, $timeout, $http, $httpParamSerializer) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file]; 
        }
    });
    $scope.log = '';

    var resource = {
      post: {
        success: function(response) {
        },
        error: function(response) {
          console.log(response, 'error');
        }
      }
    };

    $scope.upload = function (files) {
        var fileData;
        if (!files) {
          return;
        } else {
          fileData = files[0];
        }

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

        // $http({
        //   method: 'POST',
        //   url: '/api/v1/resource/add',
        //   headers: {
        //     'X-AUTHORIZE-TOKEN': window.localStorage.getItem('token')
        //   },
        //   data: myData
        // }).then(resource.post.success, resource.post.error);
    };
  }

})();
