/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import AssetListProvider from '../src/Contexts/AssetList'
import Login from './Pages/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import ReactTooltip from 'react-tooltip';
import Table from './Pages/Table/Table';
import NotFound from './Pages/NotFound/NotFound';



//DEFINIR AS CORES
const LightTheme = {
  appBGC: '#E4E9F7',

  loginAppName: '#3B2F79',
  loginText: 'black',
  loginInputsBorder: '#7371FC',
  loginSignIn: '#3B2F79',

  sidebarBGC: '#f7f4ff',
  sidebarProfile: '#7064f7',
  sidebarWhite: '#ffffff',
  sidebarIcons: '#E7E5E5',
  sidebarIconsText: '#000000',

  homeNews: 'linear-gradient(111.89deg, #BDC7E3 3.26%, rgba(215, 222, 243, 0.769605) 100%, rgba(215, 222, 243, 0) 100%, rgba(215, 222, 243, 0.42628) 100%)',
  homeText: '#000000',
  homeItemHover: '#adb7d3',


  searchInput: '#E4E9F7',
  searchBtn: '#ffffff',
  searchBtnColor: '#4102e0',
  serachInfos: '#FFFAFA',
  searchBtnBorder: '#4E04FE',
  searchGray: 'gray',
  searchHoverColor: 'white',
  searchInputText: 'black',

  tableContainerBGCWebkit: '-webkit-linear-gradient(-68deg, #ac32e4, #4801ff)',
  tableContainerBGCOLiner: '-o-linear-gradient(-68deg, #ac32e4, #4801ff)',
  tableContainerBGCMozLinear: '-moz-linear-gradient(-68deg, #ac32e4, #4801ff)',
  tableContainerBGCLinearGradient: 'linear-gradient(-68deg, #ac32e4, #4801ff)',
  tableContainerTh: 'rgba(255, 255, 255, 0.32)',
  tableRowHoverTd: 'rgba(255, 255, 255, 0.1)',
  tableRowTdHover: 'rgba(255, 255, 255, 0.2)',
  tableWhite: 'white',
  tableAddTableColor: '#4102e0',
  tableAddTableBorder: '#4E04FE',
  tableWhiteSmoke: 'whitesmoke',
  tableWidgetBGC: 'rgba(134, 62, 177, 0.70)',
  tableBoxShadow: 'rgba(0, 0, 0, 0.1)',
  tableWidgetBorder: 'rgba(184, 109, 228, 0.37)',

  assetsContainer: '#E4E9F7',
  assetsColor: '#000',
  assetsCloseBtn: '#000',
  assetsHoverColor: '#FFFFFF',
  assetsHoverBgc: '#4102e0',

  addAssetsCloseBtn: '#000',
  addAssetsContainerListBgc: '#E4E9F7',
  addAssetBtnColor: 'whitesmoke',
  addAssetBtnBgc: '#7064F7',
  addAssetBtnBgcHover: '#4E04FE',
  addAssetHeaderLabelColor: '#000',
  addAssetListOutline: 'blueviolet',

  errorInfoColor: 'Black',
  errorReturnColor: '#3B2F79'
}
const DarkTheme = {
  appBGC: '#1F2933',

  loginAppName: '#109487',
  loginText: 'white',
  loginInputsBorder: '#109487',
  loginSignIn: '#109487',

  sidebarBGC: '#616E7C',
  sidebarProfile: '#1DDECB',
  sidebarWhite: '#ffffff',
  sidebarIcons: '#D9E2EC',
  sidebarIconsText: '#000000',

  homeNews: 'linear-gradient(112.42deg, #214773 0%, rgba(33, 71, 115, 0.93) 49.64%, rgba(33, 71, 115, 0.3) 99.27%)',
  homeText: '#FFFFFF',
  homeItemHover: '#4185d3',

  searchInput: '#1F2933',
  searchBtn: '#109487',
  serachInfos: '#E1F2FE',
  searchBtnColor: '#000000',
  searchBtnBorder: '#FFFFFF',
  searchGray: 'gray',
  searchHoverColor: 'white',
  searchInputText: 'white',

  tableContainerBGCWebkit: '-webkit-linear-gradient(-68deg, #109487, #214773)',
  tableContainerBGCOLiner: '-o-linear-gradient(-68deg, #109487, #214773)',
  tableContainerBGCMozLinear: '-moz-linear-gradient(-68deg, #109487, #214773)',
  tableContainerBGCLinearGradient: 'linear-gradient(-68deg, #109487, #214773)',
  tableContainerTh: 'rgba(255, 255, 255, 0.32)', //
  tableRowHoverTd: 'rgba(255, 255, 255, 0.1)', //
  tableRowTdHover: 'rgba(255, 255, 255, 0.2)', //
  tableWhite: 'white',
  tableAddTableColor: '#4102e0',//
  tableAddTableBorder: '',
  tableWhiteSmoke: 'whitesmoke',
  tableWidgetBGC: 'rgba(16, 148, 135, 0.7)',
  tableBoxShadow: 'rgba(0, 0, 0, 0.1)',
  tableWidgetBorder: 'rgba(12, 110, 100, 0.37)',

  assetsContainer: '#214773',
  assetsColor: '#FFFFFF',
  assetsCloseBtn: '#FFFFFF',
  assetsHoverColor: '#FFFFFF',
  assetsHoverBgc: '#109487',

  addAssetsCloseBtn: '#FFF',
  addAssetsContainerListBgc: '#214773',
  addAssetBtnColor: 'whitesmoke',
  addAssetBtnBgc: '#21afa1',
  addAssetBtnBgcHover: '#109487',
  addAssetHeaderLabelColor: '#FFF',
  addAssetListOutline: '#109487',

  errorInfoColor: 'white',
  errorReturnColor: '#109487'
}



const themes = {
  light: LightTheme,
  dark: DarkTheme
}

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.appBGC};
  transition: all .7s ease
}
`


function App() {
  const [theme, setTheme] = useState('light')
  //DEFINIR A BUSCA 
  const [asset, setAsset] = useState('')


  useEffect(() => {
    var theme = localStorage.getItem('themeSelected')

    if (theme) {
      setTheme(theme)
    }
  }, [])


  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle theme={themes[theme]} />
      <div className='app' asset={asset} setAsset={setAsset}>
        <ReactTooltip place='bottom' effect='solid' />
        <AssetListProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login theme={theme} setTheme={setTheme} />} exact />
              <Route path="home" element={[<Home />, <SideBar theme={theme} setTheme={setTheme} />]} />
              <Route path="search" element={[<Search asset={asset} setAsset={setAsset} />, <SideBar theme={theme} setTheme={setTheme} />]} />
              <Route path="table" element={[<Table asset={asset} setAsset={setAsset} />, <SideBar theme={theme} setTheme={setTheme} />]} />
              <Route path="*" element={<NotFound/>} />
              
            </Routes>
          </BrowserRouter>
        </AssetListProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
