import React, { useState } from 'react';
import UseSwitchesCustom from '../ToggleTheme/ToggleTheme';
import { Link } from "react-router-dom";
import './SideBar.css'


function SideBar(){

    const [isActive, setActive] = useState('false');

    const handleToggle = () => {
        setActive(!isActive);    
               
    };

    return(
        <div className='sideBarContainer'>

            <div className={`sideBar${isActive ? "" : "--active"}`}>

                <div className={`profile${isActive ? "" : "--active"}`}>
                    <h3>FG</h3>
                    <h1 className={`expand${isActive ? "" : "--active"}`} onClick= {handleToggle}>{'>'}</h1>
                </div>

                <Link to='/search'>
                    <div>
                        <button className={`search${isActive ? "" : "--active"}`}><img className='searchImg' src={require('../../Assets/search.png')} alt='search'/> <p>buscar</p></button>
                    </div>
                </Link>
                

                <Link to='/home'>
                    <div >
                        <button className={`home${isActive ? "" : "--active"}`}><img className='homeImg' src={require('../../Assets/home.png')} alt='home'/> <p>home</p></button>
                    </div>
                </Link>
                
                <Link to='/table'>
                    <div >
                        <button className={`table${isActive ? "" : "--active"}`}><img className='tableImg' src={require('../../Assets/table.png')} alt='crypto'/> <p>ativos</p></button>
                    </div>
                </Link>

                <Link to='/'>
                    <div >
                        <button className={`logout${isActive ? "" : "--active"}`}><img className='logoutImg' src={require('../../Assets/logout.png')} alt='logout'/><p>sair</p></button>
                    </div>
                </Link>
                    

                <div >
                    <UseSwitchesCustom className={`toggle${isActive ? "" : "--active"}`}/>
                </div>
                
            </div>

        </div>
    )
}


export default SideBar