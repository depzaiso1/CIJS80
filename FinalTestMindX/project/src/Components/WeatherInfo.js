import "../css/WeatherInfo.css";
import { ListIcon } from "./listIcon";

const ImgOfDescription = ({ description }) => {
  const filteredArray = ListIcon.filter((e) =>
    description.toLowerCase().includes(e.type.toLowerCase())
  );
  const img = filteredArray.map((e) => e.img);
  return <img className="img--description" src={img} />;
};

export const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="weatherInfo">
      <h2>
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <ImgOfDescription description={weatherData.weather[0].description} />
      <div className="weatherInfo--description">
        <img
          style={{ height: "20px", weight: "20px" }}
          src="https://cdn-icons-png.flaticon.com/512/4158/4158502.png"
        />
        <p style={{ fontWeight: "bold" }}>
          {weatherData.weather[0].description}
        </p>
      </div>
    </div>
  );
};
