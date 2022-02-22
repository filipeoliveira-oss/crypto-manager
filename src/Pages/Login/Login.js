import React, { useState } from 'react';
import './login.css'


function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState('');


    return(
        <>
            <div>
                <img className='loginImage' src={require('../../Assets/Wavy_Tech-10_Single-10.png')}/>
            </div>
            
                <h1 className='appName'>Crypto Manager</h1>
                <h3 className='slogan'>Seu gerenciador de criptomoeda</h3>

                <form className='loginContainer' >
                    
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Usuário' className='username' />
                    <img className='usernameImg' src={require('../../Assets/user.png')}/>

                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' className='password'/>
                    <img className='passwordImg' src={require('../../Assets/locker.png')}/>

                    <label className='forgotPassword'>Esqueceu sua senha?</label>

                    <button className='signin'>Logar</button>

                    <label className='account'>Não tem uma conta? <span>Clique aqui!</span></label>
                </form>

        </>
    )
}

export default Login