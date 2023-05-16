import classes from "../layout/display.module.css";
import stormy from "../layout/stormy.png";
import Timedate from "./timedate.js";
import React, { useState, useEffect } from "react";
function Display(props) {
 

  return (
    <div className={classes.container}>
      <Timedate className={classes.time} timeZone={props.location}>
        
      </Timedate>

      <div className={classes.middle}>
        <h1>Philippines</h1>
        <p>{props.location}</p>
        <img src={stormy}></img>
        <h4>28°</h4>
        <h5>26°</h5>
        <h5>29°</h5>

        <h3>Stormy</h3>
      </div>
    </div>
  );
}
export default Display;
