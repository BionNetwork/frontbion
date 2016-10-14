(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('joinDataLoadedTablesCtrl', ['$scope', '$state', '$timeout', joinDataLoadedTablesCtrl]);

  function joinDataLoadedTablesCtrl($scope, $state, $timeout) {
    $scope.contentSecond2 = [
      { name: 'table'},
      { name: 'table'},
      { name: 'table'},
      { name: 'table'},
      { name: 'table'},
      { name: 'table'},
    ];
    $scope.fillOrNot = function () {
      $scope.showFillOrNot = true;
    };
    $scope.fillOrNotNone = function () {
      $scope.showFillOrNotNone = true;
    };
    $scope.fillOrNotRight = function () {
      $scope.showFillOrNotRight = true;
    };
    $scope.fillOrNotBottom = function () {
      $scope.showFillOrNotBottom = true;
    };
    // $(function () {
    //   $(".dragg").draggable();
    // });
    // $( ".dragdrop" ).draggable({ revert: true, helper: "clone" });
    //
    //   $( ".dragdrop" ).droppable({
    //       accept: ".dragdrop",
    //       activeClass: "ui-state-hover",
    //       hoverClass: "ui-state-active",
    //       drop: function( event, ui ) {
    //
    //           var draggable = ui.draggable, droppable = $(this),
    //               dragPos = draggable.position(), dropPos = droppable.position();
    //
    //           // draggable.css({
    //           //     left: dropPos.left+'px',
    //           //     top: dropPos.top+'px'
    //           // });
    //           //
    //           // droppable.css({
    //           //     left: dragPos.left+'px',
    //           //     top: dragPos.top+'px'
    //           // });
    //           draggable.swap(droppable);
    //       }
    //   });
    // $(document).ready(function(){
    		$('.event').on("dragstart", function (event) {
    			  var dt = event.originalEvent.dataTransfer;
    			  dt.setData('Text', $(this).attr('id'));
    			});
    	  //   $('table td').on("dragenter dragover drop", function (event) {
    		//    event.preventDefault();
    		//    if (event.type === 'drop') {
    		// 	  var data = event.originalEvent.dataTransfer.getData('Text',$(this).attr('id'));
    		// 	  de=$('#'+data).detach();
    		// 	  de.appendTo($(this));
    		//    };
    	  //  });
    // })

    // $scope.$watch('downloadTableNames', function() {
    //   if ($scope.downloadTableNames && !$scope.items) {
        $scope.getResourcesTables($scope.resourseId).then(function(items) {
          $scope.items = JSON.parse(JSON.stringify(items));
        });
    //   }
    // });

  }

})();
