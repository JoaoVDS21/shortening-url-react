import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import { StateContextProvider } from './contexts/StateContext'

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
