/* eslint-disable */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AssetSearch.css'
import Loading from '../../Components/Loading/Loading';
import styled from 'styled-components'



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