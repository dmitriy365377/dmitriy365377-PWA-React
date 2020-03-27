import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import initialData from './initial.data'; 
import { Provider } from 'react-redux';
import store from '../src/redux/store';

// initialData={initialData}  

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



