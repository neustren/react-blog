import React, {Component} from 'react';


import styles from './historias.less';
import {Link} from 'react-router';


export default class Historias extends Component {
  render() {
    const acaoSetaDireita = require('../../img/acaoSetaDireita.png');
    const acaoSetaEsquerda = require('../../img/acaoSetaEsquerda.png');
    const Foto = require('../../img/Foto.png');
    const leao = require('../../img/leao.png');
    const Centro = require('../../img/centro.png');
        // const Mundo = require('../../img/mundo.png');
        const dataIcone = require('../../img/dataIcone.png');
        const Esquerda = require('../../img/Esquerda.png');
        const Direita = require('../../img/Direita.png');

return (

<div style={{backgroundImage: 'url(' + Centro + ')'}} className={styles.backgroundOpaco}>
  <div className={styles.opacidadeAqui}>
  <div className={styles.materiasEmDestaque}>MATÉRIAS EM DESTAQUE</div>
  <div className={styles.caixaImagem}>
    <img src={Centro} className={styles.imagemDestaque}></img>
    <div className={styles.tagFlutuante}>
      {/*<img src={Mundo} className={styles.imagemFlutuante}></img>*/}
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
