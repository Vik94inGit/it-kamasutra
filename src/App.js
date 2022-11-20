import React from 'react';
import './App.css';
import Dialogs from './componensts/Dialogs/Dialogs';
import Header from './componensts/Header/Header'
import Navbar from './componensts/Navbar/Navbar';
import Profile from './componensts/Profile/Profile';

const App =() =>{
  return (
    <div className='app-wrapper'>   
     <Header />
     <Navbar />
     <Profile />
     <Dialogs />
    
       
     
    </div>
  );
}

export default App;
