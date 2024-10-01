import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CS from './CS';

import CH from './CH'


import Home from './Home';
import './App.css';
import Nav12 from './Nav12';


function App() {
   return (
    <>
     <div className="title">
        <div className="logodiv">
          <img
            src="https://th.bing.com/th/id/OIP.1Vd1r38olMHT4R-9ktrgAgAAAA?w=114&h=150&c=7&r=0&o=5&dpr=1.9&pid=1.7"
            alt="Logo"
            className="logo"
          />
        </div>
        <h3 className="subheading">
          GOVERNMENT OF KARNATAKA <br />
          DEPARTMENT OF COLLEGIATE AND TECHNICAL EDUCATION
        </h3>
        <span>
          <h2 className="Head">
            KARNATAKA (GOVT.) POLYTECHNIC MANGALURU <br />
            KADRI HILLS MANGALURU-575004
          </h2>
        </span>
      </div>
   
    <Router>
      <div>
        <Nav12/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cs" element={<CS />} />
          <Route path="/ch" element={<CH />} />
     
      
        
        </Routes>
      </div>
    </Router>
     
    </>
  )
}

export default App
