import React, { Children } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import ReactTooltip from 'react-tooltip';



function App() {
  return (
    <div className='app'>
      <ReactTooltip place='bottom' effect='solid' />
       
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} exact />
          <Route path="home" element={[<Home />, <SideBar/>]}/>
          <Route path="search" element={[<Search />, <SideBar/>]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
