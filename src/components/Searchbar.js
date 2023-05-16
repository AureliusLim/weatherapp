import classes from '../layout/search.module.css'
function Searchbar(){
    return(
       <div>
        <input className={classes.searchbar} type="text" placeholder="Search a country"></input>
       </div>
    )

}
export default Searchbar;