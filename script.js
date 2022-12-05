const inputCountry1 =document.querySelector(".weather-input").value
const country = document.querySelector("#submit-country");
country.addEventListener("click", function () 
{
 
console.log(document.querySelector(".weather-input").value);

 });

  let weather={
fetchWeather:function(city)
    {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +  "&units=metric" + "&APPID=5a92fd632605124eaff223548603dd95"
          )
.then((Response=>Response.json()))
.then((datas)=>this.showOnScreen(datas)) 

},
showOnScreen:function(datas)
{
    const {name}=datas;
    const {description}=datas.weather[0]
    const {temp_min,temp_max,humidity}=datas.main;
    const{speed}=datas.wind;
    console.log(name);
    console.log(description);
    console.log(temp_max,temp_min,humidity);
    console.log(speed);
    document.getElementById('country').innerHTML="Weather in " + name;
    document.getElementById('description').innerHTML=description;
    document.getElementById('max_temp').innerHTML="max_temp" + temp_max;
    document.getElementById('min_temp').innerHTML="min_temp " + temp_min;
    document.getElementById('humidity').innerHTML="Humidity " + humidity;
    document.getElementById('speed').innerHTML="Speed " + speed;


}
    
    

}




