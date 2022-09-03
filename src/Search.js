import React, { useState } from "react";
//import axios from "axios";
import "./styles.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [cityInput, setCityInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCityInput(`${city}`);
    //let apiKey = "a86e9d84a9cef96d075ec236ba74b9d6";
    //let units = "metric";
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
            >
              Current
            </button>
          </div>
        </div>
      </form>
      <h1 className="city" id="city-name">
        {cityInput}
      </h1>
    </div>
  );
}
