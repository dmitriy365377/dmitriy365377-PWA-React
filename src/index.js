import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 
import { Provider } from 'react-redux';
import store from '../src/redux/store';
 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
 


