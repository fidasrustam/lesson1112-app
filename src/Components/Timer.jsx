import React, { useState, useEffect } from 'react';
import './Timer.css';
import { incrementHour, decrementHour, incrementMinute, decrementMinute, incrementSecond, decrementSecond } from '../redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Timer = () => {
  const hour = useSelector((state) => state.counter.hour);
  const minute = useSelector((state) => state.counter.minute);
  const second = useSelector((state) => state.counter.second);
  const dispatch = useDispatch();

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [pastMeasurementArr, setPastMeasurementArr] = useState([]);

  useEffect(() => {
    setHours(hour);
    setMinutes(minute);
    setSeconds(second);
  }, [hour, minute, second]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          } else if (hours > 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            return 59;
          } else {
            clearInterval(interval);
            alert('Vaxt bitti!');
            stopTimer();
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, hours, minutes]);

  const startTimer = () => {
    if (!isRunning) {
      if (hours > 0 || minutes > 0 || seconds > 0) {
        setIsRunning(true);
      } else {
        alert('Vaxt təyin edin!');
      }
    } else {
      stopTimer();
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    setPastMeasurementArr((prev) => [
      ...prev,
      { hour: hours, minute: minutes, second: seconds },
    ]);
  };

  return (
    <div className='timer-container'>
      <div className='total'>
        <div className='hour'>
          <h2>{hour}</h2>
          <div className='buttons-inc-dec'>
            <button onClick={() => dispatch(incrementHour())}>+</button>
            <button onClick={() => dispatch(decrementHour())}>-</button>
          </div>
        </div>
        <div className='minute'>
          <h2>{minute}</h2>
          <div className='buttons-inc-dec'>
            <button onClick={() => dispatch(incrementMinute())}>+</button>
            <button onClick={() => dispatch(decrementMinute())}>-</button>
          </div>
        </div>
        <div className='second'>
          <h2>{second}</h2>
          <div className='buttons-inc-dec'>
            <button onClick={() => dispatch(incrementSecond())}>+</button>
            <button onClick={() => dispatch(decrementSecond())}>-</button>
          </div>
        </div>
      </div>
      <button className='timer-button' onClick={startTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <h1>
        {(hours < 10 ? '0' : '') + hours}:
        {(minutes < 10 ? '0' : '') + minutes}:
        {(seconds < 10 ? '0' : '') + seconds}
      </h1>
      <div className='past-measurements'>
        <h3>Keçmiş ölçmələr</h3>
        {pastMeasurementArr.map((measurement, index) => (
          <p key={index}>
            {measurement.hour.toString().padStart(2, '0')}:
            {measurement.minute.toString().padStart(2, '0')}:
            {measurement.second.toString().padStart(2, '0')}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Timer;
