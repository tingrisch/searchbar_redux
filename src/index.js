import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from "react-redux";
import { createStore } from "redux";

import suggestions from "./reducers/searchReducer"
import Search from "./components/Search"

const store = createStore(
  suggestions,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>,
  document.getElementById("root")
);