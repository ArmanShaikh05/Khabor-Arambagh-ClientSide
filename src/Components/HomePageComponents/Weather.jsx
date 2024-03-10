import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"

const Weather = () => {
  const BASE_URL = "https://api.weatherapi.com/v1";

  const navigate = useNavigate()

  const [arrray, setArray] = useState([]);
  const [areaName, setAreaName] = useState("India");

  useEffect(() => {
   
    let Area_Name = "";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getLocationCurrent(longitude, latitude);
      });
    } else {
      getLocationCurrent(78.9629, 20.5937);
    }

    function getLocationCurrent(longitude, latitude) {
      Area_Name = `${latitude},${longitude}`;

      const url = `${BASE_URL}/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${Area_Name}&days=3&aqi=no&alerts=no`;

      fetchApi(url);
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchApi(url) {
    
    try {
      const data = await axios.get(url);
      if(data){
        setAreaName(data.data.location.name);
        let forecastarray = data.data.forecast.forecastday;
        setArray(forecastarray);
      }
    } catch (error) {
      navigate("/error")
      toast.error(error.message)
    }
   
  }

  // SHOW GREETING MESSAGE ON HOME PAGE
  const currentHour = new Date().getHours();

  const greeting =
    currentHour < 5
      ? "Night"
      : currentHour < 12
      ? "Morning"
      : currentHour < 15
      ? "Noon"
      : currentHour < 17
      ? "Afternoon"
      : currentHour < 20
      ? "Evening"
      : "Night";

  return (
    <div className="date-weather-box">
      <div className="weather-box">
        <p className="weather-title">{areaName}</p>
        <div className="weather-sections">
          {arrray?.map((item, Index) => (
            <div key={Index} className="weather-day">
              <img
                className="weather-img"
                src={item.day.condition.icon}
                alt=""
              ></img>
              <div className="weather-details">
                <span className="weather-temp">{`${item.day.avgtemp_c}°C`}</span>
                <span className="weather-text">{item.day.condition.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="time-box">
        <h4 className="greetings-text" data-greeting>{`Good ${greeting}`}</h4>
        <p className="time-text" data-current-date="">
          {new Date().toDateString().replace(" ", ",  ")}
        </p>
      </div>
    </div>
  );
};

export default Weather;
