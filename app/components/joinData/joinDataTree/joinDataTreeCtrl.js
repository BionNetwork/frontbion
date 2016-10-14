(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('joinDataTreeCtrl', ['$scope', '$state', '$timeout', joinDataTreeCtrl]);

  function joinDataTreeCtrl($scope, $state, $timeout) {
    // $(function () {
    //   $("td").droppable({
    //      drop: function (event, ui) {
    //          $this = $(this);
    //          $span = $(ui.draggable);
    //          $this
    //              .addClass("ui-state-highlight")
    //              .text($span.html());
    //
    //          $span.remove();
    //      }
    //  });
    // })
    // $timeout(function() {
      $(document).ready(function(){
      	    $('table td').on("dragenter dragover drop", function (event) {
      		   event.preventDefault();
      		   if (event.type === 'drop') {
      			  var data = event.originalEvent.dataTransfer.getData('Text',$(this).attr('id'));
              var an = $('#a').detach();
      			  // var de=$('#'+data).detach();

      			  an.appendTo($(this));
      		   };
      	   });
      })
    // }, 3000)


    $scope.contentSecond = [
        {name: "Прибыль по проектам"},
        {name: "Прибыль по проектам1"},
        {name: "Прибыль по проектам2"},
        {name: "Прибыль по проектам3"},
        {name: "Прибыль по проектам4"},
        {name: "Прибыль по проектам5"},
    ];

    $scope.myCounter = 0;

  }

})();
