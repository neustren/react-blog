import React, {Component} from 'react';

import styles from './resultado.less';

import littleKids from '../img/littleKids.png';

import {Link} from 'react-router';

import logo from '../img/brasilcap.gif';
import pulando from '../img/salvardinheiro.png';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {updateField} from '../actions/cadastro';

import resultados from './resultados.js';

import {sendQuestion} from '../actions/pergunta';


var fbIcon=require('./facebook56.svg');
require('./olivier/font.global.css');

class cadastro extends Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
    router: React.PropTypes.object
  };
  componentDidMount() {
    console.log(this.props.params);
  }
  render() {
    const pergunta=resultados(+this.props.params.num);
    console.log(pergunta);
  return (<div className={styles.wrapper}>
    <div className={styles.half} style={{width: "calc(40% - 40px)", height: "150px", float: "left", padding: "0 20px"}}>
    <img className={styles.logo} style={{ margin: "auto" , display: "block", maxWidth: "100%", height: "auto"}} width="140" height="23" src={logo}/>
    </div>
    <div className={styles.half} style={{width: "calc(60% - 40px)", height: "150px", float: "left", padding: "0 20px"}}>
    <img style={{ margin: "auto" ,  display: "block", maxWidth: "100%", height: "auto"}} width="260" height="102" src={pulando}/>
    </div>


    <div className={styles.boxAzul}>
    <div className={styles.form}>
      <div className={styles.resultRow}>
      <div className={styles.halfer}>
        Sua economia por mês seria
      </div>
      <div className={styles.halfa}>
        <span className={styles.rs}>R$</span><span className={styles.number}>{this.props.params.num+','}</span><span className={styles.zero}>00</span>
      </div>
      </div>

      <div dangerouslySetInnerHTML={(() => {  var html =pergunta.text.replace('[b]', `<span class=${styles.strong}>`).replace('[/b]', '</span>'); console.log(html); return {__html: html }})() } className={styles.title}>

      </div>
      <div className={styles.finalRow}>
        <div className={styles.buttons}>
          <div className={styles.btn}>
            <div className={styles.content}>
              <a href={pergunta.link}>
            Conheça o <span className={styles.strong}>{pergunta.plano}</span>
        </a>
            </div>
          </div>
          <div className={`${styles.btn} ${styles.azul}`}>
            <img height="52" style={{marginTop: "10px", marginLeft: "15px"}} src={fbIcon}/>
            <div className={styles.content}>
              <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=`+encodeURIComponent(window.location)}>
              Compartilhar
              </a>
          </div>
          </div>
        </div>
      <div className={styles.icon}>

        <img src={pergunta.personagem}/>
      </div>
      </div>

    </div>
    </div>


    {/*<div className={styles.littleKids}>*/}
      {/*<img src={littleKids}/>*/}
    {/*</div>*/}

  </div>)
}
}
function mapStateToProps(state) {
  console.log(state);
  return { cadastro: state.cadastro };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({updateField, sendQuestion}, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(cadastro);
