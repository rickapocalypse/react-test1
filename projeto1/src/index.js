import React from 'react';
import ReactDOM from 'react-dom';         //pacote que renderiza partes do código, na linha 11, ele es´ta renderizando o root
import './styles/global-styles.css';
import Home from './templates/home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

