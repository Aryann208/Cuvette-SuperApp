import React, { useState, useEffect } from 'react';
import classes from './WeatherApp.module.css';
import ATMlogo from '../../assets/atmPressure.svg';
import WindSpeedlogo from '../../assets/windSpeed.svg';
import HumidityLogo from '../../assets/humidity.svg';
const WeatherApp = () => {
  const [weather, setWeather] = useState({
    weather: '',
    icon: null,
    temperature: '',
    atmPressure: '',
    windSpeed: '',
    humidity: '',
    time: '',
  });
  const WEATHERAPIKEY = process.env.REACT_APP_WEATHERAPIKEY;
  useEffect(() => {
    const fetchData2 = async () => {
      const url2 = `http://api.weatherapi.com/v1/current.json?key=${WEATHERAPIKEY}&q=Dehradun&aqi=no`;

      try {
        const response = await fetch(url2);
        if (response.ok) {
          const data = await response.json();
          console.log(data.current.temp_c);
          setWeather({
            weather: data.current.condition.text,
            icon: data.current.condition.icon,
            temperature: data.current.temp_c,
            atmPressure: data.current.pressure_mb,
            windSpeed: data.current.wind_kph,
            humidity: data.current.humidity,
            time: data.current.last_updated,
          });
        } else {
          console.error('Request Denied');
        }
      } catch (error) {
        console.error('Error: ' + error);
      }
    };
    fetchData2();
  }, [WEATHERAPIKEY]);
  return (
    <div className={classes.weatherInfo}>
      <h2>{weather.time}</h2>
      <div className={classes.weatherMetadata}>
        <div className={classes.flexSection}>
          <img className={classes.weatherIcon} src={weather.icon} alt="" />
          <h3>{weather.weather}</h3>
        </div>
        <div className={classes.VerticalLine}></div>
        <div className={classes.flexSection}>
          <h3 className={classes.temperature}>{weather.temperature}°C</h3>
          <div>
            <img src={ATMlogo} alt="" />
            <h3>
              {weather.atmPressure} mbar <span>Pressure</span>
            </h3>
          </div>
        </div>
        <div className={classes.VerticalLine}></div>
        <div className={classes.flexSection}>
          <div>
            <img src={WindSpeedlogo} alt="" />
            <h3>
              {weather.windSpeed} km/h <span>Wind</span>
            </h3>
          </div>
          <div>
            <img src={HumidityLogo} alt="" />
            <h3>
              {weather.humidity}% <span>Humidity</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
