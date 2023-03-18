import { createContext, useState } from "react";

export const WeatherDataContext = createContext();

export function WeatherDataContextProvider(props) {
  const [searchedValue, setSearchedValue] = useState("");
  const [weatherData, setWeatherData] = useState({ weather: [] });

  return (
    <WeatherDataContext.Provider
      value={{ searchedValue, setSearchedValue, weatherData, setWeatherData }}
    >
      {props.children}
    </WeatherDataContext.Provider>
  );
}
