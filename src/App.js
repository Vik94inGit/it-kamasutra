import React from 'react';
import './App.css';
import Header from './componensts/Header'
import Navbar from './componensts/Navbar';
import Profile from './componensts/Profile';

const App =() =>{
  return (
    <div className='app-wrapper'>   
     <Header />
     <Navbar />
     <Profile />
    
       
     
    </div>
  );
}

export default App;
