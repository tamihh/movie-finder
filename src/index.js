import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import baseStyles from 'Common/assets/style.js';

const render = () => {
  baseStyles()
 
  ReactDOM.render(<App />, document.getElementById('app'))
}
 
render()
