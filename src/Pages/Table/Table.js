import React, { useState} from 'react';
import AddAsset from '../../Components/AddAsset/AddAsset';
import './Table.css'

function Table(){
	const [isAddModalVisible, setIsAddModalVisible] = useState(false)

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
							<tr class="tableRow">
								<td class="tableColumn" >BITCOIN</td>
								<td class="tableColumn" >COMPRA</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >11</td>
								<td class="tableColumn ">10</td>
							</tr>

							<tr class="tableRow">
                                <td class="tableColumn" >BITCOIN</td>
								<td class="tableColumn" >COMPRA</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >11</td>
								<td class="tableColumn ">10</td>
							</tr>

							<tr class="tableRow">
                            <td class="tableColumn" >BITCOIN</td>
								<td class="tableColumn" >COMPRA</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >11</td>
								<td class="tableColumn ">10</td>

							</tr>

							<tr class="tableRow">
                            <td class="tableColumn" >BITCOIN</td>
								<td class="tableColumn" >COMPRA</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >11</td>
								<td class="tableColumn ">10</td>
							</tr>

							<tr class="tableRow">
                            <td class="tableColumn" >BITCOIN</td>
								<td class="tableColumn" >COMPRA</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >11</td>
								<td class="tableColumn ">10</td>
							</tr>

							<tr class="tableRow">
                            <td class="tableColumn" >BITCOIN</td>
								<td class="tableColumn" >COMPRA</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >11</td>
								<td class="tableColumn ">10</td>
							</tr>

							<tr class="tableRow">
                                <td class="tableColumn" >BITCOIN</td>
								<td class="tableColumn" >COMPRA</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >11</td>
								<td class="tableColumn ">10</td>
							</tr>

							<tr class="tableRow">
                               <td class="tableColumn" >ETHEREUM</td>
								<td class="tableColumn" >COMPRA</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >10</td>
								<td class="tableColumn" >11</td>
								<td class="tableColumn ">10</td>
							</tr>
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