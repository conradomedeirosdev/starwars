import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import '../Style/FilteredText.css';

const FilteredText = () => {
  const { setfilterText } = useContext(StarWarsContext);

  return (
    <div>
      <input
        className="input-text"
        type="text"
        onChange={(e) => setfilterText(e.target.value)}
        placeholder="Pesquise aqui"
      />
    </div>
  );

};

export default FilteredText;
