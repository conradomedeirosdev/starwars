import React from 'react';
import './App.css';
import StarWarsProvider from './Provider/StarWarsProvider';
import Table from './Components/Table';
import FilteredText from './Components/FilteredText';
import FilteredNumber from './Components/FilteredNumber';

function App() {
  return (
    <StarWarsProvider>
      <header className="content-header">
        <FilteredText />
        <FilteredNumber />
      </header>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
