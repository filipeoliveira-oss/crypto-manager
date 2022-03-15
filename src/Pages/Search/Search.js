import { useAlert } from 'react-alert'
import React, { useState, useEffect } from 'react';
import './Search.css'
const axios = require('axios');

function Search(){
    const [asset, setAsset] = useState('')
    const [req, setReq] = useState([])
    const url = `https://api.coingecko.com/api/v3/coins/markets?price_change_percentage=24h&vs_currency=BRL&ids=${asset}`
    const alert = useAlert()


    function handleAsset(){
        const input = document.getElementsByClassName('inputAsset')

        setAsset(input.value)

        if(asset == '' || asset == undefined){
            alert.show('Por favor, digite um ativo')
        }else{
            axios.get(url)
            .then(function(response){
                setReq(response.data);
            })
        }
    }

    return(
        <>
            <div className='searchContainer'>
                <input className='inputAsset' placeholder='Busque por um ativo' onChange={e => setAsset(e.target.value)}></input>
                <button className='sarchBtn'  onClick={handleAsset} type='submit' >Buscar</button>
                <button className='assetsBtn'>?</button>
            </div>
            <hr width="320px" ></hr>

            <div className='infoContainer'>
                <div className='price'>
                    <h3 className='infoTitle'>Preço</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>R$ {req == ''?'':req[0].current_price}</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>Variação de {req == ''?'':(req[0].price_change_percentage_24h).toFixed(2)}%</h3>
                    <img src={req == ''?'':req[0].image} className='assetIcon'  style={{ visibility: req == ''? 'hidden': 'visible'}}/>
                </div>

                <div className='marketcap'>
                    <h3 className='infoTitle'>Valor de mercado</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>R$ {req == ''?'':req[0].market_cap}</h3>
                    <img src={require('../../Assets/crifao.png')} className='coinIcon'/>
                </div>

                <div className='variation'>
                    <h3 className='infoTitle'>Variação/24H</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>Alta: R$ {req == ''?'':req[0].high_24h}</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>Baixa: R$ {req == ''?'':req[0].low_24h}</h3>
                    <img src={require('../../Assets/chart2.png')} className='chartIcon'/>
                </div>
            </div>
        </>
    )
}

export default Search