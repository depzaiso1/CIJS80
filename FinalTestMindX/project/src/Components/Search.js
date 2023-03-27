import { useContext, useRef, useState } from "react";
import { WeatherDataContext } from "./WeatherDataContext";
import "../css/search.css";

export const Search = ({ setIsSearching }) => {
  const { setSearchedValue } = useContext(WeatherDataContext);
  const searchedRef = useRef("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(String(event.target.value).toUpperCase());
  };

  const handleClicked = (event) => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      console.log("input value is NOT empty");
      setIsSearching(false);

      console.log(searchedRef.current.value);
      setSearchedValue(searchedRef.current.value);
    } else {
      console.log("input value is empty");
      searchedRef.current.focus();
    }
  };

  return (
    <div className="search">
      <input
        style={{ textTransform: "uppercase" }}
        className="search--input"
        type="text"
        placeholder="ENTER YOUR LOCATION"
        onChange={handleChange}
        ref={searchedRef}
      ></input>
      <div>
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          alt="searchIcon"
          onClick={handleClicked}
          className="search--icon"
        />
      </div>
    </div>
  );
};
