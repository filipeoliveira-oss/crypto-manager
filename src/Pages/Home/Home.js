import React, { useEffect, useState } from 'react';
import './Home.css';
import SideBar from '../../Components/SideBar/SideBarCollapsed'

function Home(){

    
    const [news, setNews] = useState([]);

    useEffect(()=>{
        function loadApi(){
            let url = ''
    
            fetch(url)
            .then((r) => r.json())
            .then((json) =>{
                setNews(json)
            })
        }

        loadApi();
        console.log(news)
    }, [])
    

    return(
        <>  
            <SideBar/>
            <div>
                {news.map((item)=>{
                    return(
                        <article key={item.id} className='post'>
                            <strong className='titulo'>{item.title}</strong>
                            <img src={item.urlToImage} alt={item.title} className='capa'/>
                            <a className='botao'>Acessar</a>
                        </article>
                    )
                })}
            </div>
            
        </>
    )
}

export default Home;