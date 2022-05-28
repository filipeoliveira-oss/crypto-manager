import React, { useState } from 'react';
import './login.css'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const AppName = styled.h1`
position: absolute;
width: 301px;
height: 56px;
left: 71%;
top: 30px;
align-items: center;
justify-content: center;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 56px;

color: ${props => props.theme.loginAppName};

white-space: nowrap;
`

const Slong = styled.h3`
position: absolute;
    width: 476px;
    height: 37px;
    left: 72%;
    top: 150px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 18px;

    color: ${props => props.theme.loginText};
`

const Username = styled.input`

    position: absolute;
    width: 435px;
    height: 48px;
    left: 62px;
    top: 102px;

    border: 1px solid ${props => props.theme.loginInputsBorder};
    box-sizing: border-box;
    border-radius: 40px;

    outline: none;
    padding-left: 15px;

    font-size: 20px;
    text-transform: uppercase;
    
    `
    const Password = styled.input`
    position: absolute;
    width: 435px;
    height: 48px;
    left: 62px;
    top: 181px;

    border: 1px solid ${props => props.theme.loginInputsBorder};
    box-sizing: border-box;
    border-radius: 40px;

    outline: none;
    padding-left: 15px;

    font-size: 20px;
    text-transform: uppercase;
    `

    const ForgotPassword = styled.label`
    position: absolute;
    width: 237px;
    height: 45px;
    left: calc(50% - 118.5px);
    top: 282px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    
    color: ${props => props.theme.loginText};

    cursor: pointer;
    `

    const SingIn = styled.button`
    position: absolute;
    width: 435px;
    height: 69px;
    left: 62px;
    top: 372px;

    background: ${props => props.theme.loginSignIn};
    border-radius: 40px;
    border:none; 
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;

    cursor: pointer;
    `

    const Account = styled.label`
   
        position: absolute;
        width: 341px;
        height: 45px;
        left: calc(50% - 170.5px);
        top: 462px;

    
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
    
        color: ${props => props.theme.loginText};
        white-space: nowrap;
    
    `


function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState('');
    

    const handleLogin = () =>{
         if(username === 'login' && password === 'senha'){
            return true
         }else{
            setUsername((username) => username ='');
            setPassword((password) => password = '');
            // alert('erro')
            return false
         }
    }


    return(
        <>
            <div>
                <img className='loginImage' src={require('../../Assets/Wavy_Tech-10_Single-10.png')} alt=''/>
            </div>

                <AppName className='appName'>Crypto Manager</AppName>
                <Slong className='slogan'>Seu gerenciador de criptomoeda</Slong>

                <form className='loginContainer' >

                    <Username type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Usuário' className='username'></Username>
                    <img className='usernameImg' src={require('../../Assets/user.png')} alt=''/>

                    <Password type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' className='password'/>
                    <img className='passwordImg' src={require('../../Assets/locker.png')} alt=''/>

                    <ForgotPassword className='forgotPassword'>Esqueceu sua senha?</ForgotPassword>

                    <Link to='/home'>
                        <SingIn className='signin' type='submit' onClick={handleLogin}>Entrar</SingIn>
                    </Link>

                    <Account className='account'>Não tem uma conta? <span>Clique aqui!</span></Account>
                </form>

        </>
    )
}

export default Login