/* eslint-disable */
import React, { useState } from 'react';
import UseSwitchesCustom from '../ToggleTheme/ToggleTheme';
import { Link } from "react-router-dom";
import './SideBar.css'
import {Sidebar,Profile, Expand, Button, Logout } from '../../Components/TagComponents/TagComponents';

function SideBar(props) {


    const [isActive, setActive] = useState('false');

    const handleToggle = () => {
        setActive(!isActive);
    };

    function changeTheme() {
        var selectedTheme = localStorage.getItem('themeSelected')

        if (selectedTheme == 'light' || selectedTheme == null) {
            localStorage.setItem('themeSelected', 'dark')
            props.setTheme('dark')
        } else {
            localStorage.setItem('themeSelected', 'light')
            props.setTheme('light')
        }
    }


    return (
        <div className='sideBarContainer'>


            <Sidebar className={`sideBar${isActive ? "" : "--active"}`}>

                <Profile className={`profile${isActive ? "" : "--active"}`}>
                    <h3>FG</h3>
                    <Expand className={`expand${isActive ? "" : "--active"}`} onClick={handleToggle}>{'>'}</Expand>
                </Profile>

                <Link to='/search'>
                    <div>
                        <Button className={`search${isActive ? "" : "--active"}`}><img className='searchImg' src={require('../../Assets/search.png')} alt='search' /> <p>buscar</p></Button>
                    </div>
                </Link>


                <Link to='/home'>
                    <div >
                        <Button className={`home${isActive ? "" : "--active"}`}><img className='homeImg' src={require('../../Assets/home.png')} alt='home' /> <p>Início</p></Button>
                    </div>
                </Link>

                <Link to='/table'>
                    <div >
                        <Button className={`table${isActive ? "" : "--active"}`}><img className='tableImg' src={require('../../Assets/table.png')} alt='crypto' /> <p>ativos</p></Button>
                    </div>
                </Link>

                <Link to='/'>
                    <div >
                        <Logout className={`logout${isActive ? "" : "--active"}`}><img className='logoutImg' src={require('../../Assets/logout.png')} alt='logout' /><p>sair</p></Logout>
                    </div>
                </Link>


                <div onClick={changeTheme}>
                    <UseSwitchesCustom className={`toggle${isActive ? "" : "--active"}`} />
                </div>

            </Sidebar>

        </div>
    )
}


export default SideBar