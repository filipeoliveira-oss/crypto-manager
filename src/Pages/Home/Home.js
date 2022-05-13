import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import styled from 'styled-components'
import './Home.css';
const axios = require('axios');



const HomeContent = styled.div`
    
margin-left: 250px;
display: flex;
flex-direction: column;
margin-top: 25px;


`

const Welcome = styled.h1`
color: ${props => props.theme.homeText}

`

const News = styled.div`
position: absolute;
width: 80%;
height: 803px;
top: 125px;
z-index: -2;

background: ${props => props.theme.homeNews};
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
backdrop-filter: blur(4px);   
border-radius: 10px;
box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);

overflow: auto;


`
const A = styled.a`
text-decoration: none;
color: ${props => props.theme.homeText};
padding: 0px 15px;

    &.newsItem{
        display: flex;
        flex-direction: column;
        
        text-align: justify;
        align-items: flex-start;
        margin-left: 15px;
        margin-right: 15px;
        gap: 0;
            &:hover{
                background-color: ${props => props.theme.homeItemHover};
            }
    }
    
`

function Home(){

    const [articles, setArticles] = useState([{}]);
    const articlesUrl = 'http://api.mediastack.com/v1/news?access_key=c9a04d4270c73ef0d1b83d2b56dff60a&countries=br&sort=published_desc&limit=15&keywords=cripto'
    
    useEffect(()=>{

        axios.get(articlesUrl)
        .then(function(response){
            setArticles(response.data.data)
        })
    }, [])


    return(
        <HomeContent className='homeContent'>  
           
            <Welcome className='welcome'>Bem vindo(a), Filipe Gabriel</Welcome> 

            <News className='news'>
                {articles.length == 1? <Loading/>
                :
                <>
                    {articles.map((item)=>{
                        return(
                            <>
                            <A className='newsItem' key={item.published_at} href={item.url} target="_blank">
                                <h3 className='title'>{item.title}</h3>
                                <p className='description'>{item.description.split(' appeared first on InfoMoney')}</p>
                                <h3 className='info'>Publicado por {item.source} / {item.author} em {item.published_at.toString().slice(0, 10).split('-').reverse().join('/')} às {item.published_at.toString().slice(11, 19)}</h3>
                            </A>
                            <hr/>
                            </>
                        )
                    })}
                </>
                }
                    
            </News>
        </HomeContent>
    )
}

export default Home;