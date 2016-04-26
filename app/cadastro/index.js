import React, {Component} from 'react';

import styles from './cadastro.less';

import littleKids from '../img/littleKids.png';

import {Link} from 'react-router';

import logo from '../img/brasilcap.gif';
import pulando from '../img/salvardinheiro.png';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {updateField} from '../actions/cadastro';

class cadastro extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
  return (<div className={styles.wrapper}>
    <div style={{background: '#477bc5', height: '6px', width: 'calc(50% - 80px)', marginRight: "10px", marginTop:"10px", float: "left"}}></div>
    <img style={{float: 'left'}} width="140" height="23" src={logo}/>
    <div style={{background: '#477bc5', height: '6px', width: 'calc(50% - 80px)',  marginTop:"10px", float: "right"}}></div>
    <div className={styles.boxAzul}>
      <img style={{width: "calc(100% + 64px)", maxWidth: "260px" , margin: "25px auto", display: "block"}} src={pulando}/>
    <div className={styles.form}>
      <div className={styles.title}>
        Coloque seus dados abaixo:
        <div className={styles.field}>
          Nome:
          <input value={this.props.cadastro ? this.props.cadastro.nome : ''} onChange={(e) => {this.props.actions.updateField({nome: e.target.value})}}></input>
        </div>
        <div className={styles.field}>
          E-mail:
          <input value={this.props.cadastro ? this.props.cadastro.email : ''} onChange={(e) => {this.props.actions.updateField({email: e.target.value})}}></input>
        </div>
      </div>

    </div>
    <Link to="/pergunta/1">
    <div className={styles.button}>Faça o quiz</div>
    </Link>
    </div>

    <div className={styles.littleKids}>
      <img src={littleKids}/>
    </div>

  </div>)
}
}
function mapStateToProps(state) {
  console.log(state);
  return { cadastro: state.cadastro };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({updateField}, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(cadastro);
