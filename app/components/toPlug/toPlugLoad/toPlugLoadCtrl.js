(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlugLoadCtrl', ['$scope', 'Upload', '$timeout', '$http', '$httpParamSerializer', '$toPlugLoadSrv', toPlugLoadCtrl]);

  function toPlugLoadCtrl($scope, Upload, $timeout, $http, $httpParamSerializer, $toPlugLoadSrv) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file]; 
        }
    });

    $scope.log = '';

    // console.log($scope.getResources);
    $scope.upload = function(files) {
      if (!files) {
        return;
      } else {
        $toPlugLoadSrv.addFiles(files, $scope.activationId, $scope.getResources);
      }
    };
  }

})();
