import React, { useEffect, useState } from 'react';
import './AddAsset.css'

function AddAsset({ id ='modal',onClose = ()=>{}}){

    const handleOutSideClick = (e) =>{
        if(e.target.id === id) onClose();
    }
    
    return(  
        <div id={id} className='modal' onClick={handleOutSideClick}>
            <div className='containerList'>
                <header className='headerLabel'>Adicionar novo ativo</header>
                <hr className='headerLine'></hr>
                <button className='closeBtn' onClick={onClose}></button>
                <form className='contentList'>
                    <input className='addAssetList' placeholder='Ativo' required></input><br/>
                    <input className='valueAssetList' placeholder='valor' required type='number'></input>
                    <input className='quantityAssetList' placeholder='Quantidade' required type='number'></input><br/>
                    <select name='Type' className='typeAssetList' required>
                        <option value="" disabled selected>Selecione sua movimentação</option>
                        <option value='compra'>Compra</option>
                        <option value='venda'>Venda</option>
                    </select><br/>
                    <button className='addAssetBtn' type='submit'>Adicionar ativo</button>
                </form>
            </div>  
        </div>
    )
}

export default AddAsset