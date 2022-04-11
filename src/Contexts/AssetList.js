import React, { useState, createContext, useEffect } from "react";


export const AssetListContext = createContext({})

function AssetListProvider ({children}){


    const [assetTable, setAssetTable ] = useState(
		[
		// {
		// 	id: id,
		// 	asset: 'bitcoin',
		// 	action:'compra',
		// 	value: '10',
		// 	quantity: '10',
		// 	current: '20',
		// },
		// {
		// 	id: id,
		// 	asset: 'ethereum',
		// 	action:'venda',
		// 	value: '20',
		// 	quantity: '10',
		// 	current: '10',
		// }
	
	])

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