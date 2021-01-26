import React from "react";
import Thermometer from "react-thermometer-component";

export default function termometroC(temp) {
  return (
    <Thermometer
      theme="light"
      value={temp.temp}
      //{temp.temp}
      max="100"
      steps="3"
      format="°C"
      size="large"
      height="300"
    />
  );
}
