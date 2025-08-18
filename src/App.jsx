
import { Route, Routes } from 'react-router-dom';
import './App.css'

import FixE from './components/fixede';




import Uzbekistan from './components/uzb';
import Rus from './components/rus';


function App() {
  

  return (
    
      <>

      <Routes>
        <Route path='/' element={<FixE/>}/>
        <Route path='/rus' element={<Rus/>}/>
        <Route path='/uzb' element={<Uzbekistan/>}/>
      </Routes>
      
      </>
   
  
  )
}

export default App
