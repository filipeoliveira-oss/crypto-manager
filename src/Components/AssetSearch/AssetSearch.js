import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AssetSearch.css'
import Loading from '../../Components/Loading/Loading';


function AssetSearch({ id ='modal',onClose = ()=>{}}){

    const [assetList, setAssetList] = useState([{}])
    const listUrl = 'https://api.coingecko.com/api/v3/coins/list'

    useEffect(()=>{

        axios.get(listUrl)
        .then(function(response){
            // setAssetList((assetList) => assetList = response.data);
            setAssetList(response.data)
            console.log()
        })
    }, [])
    
    const handleOutSideClick = (e) =>{
        if(e.target.id === id) onClose();
    }
    
    return(
        
        <div id={id} className='modal' onClick={handleOutSideClick}>
            <div className='container'>
                <button className='closeBtn' onClick={onClose}></button>
                <div className='content'>
                    {assetList.length == 1 ? <Loading/>
                    :
                    <table className='assetTable'>
                        <tbody>
                            <tr>
                                <th className='tableName'>Nome</th>
                                <th className='tableId'>ID</th>
                            </tr>
                            {assetList.map((item)=>{
                                return(
                                    <tr key={item.id} className='assetRow'>
                                        <td className='assetName'>{item.name}</td>
                                        <td className='assetId'>{item.id}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }
                    
                </div>
            </div>  
        </div>
    )

}

export default AssetSearch