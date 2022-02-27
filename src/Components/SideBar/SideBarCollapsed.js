import React from 'react';
import UseSwitchesCustom from '../ToggleTheme/ToggleTheme';
import './SideBarCollapsed.css'


function SideBar(){
    return(
        <>
            <div className='sideBar'>

                <div className='profile'>
                    <h3>FG</h3>
                    <h1 className='expand' >{'>'}</h1>
                </div>

                <div >
                    <button className='search'><img src={require('../../Assets/search.png')} alt='search'/></button>
                </div>

                <div >
                    <button className='home'><img src={require('../../Assets/home.png')} alt='home'/></button>
                </div>

                <div >
                    <button className='table'><img src={require('../../Assets/table.png')} alt='crypto'/></button>
                </div>

                <div >
                    <button className='logout'><img src={require('../../Assets/logout.png')} alt='logout'/></button>
                </div>

                <div >
                    <UseSwitchesCustom className='toggle'/>
                </div>
                
            </div>
        </>
    )
}


export default SideBar