import React, {Component} from 'react';

import Slider from '../../components/slider/slider';

import styles from './footer.less';
import {Link} from 'react-router';
import { showModal } from '../../actions/modal';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Contato from '../../components/contato/contato';

class Footer extends Component {
  static contextTypes = {
  router: React.PropTypes.object.isRequired
};
  open() {
    console.log(this);
  this.props.showModal(true);
  }
  changeSobre() {
    this.context.router.push('/sobre');

  }


  render() {
    const logobrasilcap = require('../../img/logobrasilcapp.png');
    const facebookIcon = require('../../img/facebookIcon.png');
    const twitterIcon = require('../../img/twitterIcon.png');
    const linkedinIcon = require('../../img/linkedinIcon.png');
    const mailIcon = require('../../img/mailIcon.png');
        const sobreIcon = require('../../img/sobreIcon.png');

return (

<div className={`${styles.footerFull}`}>
  <div className="container">
    <img width="140" height="40" src={logobrasilcap} className={styles.logobrasilcap}></img>
    <div className={styles.nomeBlog}>Zero Perrengue</div>
    <div className={styles.redesSociais}>
      <div className={styles.boxTodas}>
      <div onClick={(e) => {this.changeSobre();}} className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={sobreIcon}></img>
        <div className={styles.nomeRedeSocial}>SOBRE</div>
      </div>
      <div onClick={(e) => {this.open();}} className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={mailIcon}></img>
        <div className={styles.nomeRedeSocial}>CONTATO</div>
      </div>
      <div onClick={() => {window.location.href='https://www.facebook.com/Brasilcap/';}} className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={facebookIcon}></img>
        <div  className={styles.nomeRedeSocial}>FACEBOOK</div>
      </div>
      <div onClick={() => {window.location.href='https://twitter.com/brasilcapbr';}} className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={twitterIcon}></img>
        <div  className={styles.nomeRedeSocial}>TWITTER</div>
      </div>
      <div onClick={() => {window.location.href='https://www.linkedin.com/company/brasilcap';}} className={styles.redeSociaisIndividuais}>
        <img className={styles.iconeRedeSocial} src={linkedinIcon}></img>
        <div className={styles.nomeRedeSocial}>LINKEDIN</div>
      </div>

    </div>
    </div>
    <div className={styles.madeBy}>
    Desenvolvido por <div className={styles.btg}>BTG Agência</div></div>
  </div>
  {/*<Contato></Contato>*/}
</div>
)
}
}
function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModal }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Footer);
