import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {splitIntoWords} from "./01/01";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

