import React, { useEffect, useState } from 'react';
import classes from './Homepage.module.css';
import Avatar from '../../assets/image 14.png';
import ATMlogo from '../../assets/atmPressure.svg';
import WindSpeedlogo from '../../assets/windSpeed.svg';
import HumidityLogo from '../../assets/humidity.svg';
const Homepage = () => {
  const [article, setArticle] = useState(null);
  const [weather, setWeather] = useState({
    weather: '',
    icon: null,
    temperature: '',
    atmPressure: '',
    windSpeed: '',
    humidity: '',
    time: '',
  });
  const [userData, setUserData] = useState(null);
  const [userCategories, setUserCategories] = useState(null);
  const NEWSAPIKEY = process.env.REACT_APP_NEWSAPIKEY;
  const WEATHERAPIKEY = process.env.REACT_APP_WEATHERAPIKEY;

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) setUserData(JSON.parse(storedUserData));

    const storedCategories = localStorage.getItem('category');
    if (storedCategories) setUserCategories(JSON.parse(storedCategories));
  }, []);

  useEffect(() => {
    const fetchData1 = async () => {
      const url1 = `https://newsapi.org/v2/everything?q=keyword&apiKey=${NEWSAPIKEY}`;

      try {
        const response = await fetch(url1);
        if (response.ok) {
          const data = await response.json();
          const articleNum = Math.floor(Math.random() * data.articles.length);
          setArticle(data.articles[articleNum]);
        } else {
          console.error('Request Denied');
        }
      } catch (error) {
        console.error('Error: ' + error);
      }
    };
    fetchData1();
  }, [NEWSAPIKEY]);

  useEffect(() => {
    console.log(WEATHERAPIKEY);
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
    <div className={classes.Homepage}>
      <div className={classes.leftSection}>
        <div className={classes.dashboard}>
          <img src={Avatar} alt="" />

          <div className={classes.dashboardInfo}>
            <div className={classes.userMetadata}>
              <p>{userData?.name}</p>
              <p>{userData?.email}</p>
              <h2>{userData?.username}</h2>
            </div>
            <div className={classes.userCategories}>
              {userCategories?.map((category, index) => (
                <p key={index} className={classes.category}>
                  {category}
                </p>
              ))}
            </div>
          </div>
        </div>
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
      </div>
      <div className={classes.rightSection}>
        <div className={classes.newsContainer}>
          <img src={article?.urlToImage} alt="" />
          <div className={classes.newsMetadata}>
            <h4>{article?.title} </h4> <h6>{article?.publishedAt}</h6>
          </div>
          <p>{article?.description} </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
