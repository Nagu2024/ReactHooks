import React from 'react'
import Home from './Home'
import Usestateh from './Usestateh'
import Usereducer from './Usereducer';
import Effectuse from './Effectuse';
import Useref from './Useref';
import Layouteffect from './Layouteffect';
import Usememo from './Usememo';
import Usecallback from './Usecallback';
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = () => {

  return (

  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Usestateh' element={<Usestateh/>}/>
    <Route path='/Usereducer' element={<Usereducer/>}/>
    <Route path='/Effectuse' element={<Effectuse/>}/>
    <Route path='/Useref' element={<Useref/>}/>
    <Route path='/Layouteffect' element={<Layouteffect/>}/>
    <Route path='/Usememo' element={<Usememo/>}/>
    <Route path='/Usecallback' element={<Usecallback/>}/>

  </Routes>
      
  </BrowserRouter>
    
  )
}

export default App