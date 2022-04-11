import React, { useState, useContext} from 'react';
import AddAsset from '../../Components/AddAsset/AddAsset';
import { AssetListContext } from '../../Contexts/AssetList'
import styled from 'styled-components';
import './Table.css'


function Table(){

	const TableContainer = styled.div`
		position: fixed;
		width: 42.7%;
		height: 90%;
		margin-left: 15%;
		margin-top: 2.5%;
		border-radius: 16px;
		overflow: hidden;
		background: #7918f2;
		background: ${props => props.theme.tableContainerBGCWebkit};
		background: ${props => props.theme.tableContainerBGCOLiner};
		background: ${props => props.theme.tableContainerBGCMozLinear};
		background: ${props => props.theme.tableContainerBGCLinearGradient};
	`

	const Table = styled.table`
		background-color: transparent;
		width: 100%;

		&.tableRow{
			background-color: ${props => props.theme.tableRowHoverTd};
		}

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
           <TableContainer class="tableContainer">
					<Table>
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
							{assetTable.map((item)=>{
								return(
									<tr class="tableRow" key={item.id}>
										<TableColumTd class="tableColumnTd" >{item.asset}</TableColumTd>
										<TableColumTd class="tableColumnTd" >{item.action}</TableColumTd>
										<TableColumTd class="tableColumnTd" >{item.value}</TableColumTd>
										<TableColumTd class="tableColumnTd" >{item.quantity}</TableColumTd>
										<TableColumTd class="tableColumnTd" >{item.current}</TableColumTd>
										<TableColumTd class="tableColumnTd">{getLP(item)}</TableColumTd>
									</tr>
								)
							})}
						</tbody>
					</Table>
					<AddTableAssetBtn className='addTableAssetBtn' onClick={()=>{setIsAddModalVisible(true)}}>Adicionar novo ativo</AddTableAssetBtn> 
					
				</TableContainer>

				{isAddModalVisible ? 
                    <AddAsset
                    onClose={()=>setIsAddModalVisible(false)}/> 
                    : 
                    null
                }
				
				<WidgetAssetInfo className='widgetAssetInfo'>
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
				</WidgetAssetInfo>

				<WidgetAssetConversor className='widgetAssetConversor'>
					<div className='widgetAssetConversor--asset'>
						<img></img>
						<input></input>
					</div>
					<div className='widgetAssetConversor--currency'>
						<h3>BRL</h3>
						<input></input>
					</div>
				</WidgetAssetConversor>
        </>
    )
}

export default Table