import React, { useState } from 'react';
import styled from 'styled-components';
import UseSwitchesCustom from '../ToggleTheme/ToggleTheme';
import { Link } from "react-router-dom";
import './SideBar.css'

const Sidebar = styled.div`
    position: absolute;

    width: 98px;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: 0;
    background: ${props => props.theme.sidebarBGC};

    user-select: none;

    transition: ease all 0.7s;

        &.sideBar--active{
            position: absolute;
            width: 230px;
            height: 100%;
            left: 0px;
            top: 0px;
            margin: 0;
            background: ${props => props.theme.sidebarBGC};
            user-select: none;

            transition: ease all 0.7s;
        }
    `
    const Profile = styled.div`
        height: 57px;
        width: 61px;
        margin-left: calc(50% - 30.5px);
        
        background: ${props => props.theme.sidebarProfile};
        border-radius: 20px;

            &.profile--active{
                height: 57px;
                width: 61px;
                margin-left: calc(50% - 30.5px);
                
                background: ${props => props.theme.sidebarProfile};
                border-radius: 20px;
            }
            &.profile--active h3{
                display: flex;
    
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                
                color: ${props => props.theme.sidebarWhite};

                justify-content: center;
                padding-top: calc(50% - 25px);
            }
    `
    const Expand = styled.h1`
        width: 25px;
        height: 26px;
        background: ${props => props.theme.sidebarProfile};
        border-radius: 20px;
        cursor: pointer;
        text-align: center;
        color: ${props => props.theme.sidebarWhite};
        font-size: 24px;

        margin-left: 110%;
        margin-top: -70px;

        transition: ease all 0.7s;

            &.expand--active{
                width: 25px;
                height: 26px;
                background: ${props => props.theme.sidebarProfile};
                border-radius: 20px;
                cursor: pointer;
                text-align: center;
                color: ${props => props.theme.sidebarWhite};
                font-size: 24px;

                margin-left: 135px;
                margin-top: -70px;

                transform: rotateY(180deg);

                transition: ease all 0.7s;
            }
    `
    const Button = styled.button`
        position: inherit;
        display: flex;
        width: 76px;
        height: 70px;
        border-radius: 20px;
        border-style: none;
        background: ${props => props.theme.sidebarIcons};

        margin-top: 56px;
        margin-left: 11px;
        cursor: pointer;
        transition: ease all 0.7s;

            &.search--active, &.table--active, &.home--active{
                display: flex;
                width: 200px;
                height: 70px;
                border-radius: 20px;
                border-style: none;
                background: ${props => props.theme.sidebarIcons};

                margin-top: 56px;
                margin-left: 11px;

                transition: ease all 0.7s;
            }
    `
    const Logout = styled.button`
        position: inherit;
        display: flex;
        width: 76px;
        height: 70px;
        border-radius: 20px;
        border-style: none;
        background: ${props => props.theme.sidebarIcons};

        margin-top: 300px;
        margin-left: 11px;

        transition: all .3s ease;

            &.logout--active{
                display: flex;
                width: 200px;
                height: 70px;
                border-radius: 20px;
                border-style: none;
                background: ${props => props.theme.sidebarIcons};

                margin-top: 300px;
                margin-left: 11px;

                transition: ease all 0.7s;
            }
    `

function SideBar(props){
    

    const [isActive, setActive] = useState('false');

    const handleToggle = () => {
        setActive(!isActive);    
    };

    function changeTheme(){
        var selectedTheme = localStorage.getItem('themeSelected')
        
        if(selectedTheme == 'light' || selectedTheme == null){
            localStorage.setItem('themeSelected', 'dark')
            props.setTheme('dark')
        }else{
            localStorage.setItem('themeSelected', 'light')
            props.setTheme('light')
        }
    }

    return(
        <div className='sideBarContainer'>

            <Sidebar className={`sideBar${isActive ? "" : "--active"}`}>

                <Profile className={`profile${isActive ? "" : "--active"}`}>
                    <h3>FG</h3>
                    <Expand className={`expand${isActive ? "" : "--active"}`} onClick= {handleToggle}>{'>'}</Expand>
                </Profile>

                <Link to='/search'>
                    <div>
                        <Button className={`search${isActive ? "" : "--active"}`}><img className='searchImg' src={require('../../Assets/search.png')} alt='search'/> <p>buscar</p></Button>
                    </div>
                </Link>
                

                <Link to='/home'>
                    <div >
                        <Button className={`home${isActive ? "" : "--active"}`}><img className='homeImg' src={require('../../Assets/home.png')} alt='home' /> <p>home</p></Button>
                    </div>
                </Link>
                
                <Link to='/table'>
                    <div >
                        <Button className={`table${isActive ? "" : "--active"}`}><img className='tableImg' src={require('../../Assets/table.png')} alt='crypto'/> <p>ativos</p></Button>
                    </div>
                </Link>

                <Link to='/'>
                    <div >
                        <Logout className={`logout${isActive ? "" : "--active"}`}><img className='logoutImg' src={require('../../Assets/logout.png')} alt='logout'/><p>sair</p></Logout>
                    </div>
                </Link>
                    

                <div onClick={changeTheme}>
                    <UseSwitchesCustom className={`toggle${isActive ? "" : "--active"}`}/>
                </div>
                
            </Sidebar>

        </div>
    )
}


export default SideBar