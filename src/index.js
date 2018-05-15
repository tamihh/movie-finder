import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import baseStyles from 'Common/assets/style.js';
import configureStore from 'Redux/createStore.js';

const store = configureStore();

const render = () => {
  baseStyles()
 
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('app')
  );
}
 
render()
