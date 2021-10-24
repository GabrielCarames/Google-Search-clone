import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import resultsReducer from './store/resultsReducer';
// import {store} from './store/resultsReducer'

const app = combineReducers({
  resultsReducer
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
