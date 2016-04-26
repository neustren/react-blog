import React, {Component} from 'react';

import styles from './pergunta.less';

import littleKids from '../img/littleKids.png';

import {Link} from 'react-router';

import logo from '../img/brasilcap.gif';
import pulando from '../img/salvardinheiro.png';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {updateField} from '../actions/cadastro';

import perguntas from './perguntas.js';

import {sendQuestion} from '../actions/pergunta';

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
    const pergunta=perguntas[+this.props.params.num-1];
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
      <div className={styles.icon}>
        <img src={pergunta.icone}/>
      </div>
      <div className={styles.title}>
        {pergunta.pergunta}
      </div>
      <div className={styles.buttonRow}>
        <div onClick={this.props.actions.sendQuestion.bind(null, {num: (+this.props.params.num - 1), index: 0, length: perguntas.length, perguntas})} className={styles.button}>
          <span>{pergunta.respostas[0][0]}</span>
        </div>
        <div onClick={this.props.actions.sendQuestion.bind(null, {num: (+this.props.params.num - 1), index: 1, length: perguntas.length, perguntas})} className={styles.button}>
          <span>{pergunta.respostas[1][0]}</span>
        </div>
        <div onClick={this.props.actions.sendQuestion.bind(null, {num: (+this.props.params.num - 1), index: 2, length: perguntas.length, perguntas})} className={styles.button}>
          <span>{pergunta.respostas[2][0]}</span>
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
