import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [pastTimes, setPastTimes] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); 
  }, [isActive]);

  const toggle = () => {
    if (isActive) {
      setPastTimes((prevTimes) => [
        ...prevTimes,
        { hours, minutes, seconds },
      ]);
    }
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setPastTimes([]);
  };

  return (
    <div className='stop-watch-buttons'>
      <h1>
        {hours < 10 ? '0' + hours : hours}:
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </h1>
      <div>
        <button className='stop-watch-button' onClick={toggle}>
          {isActive ? 'Dayandır' : 'Başlat'}
        </button>
        <button className='stop-watch-button' onClick={reset}>Sıfırla</button>
      </div>

      <div className="past-times">
        <h3>Dövrlər</h3>
        <div>
          {pastTimes.map((time, index) => (
            <p key={index}>
              {time.hours < 10 ? '0' + time.hours : time.hours}:
              {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
              {time.seconds < 10 ? '0' + time.seconds : time.seconds}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
