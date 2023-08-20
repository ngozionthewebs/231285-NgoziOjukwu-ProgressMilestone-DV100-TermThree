  
 // ----------------------------------------------------------------------------------------------------------
 // Trips Array
// -----------------------------------------------------------------------------------------------------------
  
const arrTrips = [
    {
        place: "Paris",
        cost: 1000,
        description: "Paris: Elegance on the Seine. Iconic landmarks, artistic heritage, and culinary delights intertwine seamlessly, embracing both history and modernity.",
        image: "card1.png",
        tripType: "single",
        addedDate: "2023-03-25"
        
    },
    {
        place: "Marseille",
        cost: 1700,
        description: "Located on the southeastern coast of France, is a vibrant port city known for its rich history, diverse culture, and stunning Mediterranean landscapes. As the second-largest city in France.",
        image: "card2.png",
        tripType: "single",
        addedDate: "2023-03-30"
        
    }, {
        place: "Valencia",
        cost: 2000,
        description: "Valencia boasts a futuristic City of Arts and Sciences complex, as well as a historic Old Town with impressive architecture, such as the Central Market and the Silk Exchange.",
        image: "card3.png",
        tripType: "single",
        addedDate: "2023-04-15"
        
    },
    {
        place: "Madrid",
        cost: 2500,
        description: "The capital city, Madrid, is a dynamic metropolis known for its rich history, world-class museums like the Prado and Reina Sofía, and its lively atmosphere. ",
        image: "card4.png",
        tripType: "multi",
        addedDate: "2023-04-20"
        
    },
    {
        place: "Athens",
        cost: 3000,
        description: "The iconic Acropolis, Parthenon, and ancient Agora are among its historical landmarks. Modern Athens offers a blend of ancient ruins and contemporary urban life.",
        image: "card5.png",
        tripType: "multi",
        addedDate: "2023-08-20"
        
    },
    {
        place: "Patras",
        cost: 3500,
        description: "Patras is known for its lively Carnival celebrations and historical sites like the Roman Odeon. The city is a gateway to the Peloponnese region.",
        image: "card6.png",
        tripType: "multi",
        addedDate: "2023-08-25"
        
    },
];

let appliedFilter = " ";
let appliedSort = "date added";


 
 // ----------------------------------------------------------------------------------------------------------
 // When the document loads
// -----------------------------------------------------------------------------------------------------------
  
  $(document).ready(function(){
  
    console.log("Hello");


    // -----------------------------------------
    // Trips Page

    $("#tripText").hide();
    filterSortTrips();



}); 

//-----------------------------------------------------------------------------------------------------------
// Load Trips
//-----------------------------------------------------------------------------------------------------------

function loadTrips(tripsToShow) {


    // Clear all elements inside the trips cards container

    $("#tripCon").empty();


    //Run Loop through list of trips(for loop)
    for (let i = 0; i < tripsToShow.length; i++) {
        const trip = tripsToShow[i];

    
            // 1: Select trips container and add the current array trips to it
            $("#tripCon").append($("#tripTemplate").html())



            // 2: Create a varible that contains the most recently added trip card
            let currentChild = $("#tripCon").children().eq(i+1);
            // 3: Set the content for the trips card from the trips list
            $(currentChild).find(".card-img-top").attr('src', '../assets/' + trip.image)
            $(currentChild).find("#placeText").text(trip.place)
            $(currentChild).find("#costText").text('R' + trip.cost);
            $(currentChild).find("#tripText").text(trip.description);
       
            // 4: Hide the description text from the trips card
            $(currentChild).find("#tripTex").hide();

        
        

    }

}



//-----------------------------------------------------------------------------------------------------------
// When a filter or sort option is clicked 
//-----------------------------------------------------------------------------------------------------------

$("input[name = 'filterRadio']").click(function(){
    
    appliedFilter = $(this).attr('value');

    console.log(appliedFilter)
    filterSortTrips();

})

$("input[name = 'sortRadio']").click(function(){
    
    appliedSort = $(this).attr('value');

    console.log(appliedSort)
    filterSortTrips();
    

})
    

function filterSortTrips(){

    let filteredSortedArrTrips  = [];
    
    //Filter Trips

    if (appliedFilter) {
        filteredSortedArrTrips = arrTrips.filter(trip => trip.tripType == appliedFilter);
      } else {
        filteredSortedArrTrips= arrTrips;
      }

      //SortPlants

      if (appliedSort == "low to high") {

        // Sort trips from the lowest to highest price
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
          return a.price - b.price;
        });
    
      } else if (appliedSort == "date added") {
    
        // Sort trips from the newest to oldest
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
          let da = new Date(a.addedDate);
          let db = new Date(b.addedDate);
        
          return db - da;
        });
    
      }
    

      console.log(filteredSortedArrTrips);

      loadTrips(filteredSortedArrTrips);
    
}

//-----------------------------------------------------------------------------------------------------------
// When the card is clicked 
//-----------------------------------------------------------------------------------------------------------

$("#tripCon").on('click', '.card',function () {

     // Toggle the price & description text
     $("#costText").toggle();
     $("#tripText").toggle();

});

