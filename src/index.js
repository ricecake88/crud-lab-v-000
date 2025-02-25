import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import rootReducer from './reducers/index';
import mainReducer from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(mainReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
