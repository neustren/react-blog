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


class postagemCompleta extends Component {

  componentDidMount() {
    let postagem = this.props.state.postOpened.post;
    console.log(postagem);
    if(!postagem) {
      console.log('disparou');
       this.props.getPostOpened(this.props.params);
    }
    // this.setState({ servicos: this.props.lavanderia.Services});
  }

renderPostagem() {


  var post = this.props.state.postOpened.post;
  console.log(post);
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

  var categoria = "Finanças";
var titulo = "Inadimplência: perspectivas continuam negativas para 2016";
   var subTitulo = "Desemprego e a falta de educação são os dois maiores motivos, segundo pesquisa.";
   var autor = "Isabella Abreu";
   var data = dataFinal;
   var tempo = minutosPraLer;


  return (
    <div>

    <div className={`${styles.imagemBanner}`} style={{ backgroundImage: 'url(' + banner + ')' }}>
      <div className={styles.backgroundBanner}>
        <div className="container">
          <div className={styles.informacoesBanner}>
            <div className={styles.corCategoria}>{categoria}</div>
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
        <div className="col-md-2 col-lg-2 col-xl-2 col-sm-2 hidden-xs">
          <img className={styles.shareCollumn} src={fbCinzaIcon}></img>
          <img className={styles.shareCollumn} src={twCinzaIcon}></img>
          <img className={styles.shareCollumn} src={lkCinzaIcon}></img>
          <img className={styles.shareCollumn} src={cmCinzaIcon}></img>
        </div>
        <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-xs-12">
          <div className={styles.textoPostagem}>
            TEXTO TODO VEM AQUI DENTRO
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
          <div className={styles.tagsTitulo}>TAGS</div>
          <div className={styles.boxTags}>Empreendedorismo</div>
          <div className={styles.boxTags}>Crise</div>
          <div className={styles.boxTags}>Dívida</div>

          <img src={entrenaconversamobile} className={`${styles.entrenaconversamobile} hidden-sm hidden-lg hidden-md hidden-xl`}></img>
          <img src={entrenaconversadesktop} className={`${styles.entrenaconversadesktop} hidden-xs`}></img>
        </div>
      </div>
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
