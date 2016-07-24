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


import React, {Component} from 'react';

import styles from './assinatura.css';
import {Link} from 'react-router';
const leituraIcone = require('../../img/leituraIcone.png');
const leituraIconeCinza = require('../../img/leituraIconeCinza.png');
const dataIconeCinza = require('../../img/dataIconeCinza.png');
const dataIcone = require('../../img/dataIcone.png');

export default class Assinatura extends Component {
  render() {

    const Mundo = require('../../img/Mundo.png');
    const Financas = require('../../img/Financas.png');
    const Imoveis = require('../../img/Imoveis.png');
    var props = this.props;
    var cor = props.cor || '#acacac';
    var corAutor = props.cor ? '#ffcc00' : 'black';
    var data = props.cor ? dataIcone : dataIconeCinza;
    var leitura = props.cor ? leituraIcone : leituraIconeCinza;
return (
<div className={styles.descricaoBanner} style={{color: cor}}>
  {/*<div className={styles.preNomeAutorBanner}>por</div>
  <div className={styles.nomeAutorBanner} style={{color: corAutor}}>{props.autor}</div>*/}
  <div className={styles.mobileBlock}>
    <img className={styles.iconeDescricaoBanner} src={data}></img>
    <div className={styles.dataBanner}>{props.data}</div>
    <img className={styles.iconeDescricaoBanner} src={leitura}></img>
    <div className={styles.leituraBanner}>{props.tempo} mins pra ler</div>
  </div>
</div>
)
}
}
