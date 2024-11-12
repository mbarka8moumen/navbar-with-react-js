
import jewelery from '../assets/jewelery.png'
import '../styles/App.css';
import React, { useState } from 'react';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <img src={jewelery} className='jewelery_img' ></img>
      <Navbar/>
      
    </div>
  )
  
}


export default App;
