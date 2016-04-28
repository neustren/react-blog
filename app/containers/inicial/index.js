import React, {Component} from 'react';

import styles from './inicial.less';
import {Link} from 'react-router';

export default class Inicial extends Component {
  render() {
    const logo = require('../../img/Logo.png');
    const mail = require('../../img/Mail.png');
    const lupa = require('../../img/Lupa.png');
    const div = require('../../img/Div.png');
    const dataIcone = require('../../img/dataIcone.png');
    const banner = require('../../img/banner.png');
    const leituraIcone = require('../../img/leituraIcone.png');
    const bolinhaAmarela = require('../../img/sliderBolinhaAmarela.png');
    const bolinhaCinza = require('../../img/sliderBolinhaCinza.png');
    const sliderSetaEsquerdaBranca = require('../../img/sliderSetaEsquerdaBranca.png');
    const sliderSetaEsquerdaCinza = require('../../img/sliderSetaEsquerdaCinza.png');
    const sliderSetaDireitaBranca = require('../../img/sliderSetaDireitaBranca.png');
    const sliderSetaDireitaCinza = require('../../img/sliderSetaDireitaCinza.png');
    const iconeFiltroEstilo = require('../../img/iconeFiltroEstilo.png');
    const iconeFiltroFinancas = require('../../img/iconeFiltroFinancas.png');
    const iconeFiltroImoveis = require('../../img/iconeFiltroImoveis.png');
    const iconeFiltroMundo = require('../../img/iconeFiltroMundo.png');
    const iconeFiltroRecentes = require('../../img/iconeFiltroRecentes.png');
    return (
    <div>
      <div className={`${styles.headerFull}`}>
        <div className={`container`}>
          <div className={styles.headerIn}>
          <div className={styles.LogoNome}>
            <img src={logo}></img>
            <div className={styles.NomeBlog}>Nome do Blog</div>
          </div>
          <div className={styles.IconesHeader}>
            <img className={styles.iconeIndividual} src={mail}></img>
            <img className={styles.iconeIndividual} src={div}></img>
            <img className={styles.iconeIndividual} src={lupa}></img>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.Slider}>
        <div className={`${styles.imagemBanner}`}  style={{backgroundImage: 'url(' + banner +')'}}>
          <div className={styles.backgroundBanner}>
          <div className="container">
            <div className={styles.informacoesBanner}>
          <div className={styles.corCategoria}>Finanças</div>
          <div className={styles.tituloBanner}>Inadimplência: perspectivas continuam negativas para 2016</div>
          <div className={styles.subTituloBanner}>Desemprego e a falta de educação são os dois maiores motivos, segundo pesquisa.</div>
          <div className={styles.descricaoBanner}>
            <div className={styles.preNomeAutorBanner}>por</div>
            <div className={styles.nomeAutorBanner}>Isabella Abreu</div>
            <div className={styles.mobileBlock}>
            <img className={styles.iconeDescricaoBanner} src={dataIcone}></img>
            <div className={styles.dataBanner}>22/02/2015</div>
          <img className={styles.iconeDescricaoBanner} src={leituraIcone}></img>
            <div className={styles.leituraBanner}>5 min pra ler</div>
          </div>
           </div>
          </div>
          <div className={styles.controleSlider}>
            <div className={styles.bolinhasSlider}>
              <img src={bolinhaAmarela}></img>
              <img src={bolinhaCinza}></img>
              <img src={bolinhaCinza}></img>
            </div>
            <div className={styles.setinhasSlider}>
              <img src={sliderSetaEsquerdaCinza}></img>
              <img src={sliderSetaDireitaBranca}></img>
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>
        <div className="container">
          <div className={styles.linhaFlex}>
          <div className={styles.boxTags} style={{backgroundColor: '#67b35a', borderTop: '4px solid #67b35a'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroRecentes}></img>
            <div className={styles.nomeFiltro}  style={{color: '#555555'}}>RECENTES</div>
          </div>
          <div className={styles.boxTags} style={{backgroundColor: '#ffef00', borderTop: '4px solid #ffef00'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroFinancas}></img>
            <div className={styles.nomeFiltro}  style={{color: '#555555'}}>FINANÇAS</div>
          </div>
          <div className={styles.boxTags} style={{backgroundColor: '#005aa1', borderTop: '4px solid #005aa1'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroMundo}></img>
            <div className={styles.nomeFiltro} style={{color: '#001d58'}}>MUNDO</div>
          </div>
          <div className={styles.boxTags} style={{backgroundColor: '#a8daf4', borderTop: '4px solid #a8daf4'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroImoveis}></img>
            <div className={styles.nomeFiltro} style={{color: '#6395af'}}>IMOVEIS</div>
          </div>
          <div className={styles.boxTags} style={{backgroundColor: '#333333', borderTop: '4px solid #333333'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroEstilo}></img>
            <div className={styles.nomeFiltro} style={{color: '#595959'}}>ESTILO</div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}
