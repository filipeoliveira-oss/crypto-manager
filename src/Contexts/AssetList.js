import React, { useState, createContext,  } from "react";


export const AssetListContext = createContext({})

function AssetListProvider ({children}){

	const [id, setId] = useState(1)

	function idIncrement(){
		setId = id + 1

	}
    const [assetTable, setAssetTable ] = useState(
		[
		{
			id: id,
			asset: 'bitcoin',
			action:'compra',
			value: '10',
			quantity: '10',
			current: '20',
		},
		{
			id: id,
			asset: 'ethereum',
			action:'venda',
			value: '20',
			quantity: '10',
			current: '10',
		}])

    return(
        <AssetListContext.Provider value={{assetTable, setAssetTable}}>
            {children}
        </AssetListContext.Provider>
    )
}

export default AssetListProvider