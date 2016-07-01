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
import LeiaMais from '../../components/vejaMais/leiaMais';
import comment from '../../img/comment.png';
// import FacebookProvider, { Comments } from 'react-facebook';
var ReactDisqusThread = require('react-disqus-thread');
import Historias from '../../components/historias/historias';
import { SITE_URL } from '../../actions/index';
import DocumentMeta from 'react-document-meta';

class postagemCompleta extends Component {

  componentDidMount() {
    // let postagem = this.props.state.postOpened.post;

    // if(!postagem) {

      //  this.props.getPostOpened(this.props.params);
    // }
     this.props.getPostOpened(this.props.params);
    // this.setState({ servicos: this.props.lavanderia.Services});
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if((this.props.params!==nextProps.params) || (!this.props.state.postOpened.post || !this.props.state.postOpened.post.slug))
     {
      this.props.getPostOpened(this.props.params);
    }
    // this.props.getPostOpened(this.props.params);
  }

  componentDidUpdate() {
    if(this.props.state.postOpened.post.slug && (this.props.state.postOpened.post.slug !== this.props.params))
    {
      console.log('SCREEEAM');
      this.props.getPostOpened(this.props.params);
    }
  }

renderPostagem() {


  var post = this.props.state.postOpened.post;

if(post) {

console.log(post);


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

try {
  var dataFinal = post.date.slice(8,10) + '/' + post.date.slice(5,7) + '/' + post.date.slice(0,4);

  var minutosPraLer = post.minutos_para_ler ? post.minutos_para_ler[0] : '';

  var categorias = post.categories.filter(function(x) {return (x!==9) && (x!==1)});
  var categoria = categorias.length ? categorias[0] : 1;
var titulo = post.title.rendered;
   var subTitulo = post.Subtitulo[0];
   var autor = "Brasilcap";
   var data = dataFinal;
   var tempo = minutosPraLer;
   var texto=post.content.rendered;
   var imagem = post.banner;
}
   catch(e) {
     return (<div></div>)
   }


  return (
    <div>
      <DocumentMeta title={titulo+ ' - Zero Perrengue'} description={subTitulo} extend/>

    <div className={`${styles.imagemBanner}`} style={{ backgroundImage: 'url(' + imagem + ')' }}>
      <div className={styles.backgroundBanner}>
        <div className="container">
          <div className={`${styles.informacoesBanner} col-sm-offset-2 col-sm-8 col-xs-12`}>
          <Categorias opcoes={categorias}></Categorias>
            <div className={styles.tituloBanner}>{titulo}</div>
            <Assinatura cor="white" autor={autor} data={data} tempo={tempo}></Assinatura>
            <img style={{cursor: 'pointer'}} onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location))} className={styles.iconeDestaque} src={Facebook}></img>
            <img style={{cursor: 'pointer'}} onClick={() => window.open('https://twitter.com/home?status='+encodeURIComponent(window.location))} className={styles.iconeDestaque} src={Twitter}></img>
            <img style={{cursor: 'pointer'}} onClick={() => window.open('https://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(window.location)+'&title='+encodeURIComponent(titulo))} className={styles.iconeDestaque} src={Linkedin}></img>
          </div>

        </div>
      </div>
    </div>
    <div className={styles.corpo}>

      <div style={{marginBottom: "2.4em"}} className="container">
        <div className={`${styles.barraLateralShare} hidden-xs`}>
          <img onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location))} className={styles.shareCollumn} src={fbCinzaIcon}></img>
          <img onClick={() => window.open('https://twitter.com/home?status='+encodeURIComponent(window.location))} className={styles.shareCollumn} src={twCinzaIcon}></img>
          <img onClick={() => window.open('https://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(window.location)+'&title='+encodeURIComponent(titulo))} className={styles.shareCollumn} src={lkCinzaIcon}></img>
          <img className={styles.shareCollumn} src={cmCinzaIcon}></img>
        </div>
        <div className={styles.boxTodoTexto}>
        <div className="col-sm-offset-2 col-sm-8 col-xs-12">
          <div className={styles.subtitulo}>{subTitulo}</div>
          <div dangerouslySetInnerHTML={function() {return {__html: texto}}()} className={styles.textoPostagem}>

          </div>
          <div className={styles.linhaCompartilhar}>
            <div onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location))} className={styles.caixaAzul}>
              <img className={styles.shareRow} src={fbBrancoIcon}></img>
            </div>
            <div onClick={() => window.open('https://twitter.com/home?status='+encodeURIComponent(window.location))} className={styles.caixaAzul}>
              <img className={styles.shareRow} src={twBrancoIcon}></img>
            </div>
            <div onClick={() => window.open('https://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(window.location)+'&title='+encodeURIComponent(titulo))} className={styles.caixaAzul}>
              <img className={styles.shareRow} src={lkBrancoIcon}></img>
            </div>
          </div>
          <Tags opcoes={post.tags}></Tags>

    <div className={`${styles.btnBlue} ${styles.entrenaconversamobile}`}><img width="15" height="15" src={comment}/><span>&nbsp;&nbsp;ENTRE NA CONVERSA</span></div>
            <div className={styles.fbcomments}>


            {/*<FacebookProvider appID="1574885309478862">
              <Comments width="100%" href={'http://www.facebook.com/'+post.slug} />
            </FacebookProvider>*/}

            <ReactDisqusThread

                            shortname="zeroperrengue"
                            identifier={post.slug}
                            title={post.title.rendered}
                            url={window.location.href}
                          />
            </div>
          {/*<img src={entrenaconversamobile} className={`${styles.entrenaconversamobile} hidden-sm hidden-lg hidden-md hidden-xl`}></img>
          <img src={entrenaconversadesktop} className={`${styles.entrenaconversadesktop} hidden-xs`}></img>*/}
        </div>
      </div>
      </div>

          <Historias next={post.next} previous={post.previous}/>
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
