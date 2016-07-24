/**
* @license
* Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
*
* This file is part of Brasilcap Blog Project.
* The complete set of authors may be found at http://www.effy.com.br
* Unauthorized copying of this file, via any medium is strictly prohibited
* This code can not be copied and/or distributed without the express
* permission of EFFY
* Effy - support@effy.com.br
*************************************************************************/

import React, {Component} from 'react';

import Slider from '../../components/slider/slider';
import Header from '../../components/header/header';

import Filtro from '../../components/filtro/filtro';
import PostsInicial from '../../components/postsInicial/postsInicial';
import Post from '../../components/post/post';
import styles from './inicial.less';
import {Link} from 'react-router';

export default class Inicial extends Component {
  render() {



    return (
    <div>
      {/*<Header></Header>*/}
      <Slider></Slider>
      <Filtro></Filtro>
      <PostsInicial></PostsInicial>

      </div>

    )
  }
}
