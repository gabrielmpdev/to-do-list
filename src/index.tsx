import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HeaderCustom  } from './styles/stylesComponents'

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <HeaderCustom>Tasks Checker</HeaderCustom>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);