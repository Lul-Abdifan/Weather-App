import './style.scss';


const inputCountry1 = document.querySelector(".weather-input").value;
const country = document.querySelector("#submit-country");
// import render from "./modules/render";
//create weather weather objects for retrieving and showing on pages
const render = (city, id) => {
  const parent = document.querySelector(".container");
  let existingDiv = document.getElementById(`box${id}`);
  if (existingDiv) {
    existingDiv.innerHTML = `
      <h3 class="card-title" id="description${id}"></h3>
      <h5 class="card-title" id="max_temp${id}"></h5>
      <h5 class="card-title"id="min_temp${id}"></h5>
      <h5 class="card-title"id="humidity${id}"></h5>
      <h5 class="card-title"id="speed${id}"></h5>
    `;
  } else {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `<div class="card-header" > 
        <h3 class="align-items-center">
          <h2 id="country${id}"></h2></div>
      <div class="card-body" id="box${id}">
        <h3 class="card-title" id="description${id}"></h3>
        <h5 class="card-title" id="max_temp${id}"></h5>
        <h5 class="card-title"id="min_temp${id}"></h5>
        <h5 class="card-title"id="humidity${id}"></h5>
        <h5 class="card-title"id="speed${id}"></h5>
      </div>`;
    parent.append(div);
  }
};

let weather = {
  fetchWeather: function (city, id) {
    if (id <= 9) {
      render(city, id);
    }

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
  weather.fetchWeather(document.querySelector(".weather-input").value,8);
  weather.clearInput();
});
// weather.fetchWeather("New York,USA", 0);
weather.fetchWeather("USA,Iowa", 1);
weather.fetchWeather("Ethiopia,Addis ABaba", 2);
weather.fetchWeather("Sydney,Australia", 3);
          weather.fetchWeather("Canada,Toronto", 4);
weather.fetchWeather("Kenya,Nairobi", 5);
weather.fetchWeather("Sydney,Australia", 6);
weather.fetchWeather("Kenya,Nairobi", 7);
weather.fetchWeather("Sydney,Australia", 8);


// {/* <div class="card border-primary mb-3" style="max-width: 28rem;">

// // </div> */}