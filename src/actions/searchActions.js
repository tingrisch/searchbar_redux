import {
    ENTER_SEARCH_TERM,
    REQUEST_SUGGESTIONS,
    RECEIVE_SUGGESTIONS
} from "../constants/searchActionTypes"

export const enteredSearchTerm = (dispatch, searchTerm) => {
    dispatch(requestedSuggestions(dispatch, searchTerm));

    return {
        type: ENTER_SEARCH_TERM,
        searchTerm
    }
};

export const requestedSuggestions = (dispatch, searchTerm) => {
const url = `http://jameda2.localtunnel.me/suggest.php?mode=what-new&query=${searchTerm}&echo=${searchTerm}`;
    fetch(url)
        .then(response => response.json())
        .then(json => dispatch(receivedSuggestions(json.suggests)))
        .catch(e => console.error("Probably offline?", e));

    return {
        type: REQUEST_SUGGESTIONS
    }
};

export const receivedSuggestions = suggestions => {
  return {
    type: RECEIVE_SUGGESTIONS,
    suggestions
  };
};