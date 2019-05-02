import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ITEMS,
  RECEIVE_ITEMS
} from './constants.js';

const changeSearchFieldAction(searchStr) {
  return {
    type: CHANGE_SEARCH_FIELD,
    searchStr
  };
}

function requestItemsAction(searchStr) {
  return {
    type: REQUEST_ITEMS,
    searchStr
  };
}

function receiveItemsAction(searchStr, items) {
  return {
    type: RECEIVE_ITEMS,
    searchStr,
    items,
    receivedAt: Date.now()
  };
}

function fetchAllItems(searchStr) {
  const urls = [
    `https://swapi.co/api/people/?search=${searchStr}`,
    `https://swapi.co/api/films/?search=${searchStr}`,
    `https://swapi.co/api/starships/?search=${searchStr}`,
    `https://swapi.co/api/species/?search=${searchStr}`,
    `https://swapi.co/api/planets/?search=${searchStr}`,
  ];

  return (dispatch) => {
    dispatch(changeSearchFieldAction(searchStr));
    dispatch(requestItemsAction(searchStr));
    return Promise.all(urls.map(url => 
      fetch(url)))
        .then(response => response.json())
    ))
    .then(array => prepareItems(array))
    .then(json => dispatch(receiveItemsAction(searchStr, json)));
  };
}

function prepareItems(array= {
  let combined = [];
  array.forEach((item) => {
    combined = combined.concat(item.results);
  });

  return combined.map((item) => {
    if (Object.hasOwnProperty.call(item, 'episode_id')) {
      return {
        type: 'film',
        name: item.title,
        episode_id: item.episode_id,
        director: item.director,
        producer: item.producer,
        release_date: item.release_date,
      };
    } else if (Object.hasOwnProperty.call(item, 'model')) {
      return {
        type: 'starship',
        name: item.name,
        model: item.model,
        hyperdrive_rating: item.hyperdrive_rating,
        manufacturer: item.manufacturer,
      };
    } else if (Object.hasOwnProperty.call(item, 'classification')) {
      return {
        type: 'species',
        name: item.name,
        classification: item.classification,
        designation: item.designation,
        language: item.language,
      };
    } else if (Object.hasOwnProperty.call(item, 'orbital_period')) {
      return {
        type: 'planet',
        name: item.name,
        gravity: item.gravity,
        terrain: item.terrain,
        population: item.population,
      };
    }
    return {
      type: 'person',
      name: item.name,
      gender: item.gender,
      height: item.height,
      mass: item.mass,
    };
  }).sort(compareNames);
})

function compareNames(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}