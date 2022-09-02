import React from "react";
import "./styles.css";

export default function Extra(props) {
  return (
    <div className="card extra-info">
      <ul>
        <li>
          High: <span id="max-temp">{props.maxTemp}℃</span>
        </li>
        <li>
          Low: <span id="min-temp">{props.minTemp}℃</span>
        </li>
        <li>
          Wind: <span id="wind-speed">{props.wind}m/s</span>
        </li>
        <li>
          Humidity: <span id="humid">{props.humidity}%</span>
        </li>
      </ul>
    </div>
  );
}
