export const weather = {
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
