import classes from '../layout/searchresult.module.css';
import {Link} from 'react-router-dom';
function Searchresult(){
    return(
        <div className={classes.container}>
            <div className={classes.rescontainer}>
            <Link to='Algeria'><p>Algeria</p></Link>
            <Link to='Argentina'><p>Argentina</p></Link>
            <Link to='Australia'><p>Australia</p></Link>
            <Link to='Bangladesh'><p>Bangladesh</p></Link>
            <Link to='Belgium'><p>Belgium</p></Link>
            <Link to='Brazil'><p>Brazil</p></Link>
            <Link to='Canada'><p>Canada</p></Link>
            <Link to='Chile'><p>Chile</p></Link>
            <Link to='China'><p>China</p></Link>
            <Link to='Colombia'><p>Colombia</p></Link>
            <Link to='Denmark'><p>Denmark</p></Link>
            <Link to='Finland'><p>Finland</p></Link>
            <Link to='France'><p>France</p></Link>
            <Link to='Germany'><p>Germany</p></Link>
            <Link to='Greece'><p>Greece</p></Link>
            <Link to='India'><p>India</p></Link>
            <Link to='Indonesia'><p>Indonesia</p></Link>
            <Link to='Italy'><p>Italy</p></Link>
            <Link to='Japan'><p>Japan</p></Link>
            <Link to='Kazakhstan'><p>Kazakhstan</p></Link>
            <Link to='Pakistan'><p>Pakistan</p></Link>
            <Link to=''><p>Philippines</p></Link>
            <Link to='Russia'><p>Russia</p></Link>
            <Link to='UnitedKingdom'><p>United Kingdom</p></Link>
            <Link to='UnitedStates'><p>United States</p></Link>
            </div>
        </div>
    )
}
export default Searchresult;