import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/main';
import Inicial from './containers/inicial';
import Interna from './containers/interna/interna';
import NotFound from './containers/notfound/notfound';
import Busca from './containers/busca/busca';


export default function() {
return (<Route path="/" component={App}>
  <IndexRoute component={Inicial}/>

  <Route path="post/:id" component={Interna}/>
  <Route path="busca" component={Busca}></Route>
    <Route path="*" component={NotFound}></Route>
  {/*<Route path="foo" component={Foo}/>*/}
  {/*<Route path="bar" component={Bar}/>*/}
</Route>)
}
