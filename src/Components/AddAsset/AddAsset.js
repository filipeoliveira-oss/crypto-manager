/* eslint-disable */
import React, { useContext, useState, useEffect } from 'react';
import { AssetListContext } from '../../Contexts/AssetList'
import nextId, { setPrefix } from "react-id-generator";
import { useAlert, positions } from 'react-alert';
import './AddAsset.css'
import {Modal,ContainerList, HeaderLabel, CloseButon, HeaderLine, AddAssetList, ValueAssetList, QuantityAssetList, TypeAssetList,TypeOption, AddAssetBtn} from '../../Components/TagComponents/TagComponents';
const axios = require('axios');

function AddAsset({ id = 'modal', onClose = () => { }, asset, setAsset }) {

    setPrefix('')
    var assetId = nextId()

    const { assetTable, setAssetTable } = useContext(AssetListContext)
    const [valueAssetList, setValueAssetList] = useState('')
    const [quantityAssetList, setQuantityAssetList] = useState('')
    const [typeAssetList, setTypeAssetList] = useState('')
    const [current, setCurrent] = useState()
    const alert = useAlert()
    const url = `https://api.coingecko.com/api/v3/coins/markets?price_change_percentage=24h&vs_currency=BRL&ids=${asset}`


    const handleOutSideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    useEffect(() => {

        localStorage.setItem("asset", JSON.stringify(assetTable));
    })



    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                if (response.data.length != 0) {
                    setCurrent(response.data[0].current_price)
                }
            })

    }, [typeAssetList])

    function handleAdd(e) {

        axios.get(url)
            .then(function (response) {
                if (response.data.length == 0) {
                    alert.error(`Por favor, digite um ativo válido. ${asset} é um ativo inexistente`,{
                        timeout: 3000,
                        position: positions.TOP_CENTER
                    })
                } else if (asset != '' && valueAssetList != '' &&
                    quantityAssetList != '' &&
                    typeAssetList != '') {
                    setAssetTable((assetTable) => [...assetTable, {
                        id: assetId,
                        asset: asset,
                        action: typeAssetList,
                        value: valueAssetList,
                        quantity: quantityAssetList,
                        current: current
                    }])

                    alert.success('Ativo adicionado', {
                        timeout: 2000,
                        position: positions.TOP_CENTER
                    })

                    setTypeAssetList('')
                    setAsset('')
                    setValueAssetList('')
                    setQuantityAssetList('')

                } else {
                    alert.error('Por favor, preencha todos os campos', {
                        timeout: 2000,
                        position: positions.TOP_CENTER
                    })
                }

            })

        e.preventDefault()
    }

    return (
        <Modal id={id} className='modal' onClick={handleOutSideClick}>
            <ContainerList className='containerList'>
                <div className='header'>
                    <HeaderLabel className='headerLabel'>Adicionar novo ativo</HeaderLabel>
                    <CloseButon className='closeBtn' onClick={onClose}></CloseButon>
                </div>
                <HeaderLine className='headerLine'></HeaderLine>
                <form className='contentList'>
                    <AddAssetList className='addAssetList' placeholder='Ativo' required value={asset} onChange={(e) => setAsset(e.target.value)}></AddAssetList><br />
                    <ValueAssetList className='valueAssetList' placeholder='Valor' required type='number' value={valueAssetList} onChange={(e) => setValueAssetList(e.target.value)}></ValueAssetList>
                    <QuantityAssetList className='quantityAssetList' placeholder='Quantidade' required type='number' value={quantityAssetList} onChange={(e) => setQuantityAssetList(e.target.value)}></QuantityAssetList><br />
                    <TypeAssetList name='Type' className='typeAssetList' value={typeAssetList} required onChange={(e) => setTypeAssetList(e.target.value)}>
                        <TypeOption value='' disabled selected>Selecione sua movimentação</TypeOption>
                        <TypeOption value='compra'>Compra</TypeOption>
                        <TypeOption value='venda'>Venda</TypeOption>
                    </TypeAssetList><br />
                    <AddAssetBtn className='addAssetBtn' type='submit' onClick={(e) => handleAdd(e)}>Adicionar ativo</AddAssetBtn>
                </form>
            </ContainerList>
        </Modal>
    )
}

export default AddAsset