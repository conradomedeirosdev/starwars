const SWAPI = 'https://swapi.co/api/planets';

function getSWAPI() {
  return fetch(SWAPI)
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => alert(error));
}

export default getSWAPI;
