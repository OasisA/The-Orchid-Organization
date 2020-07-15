
var submitEl = document.querySelector("#submit");
var locationEl = document.querySelector("#location");
var radiationEl = document.querySelector("#radiation");


function determineTips(event){
    event.preventDefault();
    var tipResult = "";
    var radiation = radiationEl.value;
    var location = locationEl.value;
    
    if (radiation <= 0 ){
        tipResult= "Unfortunately, any number less than 0 is not a valid input, please check you UV index input again.";
    }
    else if (radiation > 0 && radiation<= 2){
        tipResult = "NO PROTECTION REQUIRED.  Your exposure to UV radiation will be low. We recommend you use sunscreen SPF 30+ if you burn easily and wear sunglasses if it is a bright day.";
    }
    else if (radiation > 2 && radiation<= 5){
        tipResult = "PROTECTION REQUIRED.  Your exposure to UV radiation will be moderate. We recommend you use sunscreen SPF 30+, reapply suncreen every 2 hours.. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday.";

    }
    else if (radiation> 5 && radiation <= 7){
        tipResult = "PROTECTION REQUIRED.  Your exposure to UV radiation will be high. It is vital that you use at least sunscreen SPF 30+, reapply suncreen every 2 hours. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday. Wear long sleeved shirts and pants.";

 }
 else if (radiation> 7 && radiation <= 10){
    tipResult = "EXTRA PROTECTION REQUIRED.  Your exposure to UV radiation will be very high. Take extra precautions, it is vital that you use at least sunscreen SPF 30+, reapply suncreen every 2 hours. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday. Wear long sleeved shirts and pants. Try to avoid sun exposure between 10 AM and 4PM.";
 }
 else {
    tipResult = "EXTRA PROTECTION REQUIRED.  Your exposure to UV radiation will be extreme. Make sure to take all necessary precautions, it is vital that you use at least sunscreen SPF 30+, reapply suncreen every 2 hours. Wear sunglasses and a hat if it is a bright day, and try to find shade when the sun is at its highest point during midday. Wear long sleeved shirts and pants. Try to avoid sun exposure between 10 AM and 4PM.";
 }
document.querySelector("#tips").textContent = "→ If you live in " + location + ", the UV index today is " + radiation + ". " + tipResult;


}

submitEl.addEventListener("click", determineTips);