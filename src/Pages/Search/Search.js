import { useAlert, position, style } from 'react-alert'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './Search.css'
import AssetSearch from '../../Components/AssetSearch/AssetSearch';
import AddAsset from '../../Components/AddAsset/AddAsset';
const axios = require('axios');



const InputAsset = styled.input`
    border: none;
    background-color: ${props=> props.theme.searchInput};
    outline: none;
    text-transform: uppercase;
    width: 173px;
    height: 17px;
    color: ${props=> props.theme.searchInputText}

`
const SearchBtn = styled.button`
    width: 76px;
    height: 35px;
    margin-top: -15px;
    margin-left: 10px;
    border-radius: 20px;
    
    background-color: ${props=> props.theme.searchBtn};
    color: ${props=> props.theme.searchBtnColor};
    font-weight: bold;
    cursor: pointer;
    border: 1px solid ${props=> props.theme.searchBtnBorder};

        &:hover{
            background-color: ${props=> props.theme.searchBtnColor};
            transition: all ease 0.3s;
            color: ${props=> props.theme.searchHoverColor};
        }
`

const AssetsBtn = styled.button`
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: 10px;
    border-radius: 100%;

    background-color: ${props=> props.theme.searchBtn};
    color: ${props=> props.theme.searchBtnColor};
    font-weight: bold;
    cursor: pointer;
    border: 1px solid ${props=> props.theme.searchBtnBorder};
        
    &:hover{
        background-color: ${props=> props.theme.searchBtnColor};
        transition: all ease 0.3s;
        color: ${props=> props.theme.searchHoverColor};
    }
`

const AddAssetToTable = styled.button`
    width: 30px;
    height: 30px;
    margin-top: 85px;
    margin-left: -30px;
    border-radius: 100%;

    background-color: ${props=> props.theme.searchBtn};
    color: ${props=> props.theme.searchBtnColor};
    font-weight: bold;
    cursor: pointer;
    border: 1px solid ${props=> props.theme.searchBtnBorder};

    transition: all ease 0.3s;

        &:hover{
            font-size: 0;
            width: 220px;
            height: 30px;
            border-radius: 20px;
            margin-left: -220px;
            background-color: ${props=> props.theme.searchBtnColor};
            transition: all ease 0.3s;

                &:after{
                    position: absolute;
                    content: attr(data-hover);
                    font-size: 12px;
                    width: 220px;
                    height: 30px;
                    margin-top: -7px;
                    margin-left: -100px;
                    color: ${props=> props.theme.searchHoverColor};
                    cursor: pointer;  
                }
        }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: center;
    margin-top:80px;
        
        
`
const Infos = styled.div`
&.price, &.marketcap, &.variation{
    width: 279px;
    height: 137px;
    background-color: ${props=> props.theme.serachInfos};
    padding-left: 10px;

    border-radius: 10px;
    box-shadow:  8px 5px 5px ${props=> props.theme.searchGray};
}
`

function Search(){


    const [asset, setAsset] = useState('')
    const [req, setReq] = useState([[]])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isAddModalVisible, setIsAddModalVisible] = useState(false)
    const url = `https://api.coingecko.com/api/v3/coins/markets?price_change_percentage=24h&vs_currency=BRL&ids=${asset}`
    const alert = useAlert()
    
    function HandleAsset(){

        if(asset == '' || asset == undefined){
            alert.show('Por favor, digite um ativo')
        }
        else{
            axios.get(url)
            .then(function(response){
                setReq(response.data);
            })
        } 
    }

    useEffect(()=>{
        if (req.length == 0){
            alert.error(`Por favor, digite um ativo válido`,{
                position: 'top center',
                timeout: 2000
            })
            setAsset('')
        }
    }, [req])


    return(
        <>
            <div className='searchContainer'>
                <InputAsset className='inputAsset' placeholder='Busque por um ativo' value={asset} onChange={e => setAsset(e.target.value)}></InputAsset>
                <SearchBtn className='searchBtn'  onClick={HandleAsset} type='submit'>Buscar</SearchBtn>
                <AssetsBtn className='assetsBtn' onClick={()=>{setIsModalVisible(true)}} data-tip="Ver lista de todos os ativos">?</AssetsBtn>
                <AddAssetToTable className='addAsset' data-hover='Adicionar ativo à lista'style={{ visibility: req == ''? 'hidden': 'visible'}} onClick={()=>{setIsAddModalVisible(true)}}>+</AddAssetToTable>
                {isModalVisible ? 
                    <AssetSearch onClose={()=>setIsModalVisible(false)}/> 
                    : 
                    null
                }
                {isAddModalVisible ? 
                    <AddAsset
                    onClose={()=>setIsAddModalVisible(false)} useAsset={asset}/> 
                    : 
                    null
                }
            </div>

            <hr width="320px" ></hr>

            <InfoContainer className='infoContainer'>
                <Infos className='price'>
                    <h3 className='infoTitle'>Preço</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>R$ {req == ''?'':req[0].current_price}</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>Variação de {req == ''?'':(req[0].price_change_percentage_24h).toFixed(2)}%</h3>
                    <img src={req == ''?'':req[0].image} className='assetIcon'  style={{ visibility: req == ''? 'hidden': 'visible'}} alt='Icone do ativo'/>
                </Infos>

                <Infos className='marketcap'>
                    <h3 className='infoTitle'>Valor de mercado</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>R$ {req == ''?'':req[0].market_cap}</h3>
                    <img src={require('../../Assets/crifao.png')} className='coinIcon' alt='Icone de moeda'/>
                </Infos>

                <Infos className='variation'>
                    <h3 className='infoTitle'>Variação/24H</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>Alta: R$ {req == ''?'':req[0].high_24h}</h3>
                    <h3 style={{ visibility: req == ''? 'hidden': 'visible'}}>Baixa: R$ {req == ''?'':req[0].low_24h}</h3>
                    <img src={require('../../Assets/chart2.png')} className='chartIcon' alt='Icone de grafico'/>
                </Infos>
            </InfoContainer>
        </>
    )
}

export default Search
