import React from 'react';

import './App.css';
import Login from './Pages/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className='app'>
      <SideBar/> 
      <Home/>
    </div>
  );
}

export default App;
