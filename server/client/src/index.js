import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "shards-ui/dist/css/shards.min.css";
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import promiseMiddleWare from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers'

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleWare,
  ReduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleWare(Reducer,
      window.__REDUX__DEVTOOLS_EXTENSION__ &&
      window.__REDUX__DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

