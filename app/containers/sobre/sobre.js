/**
* @license
* Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
*
* This file is part of Brasilcap Blog Project.
* The complete set of authors may be found at http://www.effy.com.br
* Unauthorized copying of this file, via any medium is strictly prohibited
* This code can not be copied and/or distributed without the express
* permission of EFFY
* Effy - support@effy.com.br
*************************************************************************/

import React, {Component} from 'react';
import client from 'superagent';
import styles from './sobre.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
  import Assinatura from '../../components/assinatura/assinatura';
// import { ROOT_URL }  from '../../actions/index';
// import { postOpened } from '../../actions/postOpened';
import { getPostOpened } from '../../actions/postOpened';
import Tags from '../../components/Tags/Tags';
import Categorias from '../../components/categorias/categorias';
import LeiaMais from '../../components/vejaMais/leiaMais';
import comment from '../../img/comment.png';
// import FacebookProvider, { Comments } from 'react-facebook';
var ReactDisqusThread = require('react-disqus-thread');
import Historias from '../../components/historias/historias';
import { SITE_URL } from '../../actions/index';
import DocumentMeta from 'react-document-meta';
import Destaque from '../../components/destaque/destaque';

class Sobre extends Component {

  componentDidMount() {
    // let postagem = this.props.state.postOpened.post;

    // if(!postagem) {
    //
//     console.log(this);
// // var idDoUltimo = this.props.state.postsByCategory.posts[0].id;
//       var idDoUltimo = 2;
//        this.props.getPostOpened(idDoUltimo);
//     // }
//      this.props.getPostOpened(idDoUltimo);
    // this.setState({ servicos: this.props.lavanderia.Services});
  }

  // componentWillReceiveProps(nextProps) {
  //   // var idDoUltimo = this.props.state.postsByCategory.posts[0].id;
  //   var idDoUltimo = 2;
  //   console.log(nextProps);
  //   if((idDoUltimo!==nextProps.params) || (!this.props.state.postOpened.post || !this.props.state.postOpened.post.slug))
  //    {
  //     this.props.getPostOpened(idDoUltimo);
  //   }
  //   // this.props.getPostOpened(idDoUltimo);
  // }

  // componentDidUpdate() {
  //   // var idDoUltimo = this.props.state.postsByCategory.posts[0].id;
  //       var idDoUltimo = 2;
  //   if(this.props.state.postOpened.post.slug && (this.props.state.postOpened.post.slug !== idDoUltimo))
  //   {
  //     console.log('SCREEEAM');
  //     this.props.getPostOpened(idDoUltimo);
  //   }
  // }

renderPostagem() {


  var post = this.props.state.postOpened.post;

if(post) {

console.log(post);

//
// const banner = require('../../img/banner.png');
// const fbCinzaIcon = require('../../img/fbCinzaIcon.png');
// const twCinzaIcon = require('../../img/twCinzaIcon.png');
// const cmCinzaIcon = require('../../img/cmCinzaIcon.png');
// const lkCinzaIcon = require('../../img/lkCinzaIcon.png');
// const Facebook = require('../../img/Facebook.png');
// const Twitter = require('../../img/Twitter.png');
// const Linkedin = require('../../img/Linkedin.png');
// const fbBrancoIcon = require('../../img/fbBrancoIcon.png');
// const twBrancoIcon = require('../../img/twBrancoIcon.png');
// const lkBrancoIcon = require('../../img/lkBrancoIcon.png');


  //  var data = dataFinal;
  //  var tempo = minutosPraLer;
  //  var texto=post.content.rendered;
  //  var imagem = post.banner;
  var categorias = post.categories.filter(function(x) {return (x!==9) && (x!==1) && (x!==10)});
  var categoria = categorias.length ? categorias[0] : 1;


  return (
    <div>


          <Historias next={post.next} previous={post.previous}/>
          <LeiaMais categoria={categoria} post={post.id}></LeiaMais>
  </div>
  )
}
}
render() {

  // const entrenaconversamobile = require('../../img/entrenaconversamobile.png');
  const sobreBanner = require('../../img/sobreBanner.png');


    // var dataFinal = post.date.slice(8,10) + '/' + post.date.slice(5,7) + '/' + post.date.slice(0,4);
    //
    // var minutosPraLer = post.minutos_para_ler ? post.minutos_para_ler[0] : '';


  // var titulo = post.title.rendered;
    //  var subTitulo = post.Subtitulo[0];
    //  var autor = "Brasilcap";

  return (
    <div>
    <DocumentMeta title={'Sobre o Zero Perrengue'} extend/>

  <div className={`${styles.imagemBanner}`} style={{ backgroundImage: 'url(' + sobreBanner + ')' }}>

  </div>
  <div className={styles.corpo}>

    <div style={{marginBottom: "2.4em"}} className="container">

      <div className={styles.boxTodoTexto}>
      <div className="col-sm-offset-2 col-sm-8 col-xs-12">
        <div className={styles.subtitulo}>Sobre o Zero Perrengue</div>
        <div className={styles.textoPostagem}>No forno desde 2015, o Zero Perrengue foi lançado pela Brasilcap em 2016 para trazer dicas e artigos acessíveis sobre economia e sustentabilidade. E o momento não poderia ter sido melhor para o lançamento de um blog com essa temática: em momentos de dificuldades econômicas, as pessoas procuram ideias para mudar os hábitos domésticos e economizar.
        <br/>
        <br/>
E a economizar é um dos valores principais da Brasilcap, a empresa líder do mercado de capitalização do Brasil. A missão da Brasilcap é ajudar as pessoas a ter um futuro mais feliz, próspero e com a realização de sonhos. Para isso, há 20 anos a Brasilcap comercializa títulos de capitalização, produtos que promovem os valores da disciplina financeira para a concretização dos objetivos.
<br/>
<br/>
Mas isso não era o suficiente: a Brasilcap resolveu colocar a mão na massa e lançar o Zero Perrengue para dar a sua contribuição nos esforços de educação financeira do país. E já que gastar pouco combina (e muito!) com a preservação do planeta, nós misturamos o conteúdo de sustentabilidade na pauta do Zero Perrengue para ajudar você a ser uma pessoa mais consciente sobre o seu bolso e sobre esse mundo em que a gente mora.
<br/>
<br/>
Então comece a ler, a poupar e a preservar!
<br/>
<br/>
Equipe Zero Perrengue

        </div>



        {/*<img src={entrenaconversamobile} className={`${styles.entrenaconversamobile} hidden-sm hidden-lg hidden-md hidden-xl`}></img>
        <img src={entrenaconversadesktop} className={`${styles.entrenaconversadesktop} hidden-xs`}></img>*/}
      </div>
    </div>
    </div>
    {this.renderPostagem()}


    <Destaque></Destaque>
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
  return bindActionCreators({ getPostOpened }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sobre);
