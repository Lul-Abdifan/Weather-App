import "./style.scss";
import { render } from "./modules/render.js";
import { DataOfCity } from "./modules/defaultData";
import { weather } from "./modules/weather";

const country = document.querySelector("#submit-country");

country.addEventListener("click", function () {
  render(document.querySelector(".weather-input").value, 9);
  weather.fetchWeather(document.querySelector(".weather-input").value, 9);

  weather.clearInput();
});

DataOfCity.forEach((data) => {
  render(`${data.city}`, data.id);
  weather.fetchWeather(`${data.city}`, data.id);
});
