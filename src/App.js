import Searchbar from './components/Searchbar.js';
import Display from './components/Display.js';
import Searchresult from './components/Searchresult.js';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
       <Searchbar />
       <Searchresult />
     
      <Routes>
          <Route exact path='/' element= {<Display location="Asia/Manila" />}/>
          <Route exact path='/UnitedStates' element= {<Display location="America/Los_Angeles"/>} />
          <Route exact path='/Algeria' element= {<Display location="Africa/Algiers"/>} />
          <Route exact path='/Argentina' element= {<Display location='America/Argentina/Buenos_Aires'/>} />
          <Route exact path='/Australia' element= {<Display location='Australia/Sydney'/>} />
          <Route exact path='/Bangladesh' element= {<Display location='Asia/Dhaka'/>} />
          <Route exact path='/Belgium' element= {<Display location='Europe/Brussels'/>} />
          <Route exact path='/Brazil' element= {<Display location='America/Sao_Paulo'/>} />
          <Route exact path='/Canada' element= {<Display location='America/Toronto'/>} />
          <Route exact path='/Chile' element= {<Display location='America/Santiago'/>} />
          <Route exact path='/China' element= {<Display location='Asia/Shanghai'/>} />
          <Route exact path='/Colombia' element= {<Display location='America/Bogota'/>} />
          <Route exact path='/Denmark' element= {<Display location='Europe/Copenhagen'/>} />
          <Route exact path='/Finland' element= {<Display location='Europe/Helsinki'/>} />
          <Route exact path='/France' element= {<Display location='Europe/Paris'/>} />
          <Route exact path='/Germany' element= {<Display location='Europe/Berlin'/>} />
          <Route exact path='/Greece' element= {<Display location='Europe/Athens'/>} />
          <Route exact path='/India' element= {<Display location='Asia/Kolkata'/>} />
          <Route exact path='/Indonesia' element= {<Display location='Asia/Jakarta'/>} />
          <Route exact path='/Italy' element= {<Display location='Europe/Rome'/>} />
          <Route exact path='/Japan' element= {<Display location='Asia/Tokyo'/>} />
          <Route exact path='/Kazakhstan' element= {<Display location='Asia/Almaty'/>} />
          <Route exact path='/Pakistan' element= {<Display location='Asia/Karachi'/>} />
          <Route exact path='/Russia' element= {<Display location='Europe/Moscow'/>} />
          <Route exact path='/UnitedKingdom' element= {<Display location='Europe/London'/>} />



       </Routes>
     
       
    
       
       
       
    </div>
   
  );
}

export default App;
