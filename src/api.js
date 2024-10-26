import axios from "axios";

const fetchWeather = async (city) => {
  const apiKey = "api_key";
  try {
    const currentWeather = await axios.get(
      `https://api.openweathermap/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const forecast = await axios.get(
      `https://api.openweathermap/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return { currentWeather: currentWeather.data, forecast: forecast.data };
  } catch (e) {
    console.error("Error fetching");
    return null;
  }
};

export default fetchWeather;
