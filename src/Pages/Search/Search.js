/* eslint-disable */

import { useAlert } from 'react-alert'
import React, { useState, useEffect } from 'react';
import './Search.css'
import AssetSearch from '../../Components/AssetSearch/AssetSearch';
import AddAsset from '../../Components/AddAsset/AddAsset';
const axios = require('axios');
import {SearchContainer, InputAsset, SearchBtn, AssetsBtn, AddAssetToTable, InfoContainer, Infos} from '../../Components/TagComponents/TagComponents';

function Search(props) {


    const [req, setReq] = useState([[]])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isAddModalVisible, setIsAddModalVisible] = useState(false)
    const url = `https://api.coingecko.com/api/v3/coins/markets?price_change_percentage=24h&vs_currency=BRL&ids=${props.asset}`
    const alert = useAlert()

    function HandleAsset() {

        if (props.asset == '' || props.asset == undefined) {
            alert.show('Por favor, digite um ativo')
        }
        else {
            axios.get(url)
                .then(function (response) {
                    setReq(response.data);
                })
        }
    }



    useEffect(() => {
        if (req.length == 0) {
            alert.error(`Por favor, digite um ativo válido`, {
                position: 'top center',
                timeout: 2000
            })
            props.setAsset('')
        }
    }, [req])



    return (
        <SearchContainer>
            <div className='searchContainer'>
                <InputAsset className='inputAsset' placeholder='Busque por um ativo' value={props.asset} onChange={e => props.setAsset(e.target.value)}></InputAsset>
                <SearchBtn className='searchBtn' onClick={HandleAsset} type='submit'>Buscar</SearchBtn>
                <AssetsBtn className='assetsBtn' onClick={() => { setIsModalVisible(true) }} data-tip="Ver lista de todos os ativos">?</AssetsBtn>
                <AddAssetToTable className='addAsset' data-hover='Adicionar ativo à lista' style={{ visibility: req == '' ? 'hidden' : 'visible' }} onClick={() => { setIsAddModalVisible(true) }}>+</AddAssetToTable>
                {isModalVisible ?
                    <AssetSearch onClose={() => setIsModalVisible(false)}
                        SetAsset={props.setAsset()} />
                    :
                    null
                }
                {isAddModalVisible ?
                    <AddAsset
                        onClose={() => setIsAddModalVisible(false)}
                        asset={props.asset}
                        setAsset={props.setAsset} />
                    :
                    null
                }
            </div>

            <hr width="320px" ></hr>

            <InfoContainer className='infoContainer'>
                <Infos className='price'>
                    <h3 className='infoTitle'>Preço</h3>
                    <h3 style={{ visibility: req == '' ? 'hidden' : 'visible' }}>R$ {req == '' ? '' : req[0].current_price}</h3>
                    <h3 style={{ visibility: req == '' ? 'hidden' : 'visible' }}>Variação de {req == '' ? '' : (req[0].price_change_percentage_24h).toFixed(2)}%</h3>
                    <img src={req == '' ? '' : req[0].image} className='assetIcon' style={{ visibility: req == '' ? 'hidden' : 'visible' }} alt='Icone do ativo' />
                </Infos>

                <Infos className='marketcap'>
                    <h3 className='infoTitle'>Valor de mercado</h3>
                    <h3 style={{ visibility: req == '' ? 'hidden' : 'visible' }}>R$ {req == '' ? '' : req[0].market_cap}</h3>
                    <img src={require('../../Assets/crifao.png')} className='coinIcon' alt='Icone de moeda' />
                </Infos>

                <Infos className='variation'>
                    <h3 className='infoTitle'>Variação/24H</h3>
                    <h3 style={{ visibility: req == '' ? 'hidden' : 'visible' }}>Alta: R$ {req == '' ? '' : req[0].high_24h}</h3>
                    <h3 style={{ visibility: req == '' ? 'hidden' : 'visible' }}>Baixa: R$ {req == '' ? '' : req[0].low_24h}</h3>
                    <img src={require('../../Assets/chart2.png')} className='chartIcon' alt='Icone de grafico' />
                </Infos>
            </InfoContainer>
        </SearchContainer>
    )
}

export default Search
