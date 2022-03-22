import React, { useState } from 'react';
import './login.css'
import { Link } from "react-router-dom";

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState('');

    const handleLogin = (event) =>{
         if(username === 'login' && password === 'senha'){
             alert('ok');
         }else{
            alert('falhou');
            setUsername((username) => username ='');
            setPassword((password) => password = '');
         }
    }

    return(
        <>
            <div>
                <img className='loginImage' src={require('../../Assets/Wavy_Tech-10_Single-10.png')} alt=''/>
            </div>
            
                <h1 className='appName'>Crypto Manager</h1>
                <h3 className='slogan'>Seu gerenciador de criptomoeda</h3>

                <form className='loginContainer' >
                    
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Usuário' className='username' />
                    <img className='usernameImg' src={require('../../Assets/user.png')} alt=''/>

                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' className='password'/>
                    <img className='passwordImg' src={require('../../Assets/locker.png')} alt=''/>

                    <label className='forgotPassword'>Esqueceu sua senha?</label>
                   
                     <Link to='/home'>
                        <button className='signin' type='submit' onClick={handleLogin}>Entrar</button>
                     </Link>
                
                    <label className='account'>Não tem uma conta? <span>Clique aqui!</span></label>
                </form>

        </>
    )
}

export default Login