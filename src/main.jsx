import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
import { CounterApp } from './CounterApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);
