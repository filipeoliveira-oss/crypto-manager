import React from 'react';
import './NotFound.css'
import { Link } from "react-router-dom";
import {Name, Info, Back } from '../../Components/TagComponents/TagComponents';


function NotFound(){
    return(
        <div className='Container'>
            <Name className='Name--error'>Crypto manager</Name>
            <Info className='Info--error'>Página não encontrada</Info>

            <Link to='/'>
                <Back className='Return--error'>Retorne para a página inicial clicando aqui</Back>
            </Link>
            
            <div>
                <img className='LogoImage' src={require('../../Assets/Wavy_Tech-10_Single-10.png')} alt='Loading'/>
            </div>
        </div>
    )
}

export default NotFound