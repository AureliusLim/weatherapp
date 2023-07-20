import Searchbar from './components/Searchbar.js';
import Display from './components/Display.js';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
       <Searchbar />
      
     
      <Routes>
          <Route exact path='/' element= {<Display location="Asia/Manila" country="Philippines" city="Metro Manila" locid='1701667'/>}/>
          <Route exact path='/UnitedStates' element= {<Display location="America/Los_Angeles" country="United States" city="Los Angeles" locid='5368361'/>} />
          <Route exact path='/Algeria' element= {<Display location="Africa/Algiers" country="Algeria" city="Algiers" locid='2507480'/>} />
          <Route exact path='/Argentina' element= {<Display location='America/Argentina/Buenos_Aires' country="Argentina" city="Buenos Aires" locid='3435907'/>} />
          <Route exact path='/Australia' element= {<Display location='Australia/Sydney' country="Australia" city="Sydney" locid='2147714'/>} />
          <Route exact path='/Bangladesh' element= {<Display location='Asia/Dhaka' country="Bangladesh" city="Dhaka" locid='1185241'/>} />
          <Route exact path='/Belgium' element= {<Display location='Europe/Brussels' country="Belgium" city="Brussels" locid='2800866'/>} />
          <Route exact path='/Brazil' element= {<Display location='America/Sao_Paulo' country="Brazil" city="Sao Paulo" locid='3448433'/>} />
          <Route exact path='/Canada' element= {<Display location='America/Toronto' country="Canada" city="Toronto" locid='6087824'/>} />
          <Route exact path='/Chile' element= {<Display location='America/Santiago' country="Chile" city="Santiago" locid='3871332'/>} />
          <Route exact path='/China' element= {<Display location='Asia/Shanghai' country="China" city="Shanghai" locid='1796236'/>} />
          <Route exact path='/Colombia' element= {<Display location='America/Bogota' country="Colombia" city="Bogota" locid='3686120'/>} />
          <Route exact path='/Denmark' element= {<Display location='Europe/Copenhagen' country="Denmark" city="Copenhagen" locid='2618425'/>} />
          <Route exact path='/Finland' element= {<Display location='Europe/Helsinki' country="Finland" city="Helsinki" locid='658225'/>} />
          <Route exact path='/France' element= {<Display location='Europe/Paris' country="France" city="Paris" locid='2968815'/>} />
          <Route exact path='/Germany' element= {<Display location='Europe/Berlin' country="Germany" city="Berlin" locid='2950159'/>} />
          <Route exact path='/Greece' element= {<Display location='Europe/Athens' country="Greece" city="Athens" locid='264371'/>} />
          <Route exact path='/India' element= {<Display location='Asia/Kolkata' country="India" city="Kolkata" locid='1275004'/>}/>
          <Route exact path='/Indonesia' element= {<Display location='Asia/Jakarta' country="Indonesia" city="Jakarta" locid='1642911'/>}/>
          <Route exact path='/Italy' element= {<Display location='Europe/Rome' country="Italy" city="Rome" locid='3169070'/>}/>
          <Route exact path='/Japan' element= {<Display location='Asia/Tokyo' country="Japan" city="Tokyo" locid='1850147'/>}/>
          <Route exact path='/Kazakhstan' element= {<Display location='Asia/Almaty' country="Kazakhstan" city="Almaty" locid='1526384'/>}/>
          <Route exact path='/Pakistan' element= {<Display location='Asia/Karachi' country="Pakistan" city="Karachi" locid='1174872'/>}/>
          <Route exact path='/Russia' element= {<Display location='Europe/Moscow'country="Russia" city="Moscow" locid='524894'/> }/>
          <Route exact path='/UnitedKingdom' element= {<Display location='Europe/London' country="United Kingdom" city="London" locid='2643743'/>}/>



       </Routes>
     
       
    
       
       
       
    </div>
   
  );
}

export default App;
