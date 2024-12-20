import React from 'react'
import { useState } from 'react';
const Watch = () => {
    const [hour,setHour]=useState(0);
    const [minute,setMinute]=useState(0);
    const [second,setSecond]=useState(0);

        setInterval(() => {
            let now = new Date();
            let current_hours = now.getHours();
            let current_minutes = now.getMinutes();
            let current_seconds = now.getSeconds();
            setHour(current_hours);
            setMinute(current_minutes);
            setSecond(current_seconds);
          },1000)
return(
    <div className='hour-style'>
      <h1>
        {(hour < 10 ? '0' : '') + hour}:
        {(minute < 10 ? '0' : '') + minute}:
        {(second < 10 ? '0' : '') + second}
      </h1>
</div>
  )
}

export default Watch
