import React from 'react';
import classes from './Homepage.module.css';
import { useNavigate } from 'react-router';
import Notes from '../../components/notes/Notes';
import WeatherApp from '../../components/weatherApp/WeatherApp';
import Dashboard from '../../components/dashboard/Dashboard';
import NewsApp from '../../components/newsApp/NewsApp';
import TimerApp from '../../components/timerApp/TimerApp';
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.Homepage}>
      {' '}
      <div className={classes.HomepageContent}>
        <div className={classes.leftSection}>
          <div className={classes.upperSection}>
            <div className={classes.Section1}>
              <Dashboard />
              <WeatherApp />
            </div>
            <div className={classes.Section2}>
              <Notes />
            </div>
          </div>
          <div className={classes.lowerSection}>
            <TimerApp />
          </div>
        </div>
        <div className={classes.rightSection}>
          <NewsApp />
        </div>
      </div>
      <div className={classes.SubmitButton}>
        {' '}
        <button onClick={() => navigate('/')}>Browse</button>
      </div>
    </div>
  );
};

export default Homepage;
