import React, {Component} from 'react';
import client from 'superagent';
import styles from './post.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Assinatura from '../assinatura/assinatura';
import { ROOT_URL }  from '../../actions/index';
import { postOpened } from '../../actions/postOpened';

class Post extends Component {
  static contextTypes = {
  router: React.PropTypes.object.isRequired
};

  constructor(props) {
    super(props);
    this.state = {
      imagem: ''
    };
  }

  componentDidMount() {
    console.log(this.props.data);
    var data = this.props.data;
    var that = this;
    if (data.featured_media) {


      client.get(`${ROOT_URL}/wp-json/wp/v2/media/${data.featured_media}`)
        .end(function(err,data) {
          var res = JSON.parse(data.text);
          that.setState({ imagem: res.source_url});
    });
  }
}

joinPost() {
  console.log(this);
  this.props.postOpened(this.props.data, this.state.imagem);
      this.context.router.push('/post/'+this.props.data.id);

}
  render() {

    const Mundo = require('../../img/Mundo.png');
    const Financas = require('../../img/Financas.png');
    const Imoveis = require('../../img/Imoveis.png');
    const leao = require('../../img/leao.png');
    var imagem = this.state.imagem;
    var imagemDisplay = imagem ? 'inline-flex' : 'block';
    var imagemMargin = imagem ? '0em' : '0.5em';
    var data = this.props.data;

    var dataFinal = data.date.slice(8,10) + '/' + data.date.slice(5,7) + '/' + data.date.slice(0,4);
    var minutosPraLer = data.minutos_para_ler ? data.minutos_para_ler[0] : '';
return (

<div className={styles.base}>
<img src={Mundo}></img>
<div className={`${imagem ? styles.imagemDisplay : styles.imagemNotDisplay}`}>
{imagem ? (<img onClick={() => {this.joinPost();}} src={imagem} className={styles.imagemBlog}></img>) : (<div></div>)}
<div className={styles.textos}>
<div onClick={() => {this.joinPost();}} className={styles.titulo} style={{marginTop: imagemMargin}}>6 dicas para você sair da mesmice e atingir o sucesso.</div>
<div className={styles.subtitulo}>O que tem impedido você de chegar lá provavelmente tem que ver com seus comportamentos.</div>
<Assinatura data={dataFinal} tempo={minutosPraLer} autor="Brasilcap"></Assinatura>
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
  return bindActionCreators({ postOpened }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
