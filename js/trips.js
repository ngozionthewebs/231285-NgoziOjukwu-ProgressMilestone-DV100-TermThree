  // When the document loads
  // ----------------------------------------------------------------
  
  $(document).ready(function(){
  
    console.log("Hello");


    // -----------------------------------------
    // Trips Page

    $("#tripText").hide();

}); 

// When the card is clicked 

$(".card").click(function () {

     // Toggle the price & description text
     $("#costText").toggle();
     $("#tripText").toggle();

})
