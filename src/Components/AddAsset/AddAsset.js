import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { AssetListContext } from '../../Contexts/AssetList'
import './AddAsset.css'

function AddAsset({ id = 'modal', onClose = () => { } }) {

    const handleOutSideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    const { assetTable, setAssetTable } = useContext(AssetListContext)
    const [addAssetList, setAddAssetList] = useState(null)
    const [valueAssetList, setValueAssetList] = useState(null)
    const [quantityAssetList, setQuantityAssetList] = useState(null)
    const [typeAssetList, setTypeAssetList] = useState(null)

    function handleAdd(e) {
        if (addAssetList != null && valueAssetList != null &&
            quantityAssetList != null &&
            typeAssetList != null) {
            setAssetTable((assetTable) => [...assetTable, {
                id: id,
                asset: addAssetList,
                action: typeAssetList,
                value: valueAssetList,
                quantity: quantityAssetList,
                current: '30'
            }])
            e.preventDefault();
        }

    }
    return (
        <div id={id} className='modal' onClick={handleOutSideClick}>
            <div className='containerList'>
                <header className='headerLabel'>Adicionar novo ativo</header>
                <hr className='headerLine'></hr>
                <button className='closeBtn' onClick={onClose}></button>
                <form className='contentList'>
                    <input className='addAssetList' placeholder='Ativo' required onChange={(e) => setAddAssetList(e.target.value)}></input><br />
                    <input className='valueAssetList' placeholder='Valor' required type='number' onChange={(e) => setValueAssetList(e.target.value)}></input>
                    <input className='quantityAssetList' placeholder='Quantidade' required type='number' onChange={(e) => setQuantityAssetList(e.target.value)}></input><br />
                    <select name='Type' className='typeAssetList' required onChange={(e) => setTypeAssetList(e.target.value)}>
                        <option value="" disabled selected>Selecione sua movimentação</option>
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