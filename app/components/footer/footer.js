import React, {Component} from 'react';

import Slider from '../../components/slider/slider';

import styles from './footer.less';
import {Link} from 'react-router';

export default class Footer extends Component {
  render() {
    const logobrasilcap = require('../../img/logobrasilcap.png');
    const facebookIcon = require('../../img/facebookIcon.png');
    const twitterIcon = require('../../img/twitterIcon.png');
    const linkedinIcon = require('../../img/linkedinIcon.png');
    const mailIcon = require('../../img/mailIcon.png');

return (

<div className={`${styles.footerFull}`}>
  <div className="container">
    <img src={logobrasilcap} className={styles.logobrasilcap}></img>
    <div className={styles.nomeBlog}>Nome do Blog</div>
    <div className={styles.redesSociais}>
      <div className={styles.boxTodas}>
      <div className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={mailIcon}></img>
        <div className={styles.nomeRedeSocial}>CONTATO</div>
      </div>
      <div className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={facebookIcon}></img>
        <div className={styles.nomeRedeSocial}>FACEBOOK</div>
      </div>
      <div className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={twitterIcon}></img>
        <div className={styles.nomeRedeSocial}>TWITTER</div>
      </div>
      <div className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={linkedinIcon}></img>
        <div className={styles.nomeRedeSocial}>LINKEDIN</div>
      </div>

    </div>
    </div>
    <div className={styles.madeBy}>
    Desenvolvido por <div className={styles.btg}>BTG Agência</div></div>
  </div>
</div>
)
}
}
