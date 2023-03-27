import "./App.css";
import { Search } from "./Components/Search";
import { Main } from "./Components/Main";
import { WeatherDataContext } from "./Components/WeatherDataContext";
import { useContext, useState } from "react";
import "./App.css";

function App() {
  const [isSearching, setIsSearching] = useState(true);
  const { searchedValue } = useContext(WeatherDataContext);

  console.log(isSearching);

  return (
    <div className="container">
      <Search setIsSearching={setIsSearching} />
      {!isSearching && <Main searchedValue={searchedValue} />}
    </div>
  );
}

export default App;
