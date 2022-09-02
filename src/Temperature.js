import React from "react";
import "./styles.css";

export default function CurrentTemperature(props) {
  return (
    <div className="currentTemperature">
      <h3> {props.now} </h3>
    </div>
  );
}
