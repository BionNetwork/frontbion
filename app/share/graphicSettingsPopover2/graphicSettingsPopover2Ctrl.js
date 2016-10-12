(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('graphicSettingsPopover2Ctrl', ['$scope', '$state', graphicSettingsPopover2Ctrl]);

  function graphicSettingsPopover2Ctrl($scope, $state) {
    // console.log('simplePopoverCtrl');
    $scope.periodNumber = 1;
    $scope.footNumber = 1;
    $scope.footNumberText = 1;
    $scope.osNumber = 1;
    $scope.showLabel = false;
    $scope.showScale = false;
    $scope.showOs = false;
    $scope.periodString = '';

    $scope.minusNumber = function (name) {
      if (name == 'periodNumber') {
        if ($scope.periodNumber > 0) {
            $scope.periodNumber = $scope.periodNumber - 1;
        }
      }
      if (name == 'footNumber') {
        if ($scope.footNumber > 0) {
            $scope.footNumber = $scope.footNumber - 1;
        }
      }
      if (name == 'footNumberText') {
        if ($scope.footNumberText > 0) {
            $scope.footNumberText = $scope.footNumberText - 1;
        }
      }
      if (name == 'osNumber') {
        if ($scope.osNumber > 0) {
            $scope.osNumber = $scope.osNumber - 1;
        }
      }
    };
    $scope.addNumber = function (name) {
      if (name == 'periodNumber') {
        if ($scope.periodNumber < 10) {
            $scope.periodNumber = $scope.periodNumber + 1;
        }
      }
      if (name == 'footNumber') {
        if ($scope.footNumber < 10) {
            $scope.footNumber = $scope.footNumber + 1;
        }
      }
      if (name == 'footNumberText') {
        if ($scope.footNumberText < 10) {
            $scope.footNumberText = $scope.footNumberText + 1;
        }
      }
      if (name == 'osNumber') {
        if ($scope.osNumber < 10) {
            $scope.osNumber = $scope.osNumber + 1;
        }
      }
    };

    $scope.onSendSettings = function (activeActivationId, key) {
      // console.log(activationId);
      let value = {
        label:{
          show: $scope.showLabel,
          periodNumber: $scope.periodString,
          textNumber: $scope.periodNumber
        },
        scale:{
          show: $scope.showScale,
          step: $scope.footNumber,
          textNumber: $scope.footNumberText
        },
        axis:{
          show: $scope.showOs,
          size: $scope.osNumber
        },
      };
      console.log(value, key);
      // $scope.sendGraphSettings(activeActivationId, key, value);
    };

  }

})();
