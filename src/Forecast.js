import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./styles.css";

//import axios from "axios";

export default function Forecast() {
  return (
    <div className="row forecast-border">
      <div className="card col-2 forecast">
        <h5>Friday</h5>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={30}
          animate={true}
        />
        <div className="row">
          <div className="col-6">High</div>
          <div className="col-6">30℃</div>
          <div className="col-6">Low</div>
          <div className="col-6">20℃</div>
          <div className="col-6">Rain</div>
          <div className="col-6">0%</div>
        </div>
      </div>

      <div className="card col-2 forecast">
        <h5>Saturday</h5>
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="blue"
          size={20}
          animate={true}
        />
        <div className="row">
          <div className="col-6">High</div>
          <div className="col-6">24℃</div>
          <div className="col-6">Low</div>
          <div className="col-6">16℃</div>
          <div className="col-6">Rain</div>
          <div className="col-6">20%</div>
        </div>
      </div>
      <div className="card col-2 forecast">
        <h5>Sunday</h5>
        <ReactAnimatedWeather
          icon="RAIN"
          color="blue"
          size={20}
          animate={true}
        />
        <div className="row">
          <div className="col-6">High</div>
          <div className="col-6">22℃</div>
          <div className="col-6">Low</div>
          <div className="col-6">11℃</div>
          <div className="col-6">Rain</div>
          <div className="col-6">80%</div>
        </div>
      </div>
      <div className="card col-2 forecast">
        <h5>Monday</h5>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="green"
          size={20}
          animate={true}
        />
        <div className="row">
          <div className="col-6">High</div>
          <div className="col-6">25℃</div>
          <div className="col-6">Low</div>
          <div className="col-6">18℃</div>
          <div className="col-6">Rain</div>
          <div className="col-6">5%</div>
        </div>
      </div>
      <div className="card col-2 forecast">
        <h5>Tuesday</h5>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={20}
          animate={true}
        />
        <div className="row">
          <div className="col-6">High</div>
          <div className="col-6">27℃</div>
          <div className="col-6">Low</div>
          <div className="col-6">18℃</div>
          <div className="col-6">Rain</div>
          <div className="col-6">1%</div>
        </div>
      </div>
    </div>
  );
}
