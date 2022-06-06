import React, { useState, useContext, useEffect } from 'react';
import AddAsset from '../../Components/AddAsset/AddAsset';
import { AssetListContext } from '../../Contexts/AssetList'
import styled from 'styled-components';
import './Table.css'
const axios = require('axios');

const TableContainer = styled.div`
position: fixed;
width: 42.7%;
height: 90%;
margin-left: 15%;
margin-top: 2.5%;
border-radius: 16px;
overflow: auto;
background: #7918f2;
background: ${props => props.theme.tableContainerBGCWebkit};
background: ${props => props.theme.tableContainerBGCOLiner};
background: ${props => props.theme.tableContainerBGCMozLinear};
background: ${props => props.theme.tableContainerBGCLinearGradient};
`

const TableTag = styled.table`
background-color: transparent;
width: 100%;
text-align: center;
text-transform: uppercase;
cursor: pointer;
&.tableRow{
	background-color: ${props => props.theme.tableRowHoverTd};
};
`

const TableTh = styled.th`
font-family: Montserrat-Medium;
font-size: 12px;
color: ${props => props.theme.tableWhite};
line-height: 1.4;
text-transform: uppercase;

background-color: ${props => props.theme.tableContainerTh};
`

const TableColumTd = styled.td`
font-family: Montserrat-Regular;
font-size: 14px;
color: ${props => props.theme.tableWhite};
line-height: 1.4;

	&:hover{
		background-color: ${props => props.theme.tableRowTdHover};
	}
padding: 5px
`

const AddTableAssetBtn = styled.button`
display: flex;
width: 422px;
height: 35px;
margin-top: 20px;
margin-bottom: 1px;
align-items: center;
justify-content: center;
border-radius: 30px;
margin-left: calc(50% - 211px);
overflow: hidden;
background-color: ${props => props.theme.tableWhite};
color: ${props => props.theme.searchBtnColor};
font-weight: bold;
cursor: pointer;
border: 1px solid ${props => props.theme.tableAddTableBorder};

transition: all ease 0.3s;
user-select: none;

&:hover{
	background-color: ${props => props.theme.tableWhiteSmoke};

	  transition: all ease 0.3s;
}
`
const WidgetAssetInfo = styled.div`
display: absolute;
position:fixed;
margin-left: 70%;
margin-top: 10%;
width: 500px;
height: 236px;
color: ${props => props.theme.tableWhiteSmoke};

background: ${props => props.theme.tableWidgetBGC};
border-radius: 16px;
box-shadow: 0 4px 30px ${props => props.theme.tableBoxShadow};
backdrop-filter: blur(4.3px);
-webkit-backdrop-filter: blur(4.3px);
border: 1px solid ${props => props.theme.tableWidgetBorder};
`

const WidgetAssetConversor = styled.div`
display: flex;
flex-direction: column;
position:fixed;
margin-left: 70%;
margin-top: 25%;
width: 500px;
height: 236px;
color: ${props => props.theme.tableWhiteSmoke};

background: ${props => props.theme.tableWidgetBGC};
border-radius: 16px;
box-shadow: 0 4px 30px ${props => props.theme.tableBoxShadow};
backdrop-filter: blur(4.3px);
-webkit-backdrop-filter: blur(4.3px);
border: 1px solid ${props => props.theme.tableWidgetBorder};

justify-content: center;
align-items: center;

`

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
						<img className='widgetAssetInfo--image' src={widgets.image}></img>
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
							<img src={widgets.image}></img>
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