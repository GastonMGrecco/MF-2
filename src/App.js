import React from 'react';
import Table from './components/Table';
import MarketStats from './components/MarketStats';

const App = () => {
  return (
    <div>
      <h2>Lista de Assets</h2>
      <Table />
      <MarketStats />
    </div>
  );
};

export default App;
