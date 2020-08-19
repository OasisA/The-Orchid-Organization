
var submitEl = document.querySelector("#submit");

var x = document.getElementById("demo");
$(".loading").hide()
function getLocation() {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
   } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
   }


   function showPosition(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      console.log(lat)
      console.log(long)
      var apiKey = "41a968a554e08400bdb869bdc6f1430c"
      console.log(position.coords.latitude)
      var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=" + apiKey
      $.ajax({
         url: queryURL,
         method: "GET"
      })
         .then(function (response) {
            // Log the queryURL
            console.log(queryURL);
            // Log the resulting object
            console.log(response);
            var radiation = parseInt(response.current.uvi)
            console.log(radiation)
            if (radiation <= 0) {
               tipResult = "Unfortunately, any number less than 0 is not a valid input, please check you UV index input again.";
            }
            else if (radiation > 0 && radiation <= 2) {
               tipResult = "NO PROTECTION REQUIRED.  <br> → Your exposure to UV radiation will be low. We recommend you use sunscreen SPF 30+ if you burn easily and wear sunglasses if it is a bright day.";
            }
            else if (radiation > 2 && radiation <= 5) {
               tipResult = "PROTECTION REQUIRED.  <br> → Your exposure to UV radiation will be moderate. We recommend you use sunscreen SPF 30+, reapply suncreen every 2 hours.. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday.";

            }
            else if (radiation > 5 && radiation <= 7) {
               tipResult = "PROTECTION REQUIRED.  <br> → Your exposure to UV radiation will be high. It is vital that you use at least sunscreen SPF 30+, reapply suncreen every 2 hours. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday. Wear long sleeved shirts and pants.";

            }
            else if (radiation > 7 && radiation <= 10) {
               tipResult = "EXTRA PROTECTION REQUIRED. <br> → Your exposure to UV radiation will be very high. Take extra precautions, it is vital that you use at least sunscreen SPF 30+, reapply suncreen every 2 hours. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday. Wear long sleeved shirts and pants. Try to avoid sun exposure between 10 AM and 4PM.";
            }
            else {
               tipResult = "EXTRA PROTECTION REQUIRED.  <br> → Your exposure to UV radiation will be extreme. Make sure to take all necessary precautions, it is vital that you use at least sunscreen SPF 30+, reapply suncreen every 2 hours. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday. Wear long sleeved shirts and pants. Try to avoid sun exposure between 10 AM and 4PM.";
            }
            console.log("→ The UV index today is " + radiation + ". " + tipResult)
            $(document).ready(function() {
               $(".loading").hide()

            $("#tips").append("<p> → The UV index today is " + radiation +". " + tipResult +"</p>");
            })
         })
   }
}

submitEl.addEventListener("click", getLocation);
$(".btn-lg").on("click", function(){
   $("#tips").empty()
   $(".loading").show()
})

