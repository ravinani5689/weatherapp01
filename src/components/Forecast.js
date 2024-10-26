import React, { Component } from "react";

class Forecast extends Component {
  render() {
    const forecastList = this.props.data.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );

    return (
      <div>
        <h2>5-Day Forecast</h2>
        <div className="forecast-main">
          {forecastList.map((day) => (
            <div>
              <p>{new Date(day.dt_txt).toDateString()}</p>
              <img
                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              <p>{day.weather[0].description}</p>
              <p>High: {day.main.temp_max} C</p>
              <p>Low: {day.main.temp_min} C</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Forecast;
