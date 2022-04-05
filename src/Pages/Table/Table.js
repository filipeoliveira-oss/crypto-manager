import React, { useState, useContext} from 'react';
import AddAsset from '../../Components/AddAsset/AddAsset';
import { AssetListContext } from '../../Contexts/AssetList'
import './Table.css'


function Table(){
	const [isAddModalVisible, setIsAddModalVisible] = useState(false)

	const {assetTable} = useContext(AssetListContext)

	function getLP(item){
		if (item.action == 'compra') {
			return (item.current * item.quantity)  - (item.value * item.quantity)
		}else if(item.action == 'venda'){
			return  (item.value * item.quantity) -  (item.current * item.quantity)
		}
	}

    return(
        <>
           <div class="tableContainer">
					<table >
						<thead>
							<tr class="tableRow">
								<th class="tableColumn">Ativo</th>
								<th class="tableColumn">Movimento</th>
								<th class="tableColumn">Valor</th>
								<th class="tableColumn">Quantidade</th>
								<th class="tableColumn">Valor atual</th>
								<th class="tableColumn ">L/P</th>
							</tr>
						</thead>
						<tbody>
							{assetTable.map((item)=>{
								return(
									<tr class="tableRow" key={item.id}>
										<td class="tableColumn" >{item.asset}</td>
										<td class="tableColumn" >{item.action}</td>
										<td class="tableColumn" >{item.value}</td>
										<td class="tableColumn" >{item.quantity}</td>
										<td class="tableColumn" >{item.current}</td>
										<td class="tableColumn ">{getLP(item)}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
					<button className='addTableAssetBtn' onClick={()=>{setIsAddModalVisible(true)}}>Adicionar novo ativo</button> 
					
				</div>

				{isAddModalVisible ? 
                    <AddAsset
                    onClose={()=>setIsAddModalVisible(false)}/> 
                    : 
                    null
                }
				
				<div className='widgetAssetInfo'>
					<img className='widgetAssetInfo--image'></img>
					<div className='widgetAssetInfo--values'>
						<h4>PRICE</h4>
						<h4 className='widgetAssetInfo--values--variation'>VARIATION</h4>
					</div>
					<div className='widgetAssetInfo--others'>
						<table>
							<tbody>
								<tr>
									<td>MARKET CAP RANK</td>
									<td>#1</td>
								</tr>
								<tr>
									<td>MARKET CAP</td>
									<td>R$804,000,000,000</td>
								</tr>
								<tr>
									<td>24H VOLUME</td>
									<td>R$14,000,000,000</td>
								</tr>
								<tr>
									<td>24H HIGH/LOW</td>
									<td>R$43,030 / R$41,191</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className='widgetAssetConversor'>
					<div className='widgetAssetConversor--asset'>
						<img></img>
						<input></input>
					</div>
					<div className='widgetAssetConversor--currency'>
						<h3>BRL</h3>
						<input></input>
					</div>
				</div>
        </>
    )
}

export default Table