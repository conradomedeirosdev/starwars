import React, { useContext } from "react";
import StarWarsContext from "../Context/StarWarsContext";

const headOfTag = (data) => {
  return data.map(planets => {
    return Object.keys(planets).filter(tag => {
      return tag !== "residents";
    });
  })[0];
};

const bodyOfTag = (data) => {
  return data.map(planets => {
    return Object.values(planets).filter((value, index) => {
      return index !== 9;
    });
  });
};

const bodyTable = (data, filterText) => {
  return bodyOfTag(data).map(planet => {
    if (planet[0].includes(filterText)) {
      return (
        <tr key={planet[0]}>
          {planet.map(tag => (
            <td key={tag}>{tag}</td>
          ))}
        </tr>
      );
    }
  });
};

const generateTable = (data, filterText) => {
  return (
    <table>
      <thead>
        <tr>
          {headOfTag(data).map(tag => {
            return <th key={tag}>{tag}</th>;
          })}
        </tr>
      </thead>
      <tbody>{bodyTable(data, filterText)}</tbody>
    </table>
  );
};

const Table = () => {
  const { data, select, fetchStarWars, filterText, newData } = useContext(
    StarWarsContext
  );
  fetchStarWars();

  if (!data.sucess) {
    return <div>Loading...</div>;
  }
  if (newData) {
    return <div>{generateTable(newData, filterText, select)}</div>;
  }

  return <div>{generateTable(data.planets, filterText, select)}</div>;
};

export default Table;
