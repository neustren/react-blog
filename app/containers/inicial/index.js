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
      </div>

    )
  }
}
