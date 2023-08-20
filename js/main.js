url: https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=0c8a911e5c7f8e5a03991afe2075de21

 $(document).ready(function(){
   var $newTemp = $("#temp");
  
   $.ajax({
    type: "GET",
   url: "https://api.openweathermap.org/data/2.5/weather?q=Texas&appid=0c8a911e5c7f8e5a03991afe2075de21",
     success: function (data) {
      temp = data;
      console.log(temp);
     },
   }).done(function () {
      // Set Temperature
    $newTemp.html(temp.main.temp + " &degC");
  
   });

})