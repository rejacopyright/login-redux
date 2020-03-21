import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dom = (
  <Provider store={store}>
    <StrictMode><App /></StrictMode>
  </Provider>
)
ReactDOM.render( dom, document.getElementById('root') );
serviceWorker.unregister();
