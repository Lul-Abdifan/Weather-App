import "./style.scss";
import { render } from "./modules/render.js";

const inputCountry1 = document.querySelector(".weather-input").value;
const country = document.querySelector("#submit-country");

let weather = {
  fetchWeather: function (city, id) {
  

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric" +
        "&APPID=5a92fd632605124eaff223548603dd95"
    )
      .then((Response) => Response.json())
      .then((datas) => this.showOnScreen(datas, id));
  },
  showOnScreen: function (datas, id) {
    const { name } = datas;
    const { description } = datas.weather[0];
    const { temp_min, temp_max, humidity } = datas.main;
    const { speed } = datas.wind;

    document.getElementById(`country${id}`).innerHTML = "In " + name;
    document.getElementById(`description${id}`).innerHTML = description;
    document.getElementById(`max_temp${id}`).innerHTML =
      "max_temp :" + +temp_max + " *C";
    document.getElementById(`min_temp${id}`).innerHTML =
      "min_temp :" + temp_min + " *C";
    document.getElementById(`humidity${id}`).innerHTML =
      "Humidity :" + humidity + " %";
    document.getElementById(`speed${id}`).innerHTML =
      "Speed :" + speed + " km/hr";
  },

  clearInput: function () {
    document.querySelector(".weather-input").value = " ";
  },
};
country.addEventListener("click", function () {
  weather.fetchWeather(document.querySelector(".weather-input").value, 8);
  weather.clearInput();
});

const DataOfCity = [
  {
    id: 1,
    city: "USA,Iowa",
  },
  {
    id: 2,
    city: "Russia",
  },
  {
    i: 3,
    city: "Canada,Toronto",
  },
  {
    id: 4,
    city: "Kenya,Nairobi",
  },
  {
    id: 5,
    city: "Ethiopia",
  },
  {
    id: 6,
    city: "Egypt",
  },
  {
    id: 7,
    city: "London",
  },
];
DataOfCity.forEach((data)=>{
  render(`${data.city}`,data.id)
  weather.fetchWeather(`${data.city}`,data.id);
})

