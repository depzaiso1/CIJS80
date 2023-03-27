import { WeatherDataContext } from "./WeatherDataContext";
import { useContext, useState, useEffect } from "react";
import "../css/main.css";
import { WeatherInfo } from "./WeatherInfo";

export const Main = ({ searchedValue }) => {
  const { weatherData, setWeatherData } = useContext(WeatherDataContext);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey =
    "1c45bc6adfbaf5d4348f0bb06ed5e3d9&fbclid=IwAR1rU9RBw6KSPnNEfHrFVchtgS6D-g0s9AASSiqwfwjWdcXKnf00Qwrllnc";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedValue}&units=metric&appid=${apiKey}`;

  const handleFetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      if (data.weather.length > 0) setWeatherData(data);
      else setWeatherData({ weather: [] });
    } catch (err) {
      setWeatherData({ weather: [] });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
    console.log(searchedValue);
  }, [searchedValue]);

  return (
    <div className="detail">
      {isLoading && <p>Loading ...</p>}
      {!isLoading && weatherData.weather.length > 0 && (
        <WeatherInfo weatherData={weatherData} />
      )}
      {!isLoading && weatherData.weather.length == 0 && (
        <div>
          <div style={{ fontWeight: "bold" }}>NOT FOUND</div>
        </div>
      )}
    </div>
  );
};
