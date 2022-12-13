import React from 'react';
import Header from './components/header';
import './App.css';
import Filter from './components/filter';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
}

export default App;
