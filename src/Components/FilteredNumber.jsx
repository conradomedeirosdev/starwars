import React, { useContext, useState} from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import '../Style/FilteredNumber.css';


const filterMain = (comparison, value, select, data) => {
  if (comparison === '' || value === '' || select === '') {
    return alert('tá faltando dado aí!');
  }
  switch (comparison) {
    case 'Maior que':
      return data.filter((planet) => {
        return planet[select] > Number(value) && planet[select] !== 'unknown';
      });

    case 'Menor que':
      return data.filter((planet) => {
        return planet[select] < Number(value) && planet[select] !== 'unknown';
      });

    case 'Igual a':
      return data.filter((planet) => {
        return planet[select] === value && planet[select] !== 'unknown';
      });
    default:
      break;
  }
};

const FilteredNumber = () => {
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('0');
  const [select, setSelect] = useState('');
  const { data, fetchStarWars, setNewData } = useContext(StarWarsContext);

  fetchStarWars();

  return (
    <div className="content-filter">
      <select className="select-comparison" onChange={(e) => setSelect(e.target.value)}>
        <option value=""></option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <div className="radio-coparison">
        <input
          data-testid="radio-comparison-maior"
          type="radio"
          name="comparison"
          value="Maior que"
          onClick={(e) => setComparison(e.target.value)}
        />
        Maior que
        <input
          data-testid="radio-comparison-menor"
          type="radio"
          name="comparison"
          value="Menor que"
          onClick={(e) => setComparison(e.target.value)}
        />
        Menor que
        <input
          data-testid="radio-comparison-igual"
          type="radio"
          name="comparison"
          value="Igual a"
          onClick={(e) => setComparison(e.target.value)}
        />
        Igual a
      </div>
      <input
        className="input-number-comparison"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Coloque a quantidade aquii"
      />
      <button className="btn" type="button" onClick={() => setNewData(filterMain(comparison, value, select, data.planets))}>filtrar </button>
    </div>
  );
};

export default FilteredNumber;
