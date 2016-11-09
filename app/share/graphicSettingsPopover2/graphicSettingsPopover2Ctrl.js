(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('graphicSettingsPopover2Ctrl', ['$scope', '$state', graphicSettingsPopover2Ctrl]);

  function graphicSettingsPopover2Ctrl($scope, $state) {
    // console.log('simplePopoverCtrl');
    $scope.osStringRu = {
      period: 'Период',
      text: 'Текст',
      scale: 'Шкала',
      step: 'Шаг',
      os: 'Ось',
      lineSize: 'Толщина линии',
      save: 'Сохранить',
      cancel: 'Отменить'
    };
    $scope.osStringEng = {
      period: 'Period',
      text: 'Text',
      scale: 'Scale',
      step: 'Step',
      os: 'Axis',
      lineSize: 'Line size',
      save: 'Save',
      cancel: 'Cancel'
    };
    $scope.osString = window.localStorage.getItem('lang') == 'en' ? $scope.osStringEng : $scope.osStringRu;



    $scope.periodNumber = 12;
    $scope.footNumber = 1;
    $scope.footNumberText = 12;
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
        if ($scope.periodNumber < 24) {
            $scope.periodNumber = $scope.periodNumber + 1;
        }
      }
      if (name == 'footNumber') {
        if ($scope.footNumber < 10) {
            $scope.footNumber = $scope.footNumber + 1;
        }
      }
      if (name == 'footNumberText') {
        if ($scope.footNumberText < 24) {
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
      var value = {
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
    $scope.onChangeAxisSettings = function functionName() {
      //  console.log($scope.showLabel); //showlabel
      //  console.log($scope.periodString); //period
      //  console.log($scope.periodNumber); //periodnumber
      //  console.log($scope.showScale); //showScale
      //  console.log($scope.footNumber); //footNumber
      //  console.log($scope.footNumberText); //footNumber
      //  console.log($scope.showOs); //showOs
      //  console.log($scope.osNumber); //osNumber
        $scope.getChoosedAxisOn($scope.title, $scope.showLabel, $scope.periodString, $scope.periodNumber, $scope.showScale,
          $scope.footNumber, $scope.footNumberText, $scope.showOs, $scope.osNumber)
    };

  }

})();
