import classes from '../layout/forecastitem.module.css';
function Forecastitem(props){
    
    return(
        <div className={classes.div}>
            <p>{props.day}</p>
            <img className= {classes.image} src={props.image}></img>
            <p>{props.temp}</p>
            <br/>
            <p>{props.date}</p>
        </div>
    )
}

export default Forecastitem;