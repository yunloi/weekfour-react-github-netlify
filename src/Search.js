import React, { useState } from "react";
import axios from "axios";
import CurrentDateTime from "./CurrentDateTime";
import "./styles.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function searchCity(city) {
    let apiKey = "a86e9d84a9cef96d075ec236ba74b9d6";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function retrieveLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "a86e9d84a9cef96d075ec236ba74b9d6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrieveLocation);
  }

  let form = (
    <div className="Search">
      <form id="search-city-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter your City..."
              onChange={updateCity}
              autocomplete="off"
              autofocus="on"
              id="search-city-input"
              class="form-control search-city"
            />
          </div>
          <div className="col-1">
            <button type="submit" class="btn btn-light w-200">
              Search
            </button>
          </div>
          <div className="col-1">
            <button
              type="submit"
              class="btn btn-dark w-200"
              id="current-button"
              onClick={getCurrentPosition}
            >
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h1 className="city" id="city-name">
          {props.data.city}
        </h1>
        <h2 className="current-date-time">
          <CurrentDateTime />
        </h2>
        <div className="row">
          <div className="col-4">
            <div className="fix-icon">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
                alt="Clear"
                class="icon"
                id="weather-icon"
              />
            </div>
          </div>

          <div className="col-3">
            <div className="card current-weather">
              <h3 className="temperature-now">
                <span className="temperature" id="temperature-reading">
                  {Math.round(weather.temperature)}
                </span>
                <span className="units">
                  <a href="#" class="active" id="link-celsius">
                    ℃
                  </a>{" "}
                  |
                  <a href="#" id="link-fahrenheit">
                    ℉
                  </a>
                  <div className="now" id="temperature-description">
                    Now
                  </div>
                </span>
              </h3>
            </div>
          </div>

          <div className="col-3">
            <div className="card extra-info">
              <ul>
                <li>
                  High:{" "}
                  <span id="max-temp">
                    {Math.round(weather.maxTemperature)}℃
                  </span>
                </li>
                <li>
                  Low:{" "}
                  <span id="min-temp">
                    {Math.round(weather.minTemperature)}℃
                  </span>
                </li>
                <li>
                  Wind:{" "}
                  <span id="wind-speed">{Math.round(weather.wind)}m/s</span>
                </li>
                <li>
                  Humidity: <span id="humid">{weather.humidity}%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
