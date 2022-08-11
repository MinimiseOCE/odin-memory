import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header.js'
import Cards from './components/cards.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Cards />
    </div>
  </React.StrictMode>
);
