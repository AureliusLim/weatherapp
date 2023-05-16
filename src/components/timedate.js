import React, { useState, useEffect } from "react";
import classes from "../layout/display.module.css";
function Timedate(props) {
  const [timeString, updateTime] = useState(new Date(new Date().toLocaleString('en-US', {timeZone: props.timeZone})));
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function addZero(val){
    if(val < 10){
        val = "0" + val;
    }
    return val;
  }
  useEffect(() => {
    const interval = setInterval(() => {
        updateTime(new Date(new Date().toLocaleString('en-US', {timeZone: props.timeZone})))
        
    }, 100);
    return () => clearInterval(interval);
  }, [timeString]);

  let weekday = timeString.getDay();
  let month = timeString.getMonth();
  let numberdate = timeString.getDate();
  let h = addZero(timeString.getHours() % 12);
  let m = addZero(timeString.getMinutes());
  let str = timeString.getHours() >= 12 ? 'pm' : 'am';
  let time = h + ":" + m + " " + str;
  return(
    <div className={classes.time}><p>{days[weekday]}, {months[month]} {numberdate} {time}</p>
    </div>
    
  )
}

export default Timedate;
