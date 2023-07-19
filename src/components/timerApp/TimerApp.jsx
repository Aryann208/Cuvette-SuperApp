import { useState, useEffect } from 'react';
import TimerDisplay from './TimerDisplay.svg';
import TimerAlert from '../../assets/message-incoming-132126.mp3';
import classes from './TimerApp.module.css';
import Arrow1 from '../../assets/Arrow1.svg';
import Arrow2 from '../../assets/Arrow2.svg';
const TimerApp = () => {
  const [initialHours, setInitialHours] = useState(0);
  const [initialMinutes, setInitialMinutes] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const onChangeHandler = (e, setValue) => {
    const value = parseInt(e.target.value, 10);
    setValue(value >= 0 ? value : 0);
  };
  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };
  const increment = (setValue, max) => {
    setValue((prevValue) => Math.min(prevValue + 1, max));
  };

  const decrement = (setValue) => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };
  const playTune = () => {
    const audio = new Audio(TimerAlert);
    audio.play();
  };
  useEffect(() => {
    setHours(initialHours);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  }, [initialHours, initialMinutes, initialSeconds]);

  useEffect(() => {
    let timer;
    if (timerRunning) {
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      if (totalSeconds <= 0) {
        setTimerRunning(false);
        playTune();
      } else {
        timer = setTimeout(() => {
          const remainingSeconds = totalSeconds - 1;
          const remainingHours = Math.floor(remainingSeconds / 3600);
          const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
          const remainingSecondsOutput = remainingSeconds % 60;

          setHours(remainingHours);
          setMinutes(remainingMinutes);
          setSeconds(remainingSecondsOutput);
        }, 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [timerRunning, hours, minutes, seconds]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  return (
    <div className={classes.TimerApp}>
      <div>
        <div className={classes.TimerDisplay}>
          <div>
            <img src={TimerDisplay} alt="" />
            <p>
              {`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
                seconds
              )}`}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.TimerData}>
        <div className={classes.TimerInput}>
          <div>
            <label>Hours</label>
            <img
              src={Arrow1}
              alt=""
              onClick={() => decrement(setInitialHours)}
            />
            <input
              type="number"
              value={initialHours}
              onChange={(e) => onChangeHandler(e, setInitialHours, 23)}
            />
            <img
              src={Arrow2}
              alt=""
              onClick={() => increment(setInitialHours, 23)}
            />
          </div>
          <div>
            <label>Minutes</label>
            <img
              src={Arrow1}
              alt=""
              onClick={() => decrement(setInitialMinutes)}
            />
            <input
              type="number"
              value={initialMinutes}
              onChange={(e) => onChangeHandler(e, setInitialMinutes, 59)}
            />
            <img
              src={Arrow2}
              alt=""
              onClick={() => increment(setInitialMinutes, 59)}
            />
          </div>
          <div>
            <label>Seconds</label>
            <img
              src={Arrow1}
              alt=""
              onClick={() => decrement(setInitialSeconds)}
            />
            <input
              type="number"
              value={initialSeconds}
              onChange={(e) => onChangeHandler(e, setInitialSeconds, 59)}
            />
            <img
              src={Arrow2}
              alt=""
              onClick={() => increment(setInitialSeconds, 59)}
            />
          </div>
        </div>

        <button onClick={startTimer}>Start Timer</button>
      </div>
    </div>
  );
};

export default TimerApp;
