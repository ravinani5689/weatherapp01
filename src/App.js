import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import fetchWeather from "./api";

class App extends Component {
  state = {
    weatherData: null,
    forecast: null,
    errors: "",
  };

  handleSearch = async (city) => {
    const result = await fetchWeather(city);
    if (result) {
      this.setState({
        forecast: result.forecast,
        weatherData: result.currentWeather,
        error: "",
      });
    } else {
      this.setState({
        error: "City not found",
        weatherData: null,
        forecast: null,
      });
    }
  };

  render() {
    const { forecast, weatherData, error } = this.state;
    return (
      <div className="mainc">
        <SearchBar onSearch={this.handleSearch} />
        {error && <p>{error}</p>}
        {weatherData && <CurrentWeather data={weatherData} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    );
  }
}

export default App;
