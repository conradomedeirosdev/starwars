import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getSWAPI from '../Services/Services';
import StarWarsContext from '../Context/StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState({ planets: [], sucess: false });
  const [newData, setNewData] = useState();
  const [filterText, setfilterText] = useState('');


  const fetchStarWars = () => {
    if (data.sucess) return;
    getSWAPI()
      .then((planets) => {
        setData({ planets: planets.results, sucess: true });
      });
  };

  const context = {
    data,
    fetchStarWars,
    filterText,
    setfilterText,
    newData,
    setNewData,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default StarWarsProvider;
