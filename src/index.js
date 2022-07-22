//en cada .jsx se importó todo lo necesario en las primeras lineas.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Aquí se carga el App.jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
