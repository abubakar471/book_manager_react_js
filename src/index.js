import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import AppRouter from './router/AppRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(<AppRouter />, document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);