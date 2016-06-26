import React, {Component} from 'react';
import client from 'superagent';
import styles from './postagemCompleta.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
  import Assinatura from '../../components/assinatura/assinatura';
// import { ROOT_URL }  from '../../actions/index';
// import { postOpened } from '../../actions/postOpened';
import { getPostOpened } from '../../actions/postOpened';
import Tags from '../../components/Tags/Tags';
import Categorias from '../categorias/categorias';
import LeiaMais from '../../components/leiamais/leiamais';

class postagemCompleta extends Component {

  componentDidMount() {
    let postagem = this.props.state.postOpened.post;

    if(!postagem) {

       this.props.getPostOpened(this.props.params);
    }
    // this.setState({ servicos: this.props.lavanderia.Services});
  }

renderPostagem() {


  var post = this.props.state.postOpened.post;

if(post) {




const banner = require('../../img/banner.png');
const fbCinzaIcon = require('../../img/fbCinzaIcon.png');
const twCinzaIcon = require('../../img/twCinzaIcon.png');
const cmCinzaIcon = require('../../img/cmCinzaIcon.png');
const lkCinzaIcon = require('../../img/lkCinzaIcon.png');
const Facebook = require('../../img/Facebook.png');
const Twitter = require('../../img/Twitter.png');
const Linkedin = require('../../img/Linkedin.png');
const fbBrancoIcon = require('../../img/fbBrancoIcon.png');
const twBrancoIcon = require('../../img/twBrancoIcon.png');
const lkBrancoIcon = require('../../img/lkBrancoIcon.png');

const entrenaconversamobile = require('../../img/entrenaconversamobile.png');
const entrenaconversadesktop = require('../../img/entrenaconversadesktop.png');


  var dataFinal = post.date.slice(8,10) + '/' + post.date.slice(5,7) + '/' + post.date.slice(0,4);
  var minutosPraLer = post.minutos_para_ler ? post.minutos_para_ler[0] : '';

  var categoria = post.categories[0];
var titulo = post.title.rendered;
   var subTitulo = post.Subtitulo[0];
   var autor = "Brasilcap";
   var data = dataFinal;
   var tempo = minutosPraLer;
   var texto=post.content.rendered;
   var imagem = this.props.state.postOpened.imagem ? this.props.state.postOpened.imagem : banner;


  return (
    <div>

    <div className={`${styles.imagemBanner}`} style={{ backgroundImage: 'url(' + imagem + ')' }}>
      <div className={styles.backgroundBanner}>
        <div className="container">
          <div className={`${styles.informacoesBanner} col-sm-offset-2 col-sm-8 col-xs-12`}>
          <Categorias opcoes={categoria}></Categorias>
            <div className={styles.tituloBanner}>{titulo}</div>
            <Assinatura cor="white" autor={autor} data={data} tempo={tempo}></Assinatura>
            <img className={styles.iconeDestaque} src={Facebook}></img>
            <img className={styles.iconeDestaque} src={Twitter}></img>
            <img className={styles.iconeDestaque} src={Linkedin}></img>
          </div>

        </div>
      </div>
    </div>
    <div className={styles.corpo}>

      <div className="container">
        <div className={`${styles.barraLateralShare} hidden-xs`}>
          <img className={styles.shareCollumn} src={fbCinzaIcon}></img>
          <img className={styles.shareCollumn} src={twCinzaIcon}></img>
          <img className={styles.shareCollumn} src={lkCinzaIcon}></img>
          <img className={styles.shareCollumn} src={cmCinzaIcon}></img>
        </div>
        <div className={styles.boxTodoTexto}>
        <div className="col-sm-offset-2 col-sm-8 col-xs-12">
          <div className={styles.subtitulo}>{subTitulo}</div>
          <div dangerouslySetInnerHTML={function() {return {__html: texto}}()} className={styles.textoPostagem}>

          </div>
          <div className={styles.linhaCompartilhar}>
            <div className={styles.caixaAzul}>
              <img className={styles.shareRow} src={fbBrancoIcon}></img>
            </div>
            <div className={styles.caixaAzul}>
              <img className={styles.shareRow} src={twBrancoIcon}></img>
            </div>
            <div className={styles.caixaAzul}>
              <img className={styles.shareRow} src={lkBrancoIcon}></img>
            </div>
          </div>
          <Tags opcoes={[7,8,6]}></Tags>

          <img src={entrenaconversamobile} className={`${styles.entrenaconversamobile} hidden-sm hidden-lg hidden-md hidden-xl`}></img>
          <img src={entrenaconversadesktop} className={`${styles.entrenaconversadesktop} hidden-xs`}></img>
        </div>
      </div>
      </div>


          <LeiaMais categoria={categoria} post={post.id}></LeiaMais>
    </div>
  </div>
  )
}
}
render() {



  return (
    <div>
    {this.renderPostagem()}
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
  return bindActionCreators({ getPostOpened }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(postagemCompleta);
