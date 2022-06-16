/* eslint-disable */
import React, { useContext, useState, useEffect } from 'react';
import { AssetListContext } from '../../Contexts/AssetList'
import nextId, { setPrefix } from "react-id-generator";
import { useAlert, positions } from 'react-alert';
import './AddAsset.css'
import styled from 'styled-components';
const axios = require('axios');

const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
const CloseBtn = styled.button`
background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    display: flex;
    margin-left: calc(100% - 30px);
    cursor: pointer;
    position: relative;
   
    &::before, &::after{
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: ${props => props.theme.addAssetsCloseBtn};
        margin-top: 5px;
        right: 40px;
        
    }
    &::before{
        transform: rotate(45deg);
    }
    &::after{
        transform: rotate(-45deg);
    }
`

const HeaderLine = styled.hr`
    width: 90%;
    color: white; 
`

const HeaderLabel = styled.h1`
    color: ${props => props.theme.addAssetHeaderLabelColor};
    font-size: 20px;
    margin-left: 25px;
    margin-top: 5px;
    font-weight: bold ;
    flex-direction: row;
`

const ContainerList = styled.div`
width: 400px;
height: 300px;
background-color: ${props => props.theme.addAssetsContainerListBgc};
`

const AddAssetBtn = styled.button`
    width: 88%;
    height: 35px;
    text-align: center;
    margin-left: 6.5%;
    font-weight: 600;
    border: none;
    border-radius:5px;
    color: ${props => props.theme.addAssetBtnColor};
    background-color:${props => props.theme.addAssetBtnBgc};

        &:hover{
            -webkit-filter: brightness(100%);   
            background-color: ${props => props.theme.addAssetBtnBgcHover};
        
            transition: all ease 0.3s;
        }
`

const AddAssetList = styled.input`
        &:focus{
            outline: 1px solid ${props => props.theme.addAssetListOutline};
        }
`
const TypeAssetList = styled.select`
        &:focus{
            outline: 1px solid ${props => props.theme.addAssetListOutline};
        }
`
const TypeOption = styled.option``

const ValueAssetList = styled.input`
        &:focus{
            outline: 1px solid ${props => props.theme.addAssetListOutline};
        }
`
const QuantityAssetList = styled.input`
        &:focus{
            outline: 1px solid ${props => props.theme.addAssetListOutline};
        }
`
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
                    <CloseBtn className='closeBtn' onClick={onClose}></CloseBtn>
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