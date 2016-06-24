/*
5 = ESTILO
2 = financas
4 = imoveis
3 = MUNDO
1 = semcategoria

*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './filtro.css';
import { selectCategory } from '../../actions/selectCategory';
import { getPostsByCategory } from '../../actions/postsByCategory';

class Filtro extends Component {
  componentDidMount() {
  this.props.selectCategory(0);
}

SendGetPostsByCategory(e) {
  this.props.selectCategory(e)
this.props.getPostsByCategory(e);
}

  render() {

    const iconeFiltroEstilo = require('../../img/iconeFiltroEstilo.png');
    const iconeFiltroFinancas = require('../../img/iconeFiltroFinancas.png');
    const iconeFiltroImoveis = require('../../img/iconeFiltroImoveis.png');
    const iconeFiltroMundo = require('../../img/iconeFiltroMundo.png');
    const iconeFiltroRecentes = require('../../img/iconeFiltroRecentes.png');

    const iconeFiltroRecentesHover = require('../../img/iconeFiltroRecentesHover.png');
    // const iconeFiltroEstiloHover = require('../../img/iconeFiltroEstiloHover.png');
    // const iconeFiltroFinancasHover = require('../../img/iconeFiltroFinancasHover.png');
    const iconeFiltroImoveisHover = require('../../img/iconeFiltroImoveisHover.png');
    const iconeFiltroMundoHover = require('../../img/iconeFiltroMundoHover.png');

    return (

<div className="container">
  <div className={styles.linhaFlex}>
  <div onClick={() => {this.SendGetPostsByCategory(0)}} onMouseLeave={e => {e.persist(); this.refs.imgRecentes.src = (this.props.state.selectedCategory.selected == 0) ? iconeFiltroRecentesHover : iconeFiltroRecentes}} onMouseOver={e => {e.persist(); this.refs.imgRecentes.src = iconeFiltroRecentesHover}} className={`${styles.boxTags} ${this.props.state.selectedCategory.selected == 0 ? styles.recenteSelected : styles.recente}`}>
    <img height="30" width="30" className={styles.iconeFiltro} ref="imgRecentes" src={(this.props.state.selectedCategory.selected == 0) ? iconeFiltroRecentesHover : iconeFiltroRecentes}></img>
    <div className={styles.nomeFiltro}>RECENTES</div>
  </div>
  <div onClick={() => {this.SendGetPostsByCategory(2)}} className={`${this.props.state.selectedCategory.selected == 2 ? styles.financasSelected : styles.financas} ${styles.boxTags}`}>
    <img height="30" width="30" className={styles.iconeFiltro} src={iconeFiltroFinancas}></img>
    <div className={styles.nomeFiltro}>FINANÇAS</div>
  </div>
  <div
    onClick={() => {this.SendGetPostsByCategory(3)}}
    onMouseLeave={e => {e.persist(); this.refs.imgMundo.src = (this.props.state.selectedCategory.selected == 3) ? iconeFiltroMundoHover : iconeFiltroMundo}}
    onMouseOver={e => {e.persist(); this.refs.imgMundo.src = iconeFiltroMundoHover}}
    className={`${this.props.state.selectedCategory.selected == 3 ? styles.mundoSelected : styles.mundo} ${styles.boxTags}`}>
    <img height="30" ref="imgMundo" width="30" className={styles.iconeFiltro} src={(this.props.state.selectedCategory.selected == 3) ? iconeFiltroMundoHover : iconeFiltroMundo}></img>
    <div className={styles.nomeFiltro}>MUNDO</div>
  </div>
  <div onClick={() => {this.SendGetPostsByCategory(4)}}
    onMouseLeave={e => {e.persist(); this.refs.imgImoveis.src = (this.props.state.selectedCategory.selected == 4) ? iconeFiltroImoveisHover : iconeFiltroImoveis}}
    onMouseOver={e => {e.persist(); this.refs.imgImoveis.src = iconeFiltroImoveisHover}}
    className={`${this.props.state.selectedCategory.selected == 4 ? styles.imoveisSelected : styles.imoveis} ${styles.boxTags}`}>
    <img height="30" width="30" ref="imgImoveis" className={styles.iconeFiltro} src={(this.props.state.selectedCategory.selected == 4) ? iconeFiltroImoveisHover : iconeFiltroImoveis}></img>
    <div className={styles.nomeFiltro}>IMOVEIS</div>
  </div>
  <div onClick={() => {this.SendGetPostsByCategory(5)}} className={`${this.props.state.selectedCategory.selected == 5 ? styles.estilosSelected : styles.estilos} ${styles.boxTags}`}>
    <img height="30" width="30" className={styles.iconeFiltro} src={iconeFiltroEstilo}></img>
    <div className={styles.nomeFiltro}>ESTILO</div>
  </div>
</div>
</div>
)
}
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory, getPostsByCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtro);
