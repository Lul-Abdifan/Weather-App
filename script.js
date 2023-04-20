const inputCountry1 = document.querySelector(".weather-input").value;
const country = document.querySelector("#submit-country");
//create weather weather objects for retrieving and showing on pages
let weather = {
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric" +
        "&APPID=5a92fd632605124eaff223548603dd95"
    )
      .then((Response) => Response.json())
      .then((datas) => this.showOnScreen(datas));
  },
  showOnScreen: function (datas) {
    const { name } = datas;
    const { description } = datas.weather[0];
    const { temp_min, temp_max, humidity } = datas.main;
    const { speed } = datas.wind;
    // console.log(name);
    // console.log(description);
    // console.log(temp_max, temp_min, humidity);
    // console.log(speed);
    document.getElementById("country").innerHTML = "Weather in " + name;
    document.getElementById("description").innerHTML = description;
    document.getElementById("max_temp").innerHTML =
      "max_temp :" + `br` + temp_max + " *C";
    document.getElementById("min_temp").innerHTML =
      "min_temp :" + temp_min + " *C";
    document.getElementById("humidity").innerHTML =
      "Humidity :" + humidity + " %";
    document.getElementById("speed").innerHTML = "Speed :" + speed + " km/hr";
  },

  clearInput: function () {
    document.querySelector(".weather-input").value = " ";
  },
};
country.addEventListener("click", function () {
  weather.fetchWeather(document.querySelector(".weather-input").value);
  weather.clearInput();
});
