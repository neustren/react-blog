import React, {Component} from 'react';


import styles from './leiaMais.less';
import {Link} from 'react-router';
import Post from '../post/post';

export default class LeiaMais extends Component {
  render() {
    const acaoSetaDireita = require('../../img/acaoSetaDireita.png');
    const acaoSetaEsquerda = require('../../img/acaoSetaEsquerda.png');
    const Foto = require('../../img/Foto.png');
    const leao = require('../../img/leao.png');

return (
  <div className="container">
          <div className="col-md-offset-2 col-lg-offset-2 col-xl-offset-2 col-sm-offset-2 col-md-8 col-lg-8 col-xl-8 col-sm-8 col-xs-12">
    <div className={styles.tituloLeiaMais}>LEIA TAMBÉM:</div>

    <Post></Post>
    <Post imagem={leao} ></Post>
      <Post></Post>
      <Post imagem={leao} ></Post>
      </div>
    </div>
)
}
}
