import classes from "../layout/display.module.css";
import stormy from "../layout/stormy.png";
import Timedate from "./timedate.js";
import React, { useState, useEffect } from "react";
function Display(props) {
  let temp, minTemp, maxTemp, desc;
  let days = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat",
  ];
  function KtoC(val){
    return (val - 273).toFixed(2);
  }
  let appid = '07ba98f04c69fae44ba9990efbf45b6a';
  let locid = props.locid;
  let weatherlink = 'https://api.openweathermap.org/data/2.5/weather?id=' + locid + '&appid=' + appid;
  let fclink = 'https://api.openweathermap.org/data/2.5/forecast?id=' + locid + '&appid=' + appid;
  const [link, setLink] = useState();
  const[forecastlink, setforecastlink] = useState();
  const [currday, setcurrday] = useState(new Date(new Date().toLocaleString('en-US', {timeZone: props.location})));
  
  useEffect(()=>{// fetch the day
    const interval = setInterval(()=>{
      setcurrday(new Date(new Date().toLocaleString('en-US', {timeZone: props.location})))
      }, 1000);
      return ()=> clearInterval(interval);
  }, [currday]);
   let weekday = currday.getDay();
  

  useEffect(()=>{ // fetch current weather
    const interval = setInterval(()=>{
      fetch(weatherlink)
      .then(response => response.json())
      .then(data=>{
      
        setLink(data);
      })
    }, 3000);
    return ()=> clearInterval(interval);
  }, [link]);

  useEffect(()=>{ // fetch 5 day forecast
    const interval = setInterval(()=>{
      fetch(fclink)
      .then(response => response.json())
      .then(data=>{
        setforecastlink(data);
      })
    }, 3000);
    return ()=> clearInterval(interval);

  }, [forecastlink])


 
 
    try{
      temp = KtoC(link['main']['temp']);
      minTemp = KtoC(link['main']['temp_min']);
      maxTemp = KtoC(link['main']['temp_max']);
      desc = link['weather'][0]['description'];
      console.log(temp);
    }
    catch{
      
    }
    


 
  
    console.log(forecastlink)
    // get the next 5 days
    // 9, 17, 25, 33, 39
    let day1, day2, day3, day4, day5;
    let index;
    index = weekday;
    
    if (days[index] === 'Sat'){
      index = 0;
    }
    else{
      index += 1;
    }

    day1 = days[index] // set day 1

    if (day1 === 'Sat'){
      index = 0
    }
    else{
      index += 1;
    }

    day2 = days[index] // set day 2

    if (day2 === 'Sat'){
      index = 0
    }
    else{
      index += 1;
    }

    day3 = days[index] // set day 3

    if (day3 === 'Sat'){
      index = 0
    }
    else{
      index += 1;
    }

    day4 = days[index] // set day 4

    if (day4 === 'Sat'){
      index = 0
    }
    else{
      index += 1;
    }

    day5 = days[index] // set day 5
    
    // 9, 17, 25, 33, 39
    // get temp for each day
    let temp1, temp2, temp3, temp4, temp5
    try{
      temp1 = KtoC(forecastlink['list'][9]['main']['temp']);
      temp2 = KtoC(forecastlink['list'][17]['main']['temp']);
      temp3 = KtoC(forecastlink['list'][25]['main']['temp']);
      temp4 = KtoC(forecastlink['list'][33]['main']['temp']);
      temp5 = KtoC(forecastlink['list'][39]['main']['temp']);

      // // get desc for each day
      let desc1, desc2, desc3, desc4, desc5
      desc1 = KtoC(forecastlink['list'][9]['weather']['description']);
      desc2 = KtoC(forecastlink['list'][17]['weather']['description']);
      desc3 = KtoC(forecastlink['list'][25]['weather']['description']);
      desc4 = KtoC(forecastlink['list'][33]['weather']['description']);
      desc5 = KtoC(forecastlink['list'][39]['weather']['description']);
    }
    catch{

    }
    

 
  console.log(temp1);

  return (
    <div className={classes.container}>
      <Timedate className={classes.time} timeZone={props.location}>
        
      </Timedate>

      <div className={classes.middle}>
        <h1>{props.country}</h1>
        <br/>
        <p>{props.city}</p>
        <br/>
        <img src={stormy}></img>
        <br/>
        <h4>{temp}°</h4>
        <br/>
        <h5>{minTemp}°</h5>
        <h5>{maxTemp}°</h5>
        <br/>
        <h3>{desc}</h3>
      </div>
    </div>
  );
}
export default Display;
