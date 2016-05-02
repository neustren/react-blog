import React, {Component} from 'react';


import styles from './destaque.less';
import {Link} from 'react-router';


export default class Destaque extends Component {
  render() {
const Centro = require('../../img/Centro.png');
const dataIcone = require('../../img/dataIcone.png');
const Mundo = require('../../img/Mundo.png');
const Financas = require('../../img/Financas.png');
const Imoveis = require('../../img/Imoveis.png');
const Direita = require('../../img/Direita.png');
const Esquerda = require('../../img/Esquerda.png');
return (

<div style={{backgroundImage: 'url(' + Centro + ')'}} className={styles.backgroundOpaco}>
  <div className={styles.opacidadeAqui}>
  <div className={styles.materiasEmDestaque}>MATÉRIAS EM DESTAQUE</div>
  <div className={styles.caixaImagem}>
    <img src={Centro} className={styles.imagemDestaque}></img>
    <div className={styles.tagFlutuante}>
      <img src={Mundo} className={styles.imagemFlutuante}></img>
    </div>
  </div>
  <div className={styles.descricaoDestaque}>
  <div className={styles.tituloDestaque}>Invista em imóveis, mesmo que você more de aluguel</div>
    <div className={styles.descricaoBanner} >
      <div className={styles.preNomeAutorBanner}>por</div>
      <div className={styles.nomeAutorBanner} >Isabella Abreu</div>
        <img className={styles.iconeDescricaoBanner} src={dataIcone}></img>
        <div className={styles.dataBanner}>22/02/2016</div>
      </div>
    </div>

  <div className={styles.paginacaoDestaque}>
    <img src={Esquerda}></img>
    <img src={Direita}></img>
  </div>
</div>
</div>
)
}
}
