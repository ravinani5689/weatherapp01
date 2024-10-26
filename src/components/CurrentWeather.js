import React, { Component } from "react";

class CurrentWeather extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Current Weather in {data.name}</h1>
        <p>Temp: {data.main.temp}</p>
        <p>Humidity: {data.main.humidity}</p>
        <p>Wind Speed: {data.main.speed}</p>
        <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}`} />
        <p>{data.weather[0].description}</p>
      </div>
    );
  }
}

export default CurrentWeather;
