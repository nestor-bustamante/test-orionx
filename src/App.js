/* eslint-disable no-const-assign */
import React from 'react';
import Header from './components/Header';
import Items from './components/Items';

import './assets/css/main.scss';

function App() {
  
  const getFormatDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    if (day < 10)
      day = `0${day}`;
    if (month < 10)
      month = `0${month}`;
    return `${day}/${month}/${date.getFullYear()}`;
  }

  return (
    <div className="wrapper">
      <div className="container">

        <Header
          title="Invoice"
          date={getFormatDate()}
          invoiceNumber="89 289"
        />

        <Items />

        <div className="container-buttons">
          <button>later</button>
          <button className="primary">pay now</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
