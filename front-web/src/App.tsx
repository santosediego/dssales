import React from 'react';
import Header from './components/header';
import './App.css';
import Filter from './components/filter';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
        </div>
      </div>
    </>
  );
}

export default App;
