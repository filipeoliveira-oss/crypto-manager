import React from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './App.css';
import Login from './Pages/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';



function App() {
  return (
    <div className='app'>
      <SideBar/> 
      <Search/>
    </div>
  );
}

export default App;
