var cityinput = document.getElementById("cityInput");
var btnAdd = document.getElementById("add");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");

var apikey = "3045dd712ffe6e702e3245525ac7fa38";


function convertocol(val){
  return (val-273);
}
async function getweather() {
  var wheatherresult = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=${apikey}`
  );
  let jsonresult = await wheatherresult.json();
  console.log(jsonresult);
  setinfo(jsonresult);
}



btnAdd.addEventListener("click",getweather)
