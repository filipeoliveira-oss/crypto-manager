import React, { useEffect, useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import './Home.css';
const axios = require('axios');

function Home(){

    const [articles, setArticles] = useState([]);
   
    useEffect(()=>{

        function getArticles(){
            let url = 'http://api.mediastack.com/v1/news?access_key=c9a04d4270c73ef0d1b83d2b56dff60a&countries=br&sort=popularity&keywords=cripto'
            
            axios.get(url)
            .then(function (response) {
                // handle success
                setArticles((articles) => articles = response.data.data)
                // setArticles(response.data.data)
                console.log(articles);
            })
            
        }

        getArticles();

    }, [])


    return(
        <div className='homeContent'>  
           
            <h1>Bem vindo(a), Filipe Gabriel</h1> 

            <div className='news'>
                <a className='newsItem' href='#'>
                    <h3 className='title'>Titulo</h3>
                    <h3 className='description'>Descricao</h3>
                    <h3 className='info'>Publicado por 'FONTE / AUTOR' em 'DATA'</h3>
                </a>  
            </div>
        </div>
    )
}

export default Home;