import React, { useContext, useState, useEffect } from 'react';
import { AssetListContext } from '../../Contexts/AssetList'
import nextId , { setPrefix } from "react-id-generator";
import { useAlert, positions} from 'react-alert';
import './AddAsset.css'
const axios = require('axios');


function AddAsset({ id = 'modal', onClose = () => { }, asset, setAsset}) {

    setPrefix('')
    var assetId = nextId()

    const { assetTable, setAssetTable } = useContext(AssetListContext)
    const [valueAssetList, setValueAssetList] = useState(null)
    const [quantityAssetList, setQuantityAssetList] = useState(null)
    const [typeAssetList, setTypeAssetList] = useState(null)
    const [current, setCurrent ] = useState()
    const alert = useAlert()
    const url = `https://api.coingecko.com/api/v3/coins/markets?price_change_percentage=24h&vs_currency=BRL&ids=${asset}`


    const handleOutSideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    useEffect(()=>{
        
        localStorage.setItem("asset", JSON.stringify(assetTable));
    }, )


    useEffect(()=>{
        axios.get(url)
        .then(function(response){
            setCurrent(response.data[0].current_price)
        })
    }, [typeAssetList])


    function handleAdd(e) {


        if (asset != null && valueAssetList != null &&
            quantityAssetList != null &&
            typeAssetList != null) {
            setAssetTable((assetTable) => [...assetTable, {
                id: assetId,
                asset: asset,
                action: typeAssetList,
                value: valueAssetList,
                quantity: quantityAssetList,
                current: current
            }])


            alert.success('Ativo adicionado',{
                timeout: 2000,
                position: positions.TOP_CENTER
            })

            
        }

        // setTypeAssetList('')
        // setAsset('')
        // setValueAssetList('')
        // setQuantityAssetList('')
        e.preventDefault()

    }

    return (
        <div id={id} className='modal' onClick={handleOutSideClick}>
            <div className='containerList'>
                <div className='header'>
                    <h1 className='headerLabel'>Adicionar novo ativo</h1>
                    <button className='closeBtn' onClick={onClose}></button>
                </div>
                <hr className='headerLine'></hr>
                <form className='contentList'>
                    <input className='addAssetList' placeholder='Ativo' required value={asset} onChange={(e) => setAsset(e.target.value)}></input><br />
                    <input className='valueAssetList' placeholder='Valor' required type='number' value={valueAssetList} onChange={(e) => setValueAssetList(e.target.value)}></input>
                    <input className='quantityAssetList' placeholder='Quantidade' required type='number'value={quantityAssetList} onChange={(e) => setQuantityAssetList(e.target.value)}></input><br />
                    <select name='Type' className='typeAssetList' value={typeAssetList} required onChange={(e) => setTypeAssetList(e.target.value)}>
                        <option value='' disabled selected>Selecione sua movimentação</option>
                        <option value='compra'>Compra</option>
                        <option value='venda'>Venda</option>
                    </select><br />
                    <button className='addAssetBtn' type='submit' onClick={(e) => handleAdd(e)}>Adicionar ativo</button>
                </form>
            </div>
        </div>
    )
}

export default AddAsset