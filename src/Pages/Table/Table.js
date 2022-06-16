/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import AddAsset from '../../Components/AddAsset/AddAsset';
import { AssetListContext } from '../../Contexts/AssetList'
import './Table.css'
const axios = require('axios');
import {TableContainer, TableTag, TableTh, TableColumTd, WidgetAssetInfo, WidgetAssetConversor, AddTableAssetBtn} from '../../Components/TagComponents/TagComponents';


function Table(props) {

	const [widgets, setWidgets] = useState([{}])
	const [isAddModalVisible, setIsAddModalVisible] = useState(false)
	const { assetTable } = useContext(AssetListContext)
	const [assetToCoin, setAssetToCoin] = useState(0)
	const [coinToAsset, setCoinToAsset] = useState(0)


	function getLP(item) {
		if (item.action == 'compra') {
			return (item.current * item.quantity) - (item.value * item.quantity)
		} else if (item.action == 'venda') {
			return (item.value * item.quantity) - (item.current * item.quantity)
		}
	}

	function getWidgets(selected) {


		axios.get(`https://api.coingecko.com/api/v3/coins/markets?price_change_percentage=24h&vs_currency=BRL&ids=${selected}`)
			.then(function (response) {
				if (response.data.length != 0) {
					setWidgets(response.data[0])
				} else {
					setWidgets('')
				}
			})
	}

	useEffect(() => {
		if (assetToCoin != '') {
			var result = parseInt(widgets.current_price) * parseInt(assetToCoin)
		} else {
			result = 0
		}

		setCoinToAsset(result)
	}, [assetToCoin])


	async function getCurrent(selected,table, i) {
		const actual = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?price_change_percentage=24h&vs_currency=BRL&ids=${selected}`).then(function(response){
			table[i].current = response.data[0].current_price
			localStorage.setItem('asset', JSON.stringify(table))
		})

		return actual
	}


	useEffect(() => {
		var list = localStorage.getItem('asset')
		var table = JSON.parse(list)
		
		if (list) {

			for (var i = 0; i <= table.length - 1; i++) {
				var selected = table[i].asset
				getCurrent(selected,table, i)
			}
		}
	},[])


	
	return (
		<>
			<TableContainer class="tableContainer">
				<TableTag>
					<thead>
						<tr class="tableRow">
							<TableTh class="tableColumn">Ativo</TableTh>
							<TableTh class="tableColumn">Movimento</TableTh>
							<TableTh class="tableColumn">Valor</TableTh>
							<TableTh class="tableColumn">Quantidade</TableTh>
							<TableTh class="tableColumn">Valor atual</TableTh>
							<TableTh class="tableColumn ">L/P</TableTh>
						</tr>
					</thead>
					<tbody>
						{assetTable.map((item) => {
							return (
								<tr class="tableRow tableRowClick" key={item.id} onClick={() => getWidgets(item.asset)}>
									<TableColumTd class="tableColumnTd" >{item.asset}</TableColumTd>
									<TableColumTd class="tableColumnTd" >{item.action}</TableColumTd>
									<TableColumTd class="tableColumnTd" >{item.value}</TableColumTd>
									<TableColumTd class="tableColumnTd" >{item.quantity}</TableColumTd>
									<TableColumTd class="tableColumnTd" >{item.current}</TableColumTd>
									<TableColumTd class="tableColumnTd" >{getLP(item)}</TableColumTd>
								</tr>
							)
						})}
					</tbody>
				</TableTag>
				<AddTableAssetBtn className='addTableAssetBtn' onClick={() => { setIsAddModalVisible(true) }}>Adicionar novo ativo</AddTableAssetBtn>
			</TableContainer>

			{isAddModalVisible ?
				<AddAsset
					onClose={() => setIsAddModalVisible(false)}
					asset={props.asset}
					setAsset={props.setAsset} />
				:
				null
			}

			<WidgetAssetInfo className='widgetAssetInfo'>
				{widgets.length != undefined ? <h1 className='emptyAsset'>Selecione um ativo para exibir as informações</h1>

					:

					<>
						<img className='widgetAssetInfo--image' src={widgets.image} alt='AssetInfo'></img>
						<div className='widgetAssetInfo--values'>
							<h4>{widgets.length != undefined ? <h4>Price</h4> : widgets.current_price} </h4>
							<h4 className='widgetAssetInfo--values--variation'>{widgets.length != undefined ? <h4>Variation</h4> : <h4>({widgets.price_change_percentage_24h}%)</h4>}</h4>
						</div>
						<div className='widgetAssetInfo--others' >
							<table>
								<tbody>
									<tr>
										<td>MARKET CAP RANK</td>
										<td>{widgets.market_cap_rank}</td>
									</tr>
									<tr>
										<td>MARKET CAP</td>
										<td>{widgets.length != undefined ? <h4></h4> : <td>R$ {widgets.market_cap}</td>} </td>
									</tr>
									<tr>
										<td>VARIATION</td>
										<td>{widgets.length != undefined ? <h4></h4> : <td>R$ {widgets.price_change_24h}</td>} </td>
									</tr>
									<tr>
										<td>24H HIGH/LOW</td>
										<td>{widgets.length != undefined ? <h4></h4> : <td>R$ {widgets.high_24h} / R$ {widgets.low_24h}</td>} </td>
									</tr>
								</tbody>
							</table>
						</div>
					</>
				}
			</WidgetAssetInfo>

			<WidgetAssetConversor className='widgetAssetConversor'>
				{widgets.length != undefined ? <h1 className='emptyAsset--conversor'>Selecione um ativo para exibir o conversor</h1>
					:
					<>
						<h1>Conversor</h1>
						<div className='widgetAssetConversor--asset'>
							<img src={widgets.image} alt='Widgets Conversor'></img>
							<input value={assetToCoin} onChange={(e) => { setAssetToCoin(e.target.value) }}></input>
						</div>
						<div className='widgetAssetConversor--currency'>
							<h3>BRL</h3>
							<input value={coinToAsset} onChange={(e) => { setCoinToAsset(e.target.value) }} readOnly></input>
						</div>
					</>
				}
			</WidgetAssetConversor>
		</>
	)
}

export default Table