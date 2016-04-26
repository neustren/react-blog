import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import getRoutes from './routes';



let state = (typeof(window)!=='undefined')&& window.__initialState__ || undefined ;

import createStore from './helpers/createStore.js';

const store=createStore(state, browserHistory);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const dest = document.getElementById('content');

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      {getRoutes()}
    </Router>
  </Provider>,
  dest
)

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}
