import App from './main';
import Inicial from './inicial';
import Cadastro from './cadastro';
import Pergunta from './pergunta';
import Resultado from './resultado';

import React from 'react';

import { Router, Route, IndexRoute } from 'react-router'

export default function() {
return (<Route path="/" component={App}>
  <IndexRoute component={Inicial}/>
  <Route path="cadastro" component={Cadastro}/>
  <Route path="pergunta/:num" component={Pergunta}/>
  <Route path="resultado/:num" component={Resultado}/>
  {/*<Route path="foo" component={Foo}/>*/}
  {/*<Route path="bar" component={Bar}/>*/}
</Route>)
}
