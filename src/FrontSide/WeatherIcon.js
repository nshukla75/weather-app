import React from "react";

const WeatherIcon=(props) => {
  return <img src={`/icons/${props.icon}.svg`} alt="weather icon" width="120px" />;
};

export default WeatherIcon;
