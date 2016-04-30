import React, {Component} from 'react';

import Slider from '../../components/slider/slider';

import styles from './inicial.less';
import {Link} from 'react-router';

export default class Inicial extends Component {
  render() {
    const logo = require('../../img/Logo.png');
    const mail = require('../../img/Mail.png');
    const lupa = require('../../img/Lupa.png');
    const div = require('../../img/Div.png');
    const dataIcone = require('../../img/dataIcone.png');

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
      <Slider></Slider>

        <div className="container">
          <div className={styles.linhaFlex}>
          <div className={styles.boxTags} style={{backgroundColor: '#67b35a', borderTop: '0.2em solid #67b35a'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroRecentes}></img>
            <div className={styles.nomeFiltro}  style={{color: '#555555'}}>RECENTES</div>
          </div>
          <div className={styles.boxTags} style={{backgroundColor: '#ffef00', borderTop: '0.2em solid #ffef00'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroFinancas}></img>
            <div className={styles.nomeFiltro}  style={{color: '#555555'}}>FINANÇAS</div>
          </div>
          <div className={styles.boxTags} style={{backgroundColor: '#005aa1', borderTop: '0.2em solid #005aa1'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroMundo}></img>
            <div className={styles.nomeFiltro} style={{color: '#001d58'}}>MUNDO</div>
          </div>
          <div className={styles.boxTags} style={{backgroundColor: '#a8daf4', borderTop: '0.2em solid #a8daf4'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroImoveis}></img>
            <div className={styles.nomeFiltro} style={{color: '#6395af'}}>IMOVEIS</div>
          </div>
          <div className={styles.boxTags} style={{backgroundColor: '#333333', borderTop: '0.2em solid #333333'}}>
            <img className={styles.iconeFiltro} src={iconeFiltroEstilo}></img>
            <div className={styles.nomeFiltro} style={{color: '#595959'}}>ESTILO</div>
          </div>
        </div>
      </div>

      </div>

    )
  }
}
