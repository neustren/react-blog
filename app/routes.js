// *************************************************************************
// * Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
// *
// * This file is part of Brasilcap Blog Project.
// * The complete set of authors may be found at http://www.effy.com.br
// * Unauthorized copying of this file, via any medium is strictly prohibited
// * This code can not be copied and/or distributed without the express
// * permission of EFFY
// * Effy - support@effy.com.br
// *************************************************************************

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/main';
import Inicial from './containers/inicial';
import Interna from './containers/interna/interna';
import NotFound from './containers/notfound/notfound';
import Busca from './containers/busca/busca';
import Sobre from './containers/sobre/sobre';

export default function() {
return (<Route path="/" component={App}>
  <IndexRoute component={Inicial}/>
    <Route path="sobre" component={Sobre}></Route>
  <Route path="post/:id" component={Interna}/>
  <Route path="busca" component={Busca}></Route>
    <Route path="*" component={NotFound}></Route>

  {/*<Route path="foo" component={Foo}/>*/}
  {/*<Route path="bar" component={Bar}/>*/}
</Route>)
}
