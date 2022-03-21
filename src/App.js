import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import ReactTooltip from 'react-tooltip';
import Loading from './Components/Loading/Loading';
import AddAsset from './Components/AddAsset/AddAsset';


function App() {
  return (
    <div className='app'>
      <ReactTooltip place='bottom' effect='solid' />
      <SideBar/> 
      <Search/>
    </div>
  );
}

export default App;
