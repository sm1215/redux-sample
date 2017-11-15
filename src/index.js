import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//Redux - Manage data (state)
//React - Provides views to display that state
//The two libraries are disconnected
//Use React-Redux library to connect the two

//Redux State - all data the app contains wrapped in a single object
//Component state and application state are completely different

//Reducers are responsible for changing application state over time
//Actions are plain Javascript objects usually triggered by user interaction and invoke Reducers (basically events

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container')
);