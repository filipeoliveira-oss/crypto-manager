/* eslint-disable */
import React, { useState } from 'react';
import './login.css'
import { Link } from "react-router-dom";
import { AppName, Slong, Username,Password, ForgotPassword, SingIn, Account} from '../../Components/TagComponents/TagComponents';


function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState('');
    return(
        <>
            <div>
                <img className='loginImage' src={require('../../Assets/Wavy_Tech-10_Single-10.png')} alt='Loading'/>
            </div>

                <AppName className='appName'>Crypto Manager</AppName>
                <Slong className='slogan'>Seu gerenciador de criptomoeda</Slong>

                <form className='loginContainer' >

                    <Username type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Usuário' className='username'></Username>
                    <img className='usernameImg' src={require('../../Assets/user.png')} alt='Usernamen'/>

                    <Password type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' className='password'/>
                    <img className='passwordImg' src={require('../../Assets/locker.png')} alt='Password'/>

                    <ForgotPassword className='forgotPassword'>Esqueceu sua senha?</ForgotPassword>

                    <Link to='/home'>
                        <SingIn className='signin' type='submit'>Entrar</SingIn>
                    </Link>

                    <Account className='account'>Não tem uma conta? <span>Clique aqui!</span></Account>
                </form>

        </>
    )
}

export default Login