import React, { Component } from "react";

class Content extends Component {
  render() {
    const { data } = this.props;
    const { main, name, weather } = data || {};
    const { temp, feels_like, temp_min, temp_max, humidity, pressure } =
      main || {};
    const { description, icon, main: weatherMain } =
      (weather && weather[0]) || {};
    // console.log(weather);
    return (
      <div
        style={{
          width: "50%",
          marginTop: 30,
          height: "30%",
          display: "flex",
          alignItems: "center",
          textAlign: "start",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#a3d2ca",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Name: {name}</p>
        <p style={{ fontWeight: "bold" }}>Tempeture: {temp}</p>
        <p style={{ fontWeight: "bold" }}>Min: {temp_min}</p>
        <p style={{ fontWeight: "bold" }}>Max: {temp_max}</p>
        <p style={{ fontWeight: "bold" }}>Feels like: {feels_like}</p>
        <p style={{ fontWeight: "bold" }}>Humidity: {humidity}</p>
        <p style={{ fontWeight: "bold" }}>Pressure: {pressure}</p>
        <p style={{ fontWeight: "bold" }}>Description: {description}</p>
      </div>
    );
  }
}

export default Content;
