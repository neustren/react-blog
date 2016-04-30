import React, {Component} from 'react';

import Slider from '../../components/slider/slider';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Filtro from '../../components/filtro/filtro';
import Post from '../../components/post/post';
import styles from './inicial.less';
import {Link} from 'react-router';

export default class Inicial extends Component {
  render() {

    const leao = require('../../img/leao.png');
    const vejamaisbotao = require('../../img/vejamaisbotao.png');

    return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Filtro></Filtro>

      <div className={styles.corpo}>
      <div className="container">
        <Post></Post>
        <Post imagem={leao} ></Post>
        <img className={styles.vejamais} src={vejamaisbotao}></img>
      </div>
    </div>
    <Footer></Footer>
      </div>

    )
  }
}
