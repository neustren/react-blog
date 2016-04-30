import React, {Component} from 'react';

import styles from './post.less';
import {Link} from 'react-router';
import Assinatura from '../assinatura/assinatura';

export default class Post extends Component {
  render() {

    const Mundo = require('../../img/Mundo.png');
    const Financas = require('../../img/Financas.png');
    const Imoveis = require('../../img/Imoveis.png');
    const leao = require('../../img/leao.png');
    var imagem = this.props.imagem;
    var imagemDisplay = imagem ? 'inline-flex' : 'block';
    var imagemMargin = imagem ? '0em' : '0.5em';
return (

<div className={styles.base}>
<img src={Mundo}></img>
<div className={`${imagem ? styles.imagemDisplay : styles.imagemNotDisplay}`}>
{imagem ? (<img src={imagem} className={styles.imagemBlog}></img>) : (<div></div>)}
<div className={styles.textos}>
<div className={styles.titulo} style={{marginTop: imagemMargin}}>6 dicas para você sair da mesmice e atingir o sucesso.</div>
<div className={styles.subtitulo}>O que tem impedido você de chegar lá provavelmente tem que ver com seus comportamentos.</div>
<Assinatura data="22/01/2042" tempo="5 min" autor="Isabella Abr"></Assinatura>
</div>
</div>

</div>
)
}
}
