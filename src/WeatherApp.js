import React from "react";
import CurrentTemperature from "./Temperature";
import Extra from "./ExtraInfo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Weather App</title>

        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/2be93387f1.js"
          crossorigin="anonymous"
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Patua+One&family=Tapestry&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="src/styles.css" />
      </head>
      <body>
        <div className="container">
          <div className="wrapper">
            <div className="weather-frame">
              <form id="search-city-form">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      placeholder="Enter your City..."
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

              <h1 className="current-date-time">Current Date & Time</h1>
              <h2 className="city" id="city-name">
                City
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
                        <CurrentTemperature now={12} />
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
                  <Extra maxTemp={25} minTemp={6} wind={2} humidity={10} />
                </div>
              </div>

              <hr />
              <h4>Next 5 Days</h4>

              <div className="weather-forecast" id="forecast"></div>
            </div>
            <div className="source-code">
              <a
                href="https://github.com/yunloi/Plus-FinalProject-WeatherApp"
                target="_blank"
              >
                Open source code
              </a>
              by Yun Loi Lok
            </div>
          </div>
        </div>

        <script src="src/script.js"></script>
      </body>
    </div>
  );
}
