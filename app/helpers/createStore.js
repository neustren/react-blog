import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'

import ReduxThunk from 'redux-thunk'

import reducers from '../reducers'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

if(typeof(__DEVELOPMENT__)==='undefined') {
  window.__DEVELOPMENT__=true;
  window.__CLIENT__=true;
}

// Add the reducer to your store on the `routing` key
console.log(reducers);

export default function(initialState, history) {
  const middleware=[ ReduxThunk, routerMiddleware(history)];

    if (__DEVELOPMENT__ && __CLIENT__ ) {
      let store=    createStore(
            combineReducers({
              ...reducers,
              routing: routerReducer
            }),
            initialState,
             compose (applyMiddleware(...middleware), ((typeof(window)!=='undefined'&&window.devToolsExtension) ? window.devToolsExtension() : f => f))

          );
      if (module.hot) {
        module.hot.accept('../reducers', () => {
          store.replaceReducer(require('../reducers'));
        });
      }
      return store;
  }
  else {
    return createStore(
      combineReducers({
        ...reducers,
        routing: routerReducer
      }),
      initialState,
       applyMiddleware(...middleware)
    )
  }
}
