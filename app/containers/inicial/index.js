import React, {Component} from 'react';

import Slider from '../../components/slider/slider';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
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

    <Footer></Footer>
      </div>

    )
  }
}
