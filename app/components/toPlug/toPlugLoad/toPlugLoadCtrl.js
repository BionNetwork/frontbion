(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlugLoadCtrl', ['$scope', 'Upload', '$timeout', '$http', toPlugLoadCtrl]);

  function toPlugLoadCtrl($scope, Upload, $timeout, $http) {
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
        console.log(files);
        $http({
          method: 'POST',
          url: '/api/v1/resource/add',
          headers: {
            'X-AUTHORIZE-TOKEN': window.localStorage.getItem('token')
          },
          data: files
        }).then(resource.post.success, resource.post.error);
    };
  }

})();
