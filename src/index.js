import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // or './index.css' if you create that file
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
