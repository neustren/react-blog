import App from './containers/main';
import Inicial from './containers/inicial';

import Interna from './containers/interna/interna';
import React from 'react';

import { Router, Route, IndexRoute } from 'react-router'

export default function() {
return (<Route path="/" component={App}>
  <IndexRoute component={Inicial}/>

  <Route path="post/:id/:slug" component={Interna}/>

  {/*<Route path="foo" component={Foo}/>*/}
  {/*<Route path="bar" component={Bar}/>*/}
</Route>)
}
