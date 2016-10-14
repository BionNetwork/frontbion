(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('toPlugLoadCtrl', ['$scope', '$state', '$location','$toPlugLoadSrv', toPlugLoadCtrl]);

  function toPlugLoadCtrl($scope, $state, $location, $toPlugLoadSrv) {

    $scope.cardId = $state.params.id;

    $scope.showChooseColumn = false;

    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });

    // console.log($scope.getResources);
    $scope.upload = function(files) {
      if (!files) {
        return;
      } else {
        $toPlugLoadSrv.addFiles(files, $scope.activationId, $scope.getResources);
      }
    };

    $scope.onSelectedColumn = function (index, key) {
      $scope.selectedColumnName = key;
      $scope.selectedColumn = index;
      $scope.showChooseColumn = true;
    };

    $scope.onChooseColumn = function () {
      // console.log($scope.selectedColumnName);
      // console.log($scope.activationId);
      // console.log($scope.choosedTableName);
      // console.log($location.search().agumentId);
      $scope.agumentId = $location.search().agumentId;
      $scope.argumentBound($scope.activationId,
        $scope.choosedTableResourceId, $scope.agumentId,
        $scope.choosedTableName, $scope.selectedColumnName);
      // console.log($state);
    };

    $scope.dropBox = function() {
      Dropbox.choose(options);
    };

    var options = {

        // Required. Called when a user selects an item in the Chooser.
        success: function(files) {
            console.log(files[0]);
            var file = {

                // Name of the file.
                name: files[0].name,

                // URL to access the file, which varies depending on the linkType specified when the
                // Chooser was triggered.
                link: files[0].link,

                // Size of the file in bytes.
                bytes: files[0].bytes,

                // URL to a 64x64px icon for the file based on the file's extension.
                icon: files[0].icon,

                // A thumbnail URL generated when the user selects images and videos.
                // If the user didn't select an image or video, no thumbnail will be included.
                // thumbnailLink: "https://...?bounding_box=75&mode=fit",

                // Boolean, whether or not the file is actually a directory
                isDir: false,
            };
            console.log(file)

            if (!file) {
              return;
            } else {
              // file.push(files[0]);
              // file.filename = file.name;
              // delete file.name;

              $toPlugLoadSrv.addFiles(file, $scope.activationId, $scope.getResources);
            }
        },

        // Optional. Called when the user closes the dialog without selecting a file
        // and does not include any parameters.
        cancel: function() {

        },

        // Optional. "preview" (default) is a preview link to the document for sharing,
        // "direct" is an expiring link to download the contents of the file. For more
        // information about link types, see Link types below.
        linkType: "preview", // or "direct"

        // Optional. A value of false (default) limits selection to a single file, while
        // true enables multiple file selection.
        multiselect: false, // or true

        // Optional. This is a list of file extensions. If specified, the user will
        // only be able to select files with these extensions. You may also specify
        // file types, such as "video" or "images" in the list. For more information,
        // see File types below. By default, all extensions are allowed.
        extensions: ['.txt', '.csv', '.xls', '.xlsx'],
    };
  }

})();
