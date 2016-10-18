$(document).ready(function() {
  
  $("#top_right").html("Game is on.  Turn off by clicking button below.");

  $("#toggleBtn").on("click", function() {
    if($(this).attr("data-status") === "on") {
      $("#top_right").html("Game is off. Click below to turn game on.");
      $(this)
        .html("OFF")//the text in the parentheses 
        // after .html refers to the text in the button itself
        .addClass("btn-danger")
        .removeClass("btn-success")
        .attr("data-status", "off");
     $("#container2").hide();


    } else {

      $(this)
        .html("ON")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .attr("data-status", "on");
        // .removeClass("bigEntrance");
       $("#container2").toggle();
       location.reload(); 
      
      }


    });
    
});

