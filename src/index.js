import React from 'react';
import ReactDOM from 'react-dom';


// Base Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { mainReducer } from './reducers/main';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  mainReducer, applyMiddleware(thunkMiddleware)
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch} />
    </Provider>
    , document.getElementById('root'));
}
store.subscribe(render);

render();
serviceWorker.unregister();
