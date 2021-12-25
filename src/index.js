import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import locationReducer from './store/locationReducer';
import resultsReducer from './store/resultsReducer';
import searchReducer from './store/searchReducer';
import App from './App';
import './scss/index.css';

const app = combineReducers({
  resultsReducer,
  searchReducer,
  locationReducer
})

let store = createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
