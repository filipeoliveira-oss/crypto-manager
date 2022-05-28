import React, { useState, createContext, useEffect } from "react";


export const AssetListContext = createContext({})

function AssetListProvider ({children}){


    const [assetTable, setAssetTable ] = useState([])

	useEffect(()=>{
		if(localStorage.getItem('asset')){
			var AssetList = localStorage.getItem('asset')
			setAssetTable(JSON.parse(AssetList))
		}
	}, [])
    return(
        <AssetListContext.Provider value={{assetTable, setAssetTable}}>
            {children}
        </AssetListContext.Provider>
    )
}

export default AssetListProvider