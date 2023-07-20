import classes from "../layout/display.module.css";
import Timedate from "./timedate.js";
import Forecastitem from "./Forecastitem.js";
import React, { useState, useEffect } from "react";

import brokenclouds from "../layout/brokenclouds.png";
import fewclouds from "../layout/fewclouds.png";
import mist from "../layout/mist.png";
import rain from "../layout/rain.png";
import scatteredclouds from "../layout/scatteredclouds.png";
import showerrain from "../layout/showerrain.png";
import snow from "../layout/snow.png";
import sunny from "../layout/sunny.png";
import thunderstorm  from "../layout/thunderstorm.png";
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
 
    }
    catch{
      
    }
    


 
  
  
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
    }
    catch{

    }
    let icon;
    try{ // get weather icon
      if (desc ==="clear sky"){
        icon = sunny;
      }
      else if(desc === "few clouds"){
        icon = fewclouds;
      }
      else if (desc === "scattered clouds"){
        icon = scatteredclouds;
      }
      else if(desc === "broken clouds"){
        icon = brokenclouds;
      }
      else if(desc ==="shower rain"){
        icon = showerrain;
      }
      else if(desc === "rain"){
        icon = rain;
      }
      else if(desc === "snow"){
        icon = snow;
      }
      else if(desc === "mist"){
        icon = mist;
      }

      else if (link['weather'][0]['main'] === "Thunderstorm"){
        icon = thunderstorm;
      }
      else if (link['weather'][0]['main'] === "Clouds"){
        icon = scatteredclouds;
      }
      else if (link['weather'][0]['main'] === "Clear"){
        icon = sunny;
      }
      else if (link['weather'][0]['main'] === "Rain"){
        icon = rain;
      }
      else if (link['weather'][0]['main'] === "Drizzle"){
        icon = showerrain;
      }
      else if (link['weather'][0]['main'] === "Snow"){
        icon = snow;
      }
      else if (link['weather'][0]['main'] === "Mist"){
        icon = mist;
      }
    }
    catch{

    }
    let iconarr = ['','','','',''];
    let datearr = ['', '', '', '', '']
    try{ // get forecast icon for each day
      let indexarr = [9,17,25,33,39];
      let shortdesc,maindesc;
      let dateobj, monthdate, daydate;
      for (let count = 0; count < indexarr.length; count++){
        shortdesc = forecastlink['list'][indexarr[count]]['weather'][0]['description'];
        maindesc = forecastlink['list'][indexarr[count]]['weather'][0]['main'];
        dateobj = new Date(forecastlink['list'][indexarr[count]]['dt_txt']);
        dateobj.toLocaleString('en-US', { timeZone: props.location})
        monthdate = dateobj.getMonth() + 1;
        daydate = dateobj.getDate();
        datearr[count] = monthdate + '/' + daydate;
        
        if (shortdesc ==="clear sky"){
          iconarr[count] = sunny;
        }
        else if(shortdesc === "few clouds"){
          icon[count] = fewclouds;
        }
        else if (shortdesc === "scattered clouds"){
          iconarr[count] = scatteredclouds;
        }
        else if(shortdesc === "broken clouds"){
          iconarr[count] = brokenclouds;
        }
        else if(shortdesc ==="shower rain"){
          iconarr[count] = showerrain;
        }
        else if(shortdesc === "rain"){
          iconarr[count] = rain;
        }
        else if(shortdesc === "snow"){
          iconarr[count] = snow;
        }
        else if(shortdesc === "mist"){
          iconarr[count] = mist;
        }
        else if (maindesc === "Thunderstorm"){
          iconarr[count] = thunderstorm;
        }
        else if (maindesc  === "Clouds"){
          iconarr[count] = scatteredclouds;
        }
        else if (maindesc  === "Clear"){
          iconarr[count] = sunny;
        }
        else if (maindesc  === "Rain"){
          iconarr[count] = rain;
        }
        else if (maindesc  === "Drizzle"){
          iconarr[count] = showerrain;
        }
        else if (maindesc  === "Snow"){
          iconarr[count] = snow;
        }
        else if (maindesc  === "Mist"){
          iconarr[count] = mist;
        }
        
      }
    }
    catch{

    }
 
  
   
  return (
    <div className={classes.container}>
      <Timedate className={classes.time} timeZone={props.location}>
        
      </Timedate>

      <div className={classes.middle}>
        <h1>{props.country}</h1>
        <br/>
        <p>{props.city}</p>
        <br/>
        <img src={icon}></img>
        <br/>
        <h4>{temp}°</h4>
        <br/>
        <h5>{minTemp}°</h5>
        <h5>{maxTemp}°</h5>
        <br/>
        <h3>{desc}</h3>
      </div>
      <div className={classes.horizontal}><hr/></div>
      <div>
          <Forecastitem day= {day1} image={iconarr[0]} temp={temp1} date= {datearr[0]}/>
          <Forecastitem day= {day2} image={iconarr[1]} temp={temp2} date= {datearr[1]}/>
          <Forecastitem day = {day3} image={iconarr[2]} temp={temp3} date= {datearr[2]}/>
          <Forecastitem day = {day4} image={iconarr[3]} temp={temp4} date= {datearr[3]}/>
          <Forecastitem day = {day5} image={iconarr[4]} temp={temp5} date= {datearr[4]}/>
      </div>

    </div>
  );
}
export default Display;
