$(document).ready(function(){
    $(document).on( 'scroll', function(event){
        // console.log('Event Fired', event);
     });
     var distancePX = $(window).scrollTop();
var windowHeight = $(window).height();
// var distanceVH = scroll/height * 100;
$("#flex").hide();
$("#flex1").hide();
$(document).scroll(function(){
  if ($(this).scrollTop() >= windowHeight/4 && $(this).scrollTop() <= windowHeight) {
    $("#flex").show();
    $("#flex1").hide();
    $("#flex").css({
        "position": "absolute",
        "bottom": "0",
        "left": "0",
        "width": "100%",
        "background-color": "white !important",
        "z-index": "999"
    })
  }

  if ($(this).scrollTop() <= windowHeight/4) {
    $("#flex").hide();
    $("#flex1").hide();
  }

  if ($(this).scrollTop() >= windowHeight) {
    $("#flex1").show();
    $("#flex").hide();

  }
});
 var state1 = false;
 var state2 = false;
 $("#toggler1").click(function(){
     if(!state1){
        $("#navbarTogglerDemo01").show();
     }
     else{
        $("#navbarTogglerDemo01").hide();
     }
     
     state1 = !state1;

 })

 $("#toggler2").click(function(){
    if(!state2){
       $("#navbarTogglerDemo00").show();
    }
    else{
       $("#navbarTogglerDemo00").hide();
    }
    
    state2 = !state2;

})
})



