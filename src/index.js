// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React 애플리케이션의 진입점
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
