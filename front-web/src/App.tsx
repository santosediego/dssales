import React from 'react';
import Header from './components/header';
import Filter from './components/filter';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import PieChartCard from './components/pie-chart-card';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlândia', 'Araguai', 'Uberaba']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[50, 30, 20]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
