import React from 'react';

import styles from './inicial.less';

import littleKids from '../img/littleKids.png';

import logo from '../img/brasilcap.gif';
import pulando from '../img/salvardinheiro.png';

import {Link} from 'react-router';

export default function() {
  return (<div className={styles.wrapper}>
    <div style={{background: '#477bc5', height: '6px', width: 'calc(50% - 80px)', marginRight: "10px", marginTop:"10px", float: "left"}}></div>
    <img style={{float: 'left'}} width="140" height="23" src={logo}/>
    <div style={{background: '#477bc5', height: '6px', width: 'calc(50% - 80px)',  marginTop:"10px", float: "right"}}></div>
    <div className={styles.boxAzul}>
    <img style={{width: "calc(100% + 64px)", margin: "0 -32px"}} src={pulando}/>
    <div className={styles.caption}>
      Descubra com a <span className={styles.strong}>Turma da Sorte</span> como salvar seu dindin e deixar sua vida bem mais saudável.
    </div>
        <Link to="/cadastro">
    <div className={styles.button}>Vamos começar!</div>
    </Link>
    </div>

    <div className={styles.littleKids}>
      <img src={littleKids}/>
    </div>

  </div>)
}
