import styled from 'styled-components'

export const AppName = styled.h1`
position: absolute;
width: 301px;
height: 56px;
left: 71%;
top: 30px;
align-items: center;
justify-content: center;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 56px;

color: ${props => props.theme.loginAppName};

white-space: nowrap;
`

export const Slong = styled.h3`
position: absolute;
    width: 476px;
    height: 37px;
    left: 72%;
    top: 150px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 18px;

    color: ${props => props.theme.loginText};
`

export const Username = styled.input`

    position: absolute;
    width: 435px;
    height: 48px;
    left: 62px;
    top: 102px;

    border: 1px solid ${props => props.theme.loginInputsBorder};
    box-sizing: border-box;
    border-radius: 40px;

    outline: none;
    padding-left: 15px;

    font-size: 20px;
    text-transform: uppercase;
    
    `
export const Password = styled.input`
    position: absolute;
    width: 435px;
    height: 48px;
    left: 62px;
    top: 181px;

    border: 1px solid ${props => props.theme.loginInputsBorder};
    box-sizing: border-box;
    border-radius: 40px;

    outline: none;
    padding-left: 15px;

    font-size: 20px;
    text-transform: uppercase;
    `

export const ForgotPassword = styled.label`
    position: absolute;
    width: 237px;
    height: 45px;
    left: calc(50% - 118.5px);
    top: 282px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    
    color: ${props => props.theme.loginText};

    cursor: pointer;
    `

export const SingIn = styled.button`
    position: absolute;
    width: 435px;
    height: 69px;
    left: 62px;
    top: 372px;

    background: ${props => props.theme.loginSignIn};
    border-radius: 40px;
    border:none; 
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;

    cursor: pointer;
    `

export const Account = styled.label`
   
        position: absolute;
        width: 341px;
        height: 45px;
        left: calc(50% - 170.5px);
        top: 462px;

    
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
    
        color: ${props => props.theme.loginText};
        white-space: nowrap;
    
    `

export const HomeContent = styled.div`
    
    margin-left: 250px;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    
    `

export const Welcome = styled.h1`
    color: ${props => props.theme.homeText}
    
    `

export const News = styled.div`
    position: absolute;
    width: 80%;
    height: 803px;
    top: 125px;
    z-index: -2;
    
    background: ${props => props.theme.homeNews};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(4px);   
    border-radius: 10px;
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
    
    overflow: auto;
    
    
    transition: all ease 0.7s;
    
    @media(max-width: 1300px){
        width: 70%;
    }
    
    @media(max-width: 880px){
        width: 60%;
    }
    
    `
export const A = styled.a`
    text-decoration: none;
    color: ${props => props.theme.homeText};
    padding: 0px 15px;
    
        &.newsItem{
            display: flex;
            flex-direction: column;
            
            text-align: justify;
            align-items: flex-start;
            margin-left: 15px;
            margin-right: 15px;
            gap: 0;
                &:hover{
                    background-color: ${props => props.theme.homeItemHover};
                }
        }
        
    `

export const SearchContainer = styled.div`


    transition: all ease 0.3s;

    @media(max-width: 540px){
        margin-left: 20%;
        flex-direction: column;
        align-items: center;
        gap: 100px;
    }
`

export const InputAsset = styled.input`
    border: none;
    background-color: ${props => props.theme.searchInput};
    outline: none;
    text-transform: uppercase;
    width: 173px;
    height: 17px;
    color: ${props => props.theme.searchInputText}

`
export const SearchBtn = styled.button`
    width: 76px;
    height: 35px;
    margin-top: -15px;
    margin-left: 10px;
    border-radius: 20px;
    
    background-color: ${props => props.theme.searchBtn};
    color: ${props => props.theme.searchBtnColor};
    font-weight: bold;
    cursor: pointer;
    border: 1px solid ${props => props.theme.searchBtnBorder};

        &:hover{
            background-color: ${props => props.theme.searchBtnColor};
            transition: all ease 0.3s;
            color: ${props => props.theme.searchHoverColor};
        }
`

export const AssetsBtn = styled.button`
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: 10px;
    border-radius: 100%;

    background-color: ${props => props.theme.searchBtn};
    color: ${props => props.theme.searchBtnColor};
    font-weight: bold;
    cursor: pointer;
    border: 1px solid ${props => props.theme.searchBtnBorder};
        
    &:hover{
        background-color: ${props => props.theme.searchBtnColor};
        transition: all ease 0.3s;
        color: ${props => props.theme.searchHoverColor};
    }
`

export const AddAssetToTable = styled.button`
    width: 30px;
    height: 30px;
    margin-top: 85px;
    margin-left: -30px;
    border-radius: 100%;

    background-color: ${props => props.theme.searchBtn};
    color: ${props => props.theme.searchBtnColor};
    font-weight: bold;
    cursor: pointer;
    border: 1px solid ${props => props.theme.searchBtnBorder};

    transition: all ease 0.3s;

        &:hover{
            font-size: 0;
            width: 220px;
            height: 30px;
            border-radius: 20px;
            margin-left: -220px;
            background-color: ${props => props.theme.searchBtnColor};
            transition: all ease 0.3s;

                &:after{
                    position: absolute;
                    content: attr(data-hover);
                    font-size: 12px;
                    width: 220px;
                    height: 30px;
                    margin-top: -7px;
                    margin-left: -100px;
                    color: ${props => props.theme.searchHoverColor};
                    cursor: pointer;  
                }
        }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: center;
    margin-top:80px;
    
    
    transition: all ease 0.7s;
    
    @media(max-width: 1270px){

        margin-left: 20%;
        gap: 5%;
    }

    @media(max-width: 1150px){

        margin-left: 20%;
        gap: 2%;
    }

    @media(max-width: 1080px){
        margin-left: unset;
        flex-direction: column;
        align-items: center;
        gap: 100px;
    }


        
`
export const Infos = styled.div`
&.price, &.marketcap, &.variation{
    width: 279px;
    height: 137px;
    background-color: ${props => props.theme.serachInfos};
    padding-left: 10px;

    border-radius: 10px;
    box-shadow:  8px 5px 5px ${props => props.theme.searchGray};
}
`

export const TableContainer = styled.div`
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


transition: all ease 0.7s;


@media(max-width: 1270px){
	width: 75%;
}

@media(max-width: 750px){
	margin-left: 20%;
}
`

export const TableTag = styled.table`
background-color: transparent;
width: 100%;
text-align: center;
text-transform: uppercase;
cursor: pointer;
&.tableRow{
	background-color: ${props => props.theme.tableRowHoverTd};
};
`

export const TableTh = styled.th`
font-family: Montserrat-Medium;
font-size: 12px;
color: ${props => props.theme.tableWhite};
line-height: 1.4;
text-transform: uppercase;

background-color: ${props => props.theme.tableContainerTh};
`

export const TableColumTd = styled.td`
font-family: Montserrat-Regular;
font-size: 14px;
color: ${props => props.theme.tableWhite};
line-height: 1.4;

	&:hover{
		background-color: ${props => props.theme.tableRowTdHover};
	}
padding: 5px
`

export const AddTableAssetBtn = styled.button`
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

@media(max-width: 570px){
	width: 40%;
	margin-Left: 30%;

}

`
export const WidgetAssetInfo = styled.div`
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

transition: all ease 0.7s;

@media(max-width: 1600px){
	margin-left: 60%
}

@media(max-width: 1270px){
	display: none
}
`

export const WidgetAssetConversor = styled.div`
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

transition: all ease 0.7s;

@media(max-width: 1600px){
	margin-left: 60%;
	margin-top: 30%;
}

@media(max-width: 1270px){
	display: none
}

`


export const Name = styled.h1`
    position: absolute;
    width: 500px;
    height: 56px;
    left: 10%;
    top: 100px;
    align-items: center;
    justify-content: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: ${props => props.theme.loginAppName};
`

export const Info = styled.h2`
position: absolute;
width: 500px;
height: 56px;
left: 10%;
top: 250px;
align-items: center;
justify-content: center;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 42px;
line-height: 56px;

color: ${props => props.theme.errorInfoColor};
`

export const Back = styled.h3`
position: absolute;
width: 600px;
height: 56px;
left: 10%;
top: 330px;
align-items: center;
justify-content: center;
color: ${props => props.theme.errorReturnColor};;
text-decoration: underline;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 56px;
`


export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CloseButon = styled.button`
background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    display: flex;
    margin-left: calc(100% - 30px);
    cursor: pointer;
    position: relative;
   
    &::before, &::after{
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: ${props => props.theme.addAssetsCloseBtn};
        margin-top: 5px;
        right: 40px;
        
    }
    &::before{
        transform: rotate(45deg);
    }
    &::after{
        transform: rotate(-45deg);
    }
`

export const HeaderLine = styled.hr`
    width: 90%;
    color: white; 
`

export const HeaderLabel = styled.h1`
    color: ${props => props.theme.addAssetHeaderLabelColor};
    font-size: 20px;
    margin-left: 25px;
    margin-top: 5px;
    font-weight: bold ;
    flex-direction: row;
`

export const ContainerList = styled.div`
width: 400px;
height: 300px;
background-color: ${props => props.theme.addAssetsContainerListBgc};
`

export const AddAssetBtn = styled.button`
    width: 88%;
    height: 35px;
    text-align: center;
    margin-left: 6.5%;
    font-weight: 600;
    border: none;
    border-radius:5px;
    color: ${props => props.theme.addAssetBtnColor};
    background-color:${props => props.theme.addAssetBtnBgc};

        &:hover{
            -webkit-filter: brightness(100%);   
            background-color: ${props => props.theme.addAssetBtnBgcHover};
        
            transition: all ease 0.3s;
        }
`

export const AddAssetList = styled.input`
        &:focus{
            outline: 1px solid ${props => props.theme.addAssetListOutline};
        }
`
export const TypeAssetList = styled.select`
        &:focus{
            outline: 1px solid ${props => props.theme.addAssetListOutline};
        }
`
export const TypeOption = styled.option``

export const ValueAssetList = styled.input`
        &:focus{
            outline: 1px solid ${props => props.theme.addAssetListOutline};
        }
`
export const QuantityAssetList = styled.input`
        &:focus{
            outline: 1px solid ${props => props.theme.addAssetListOutline};
        }
`


export const Sidebar = styled.div`
    position: fixed;

    width: 98px;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: 0;
    background: ${props => props.theme.sidebarBGC};

    user-select: none;

    transition: ease all 0.7s;

        &.sideBar--active{
            position: absolute;
            width: 230px;
            height: 100%;
            left: 0px;
            top: 0px;
            margin: 0;
            background: ${props => props.theme.sidebarBGC};
            user-select: none;

            transition: ease all 0.7s;
        }
    `
export const Profile = styled.div`
        height: 57px;
        width: 61px;
        margin-left: calc(50% - 30.5px);
        
        background: ${props => props.theme.sidebarProfile};
        border-radius: 20px;

            &.profile--active{
                height: 57px;
                width: 61px;
                margin-left: calc(50% - 30.5px);
                
                background: ${props => props.theme.sidebarProfile};
                border-radius: 20px;
            }
            &.profile--active h3{
                display: flex;
    
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                
                color: ${props => props.theme.sidebarWhite};

                justify-content: center;
                padding-top: calc(50% - 25px);
            }
    `
export const Expand = styled.h1`
        width: 25px;
        height: 26px;
        background: ${props => props.theme.sidebarProfile};
        border-radius: 20px;
        cursor: pointer;
        text-align: center;
        color: ${props => props.theme.sidebarWhite};
        font-size: 24px;

        margin-left: 110%;
        margin-top: -70px;

        transition: ease all 0.7s;

            &.expand--active{
                width: 25px;
                height: 26px;
                background: ${props => props.theme.sidebarProfile};
                border-radius: 20px;
                cursor: pointer;
                text-align: center;
                color: ${props => props.theme.sidebarWhite};
                font-size: 24px;

                margin-left: 135px;
                margin-top: -70px;

                transform: rotateY(180deg);

                transition: ease all 0.7s;
            }
    `
export const Button = styled.button`
        position: inherit;
        display: flex;
        width: 76px;
        height: 70px;
        border-radius: 20px;
        border-style: none;
        background: ${props => props.theme.sidebarIcons};

        margin-top: 56px;
        margin-left: 11px;
        cursor: pointer;
        transition: ease all 0.7s;

            &.search--active, &.table--active, &.home--active{
                display: flex;
                width: 200px;
                height: 70px;
                border-radius: 20px;
                border-style: none;
                background: ${props => props.theme.sidebarIcons};

                margin-top: 56px;
                margin-left: 11px;

                transition: ease all 0.7s;
            }
    `
export const Logout = styled.button`
        position: inherit;
        display: flex;
        width: 76px;
        height: 70px;
        border-radius: 20px;
        border-style: none;
        background: ${props => props.theme.sidebarIcons};

        margin-top: 300px;
        margin-left: 11px;

        transition: all .3s ease;

            &.logout--active{
                display: flex;
                width: 200px;
                height: 70px;
                border-radius: 20px;
                border-style: none;
                background: ${props => props.theme.sidebarIcons};

                margin-top: 300px;
                margin-left: 11px;

                transition: ease all 0.7s;
            }
    `

export const Container = styled.div`
background-color: ${props => props.theme.assetsContainer}; 
color: ${props => props.theme.assetsColor};
width: 30%;
height: 80%;
border-radius: 20px;
`

export const CloseBtn = styled.button`
background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    display: flex;
    margin-left: calc(100% - 30px);
    cursor: pointer;

    &::before, &::after{
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: ${props => props.theme.assetsCloseBtn};
        margin-top: 45px;
        right: 40px;
        
    }
    &::before{
        transform: rotate(45deg);
    }
    &::after{
        transform: rotate(-45deg);
    }
`

export const AssetRow = styled.tr`

    &:hover{
        color: ${props => props.theme.assetsHoverColor};
        background-color: ${props => props.theme.assetsHoverBgc};

        transition: all ease 0.7s;
        cursor: pointer;
    }
`

export const AssetName = styled.td`
display: flex;
padding-bottom: 10px;
margin-top: 5px;
border-bottom: solid 1px rgba(0, 0, 0, 0.2);
border-right: solid 1px rgba(0, 0, 0, 0.2);
`

export const AssetId = styled.td`
border-bottom: solid 1px rgba(0, 0, 0, 0.2);
border-right: solid 1px rgba(0, 0, 0, 0.2);
`

export const Content = styled.div`

`