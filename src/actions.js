import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ITEMS,
  RECEIVE_ITEMS
} from './constants.js';

function changeSearchFieldAction(searchStr) {
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