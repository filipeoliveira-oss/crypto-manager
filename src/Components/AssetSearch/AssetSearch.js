/* eslint-disable */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AssetSearch.css'
import Loading from '../../Components/Loading/Loading';
import styled from 'styled-components'

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
const Container = styled.div`
background-color: ${props => props.theme.assetsContainer}; 
color: ${props => props.theme.assetsColor};
width: 30%;
height: 80%;
border-radius: 20px;
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

    &::before, &::after{
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: ${props => props.theme.assetsCloseBtn};
        margin-top: 45px;
        right: 40px;
        
    }
    &::before{
        transform: rotate(45deg);
    }
    &::after{
        transform: rotate(-45deg);
    }
`

const AssetRow = styled.tr`

    &:hover{
        color: ${props => props.theme.assetsHoverColor};
        background-color: ${props => props.theme.assetsHoverBgc};

        transition: all ease 0.7s;
        cursor: pointer;
    }
`

const AssetName = styled.td`
display: flex;
padding-bottom: 10px;
margin-top: 5px;
border-bottom: solid 1px rgba(0, 0, 0, 0.2);
border-right: solid 1px rgba(0, 0, 0, 0.2);
`

const AssetId = styled.td`
border-bottom: solid 1px rgba(0, 0, 0, 0.2);
border-right: solid 1px rgba(0, 0, 0, 0.2);
`

const Content = styled.div`

`

function AssetSearch({ id = 'modal', onClose = () => { }}) {

    const [assetList, setAssetList] = useState([{}])
    const listUrl = 'https://api.coingecko.com/api/v3/coins/list'

    useEffect(() => {

        axios.get(listUrl)
            .then(function (response) {
                setAssetList(response.data)
            })
    }, [])

    const handleOutSideClick = (e) => {
        if (e.target.id === id) onClose();
    }


    return (

        <Modal id={id} className='modal' onClick={handleOutSideClick}>
            <Container className='container'>
                <CloseBtn className='closeBtn' onClick={onClose}></CloseBtn>
                <Content className='content'>
                    {assetList.length == 1 ? <Loading />
                        :
                        <table className='assetTable'>
                            <tbody>
                                <tr >
                                    <th className='tableName'>Nome</th>
                                    <th className='tableId'>ID</th>
                                </tr>
                                {assetList.map((item) => {
                                    return (
                                        <AssetRow key={item.id} className='assetRow'>
                                            <AssetName className='assetName'>{item.name}</AssetName>
                                            <AssetId className='assetId'>{item.id}</AssetId>
                                        </AssetRow>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </Content>
            </Container>
        </Modal>
    )

}

export default AssetSearch