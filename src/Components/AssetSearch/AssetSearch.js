import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AssetSearch(){

    const [assetList, setAssetList] = useState([])
    const listUrl = 'https://api.coingecko.com/api/v3/coins/list'


    useEffect(()=>{
        axios.get(listUrl)
        .then(function(response){
            setAssetList(response.data);
        })
    }, [])
   
    return(
        <>
        </>
    )

}

export default AssetSearch