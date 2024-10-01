import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Nav12 = () => {
  return (
        <div className='Navbar'>
        <Link to="/home" className='nav-link'>HOME</Link>
        <Link to="/cs" className='nav-link'>DEPARTMENT</Link>
        <Link to="/ch" className='nav-link'>HOD</Link>
        
       
       
       
        </div>
      
    
  );
};


export default Nav12;
