import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


  const options = {
    position: positions.TOP_CENTER,
    timeout: 4000,
    offset: '30px',
    type: types.ERROR,
    transition: transitions.SCALE,
  }

ReactDOM.render(  
 
    
    <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </React.StrictMode> ,


  document.getElementById('root')
);


