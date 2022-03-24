import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import './Home.css';
const axios = require('axios');

function Home(){

    const [articles, setArticles] = useState([{}]);
    const articlesUrl = 'http://api.mediastack.com/v1/news?access_key=c9a04d4270c73ef0d1b83d2b56dff60a&countries=br&sort=published_desc&limit=15&keywords=cripto'
    
    useEffect(()=>{

        axios.get(articlesUrl)
        .then(function(response){
            setArticles(response.data.data)
            console.log(response.data.data)
        })
    }, [])


    return(
        <div className='homeContent'>  
           
            <h1>Bem vindo(a), Filipe Gabriel</h1> 

            <div className='news'>
                {articles.length == 1? <Loading/>
                :
                <>
                    {articles.map((item)=>{
                        return(
                            <>
                            <a className='newsItem' key={item.published_at} href={item.url} target="_blank">
                                <h3 className='title'>{item.title}</h3>
                                <p className='description'>{item.description.split(' appeared first on InfoMoney')}</p>
                                <h3 className='info'>Publicado por {item.source} / {item.author} em {item.published_at.toString().slice(0, 10).split('-').reverse().join('/')} às {item.published_at.toString().slice(11, 19)}</h3>
                            </a>
                            <hr/>
                            </>
                        )
                    })}
                </>
                }
                    
            </div>
        </div>
    )
}

export default Home;