import React, {Component} from 'react';

import Slider from '../../components/slider/slider';

import styles from './header.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTags } from '../../actions/tags';
import { getCategories } from '../../actions/categories';

class Header extends Component {

  componentDidMount() {
     this.props.getTags();
     this.props.getCategories();
    // this.setState({ servicos: this.props.lavanderia.Services});
  }



  render() {
    const logo = require('../../img/Logo.png');
    const mail = require('../../img/Mail.png');
    const lupa = require('../../img/Lupa.png');
    const div = require('../../img/Div.png');
return (

<div className={`${styles.headerFull}`}>
  <div className={`container`}>
    <div className={styles.headerIn}>
    <div className={styles.LogoNome}>
      <img src={logo}></img>
      <div className={styles.NomeBlog}>Nome do Blog</div>
    </div>
    <div className={styles.IconesHeader}>
      <img width="21" height="20" className={styles.iconeIndividual} src={mail}></img>
      <img className={styles.iconeIndividual} src={div}></img>
      <img width="20" height="20" className={styles.iconeIndividual} src={lupa}></img>
    </div>
  </div>
  </div>
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
  return bindActionCreators({ getTags, getCategories }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Header);
