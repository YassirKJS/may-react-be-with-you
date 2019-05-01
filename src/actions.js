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
    type: RRECEIVE_ITEMS,
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
  }
}