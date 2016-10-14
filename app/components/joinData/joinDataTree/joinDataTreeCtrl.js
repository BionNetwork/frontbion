(function() {
  'use strict';
  angular
  .module('BIONApp')
  .controller('joinDataTreeCtrl', ['$scope', '$state', '$timeout', joinDataTreeCtrl]);

  function joinDataTreeCtrl($scope, $state, $timeout) {

      $(document).ready(function(){
            $('.event').on("dragstart", function (event) {
        			  var dt = event.originalEvent.dataTransfer;
        			  dt.setData('Text', $(this).attr('id'));
        			});
      	    $('table td').on("dragenter dragover drop", function (event) {
      		   event.preventDefault();
      		   if (event.type === 'drop') {
      			  var data = event.originalEvent.dataTransfer.getData('Text',$(this).attr('id'));
              var an = data ? $('#' + data).detach() : $('#a').detach();
              console.log();
              $timeout(function () {
                console.log($('table #a'));
                $('table #a').attr('draggable',false);
              }, 0)
              $('table .i').css("display", "inline-block");
              // $('table #a').setAttribute('draggable',false);
              // var an = $('#a').detach();
      			  // var de=$('#'+data).detach();

      			  an.appendTo($(this));
      		   };
      	   });
      })

    $scope.myCounter = 0;

  }

})();
