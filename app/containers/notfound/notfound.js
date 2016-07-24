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

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './notfound.less';
import {Link} from 'react-router';
    import Assinatura from '../../components/assinatura/assinatura';

import Destaque from '../../components/destaque/destaque';
import Historias from '../../components/historias/historias';

import PostagemCompleta from '../../components/postagemCompleta/postagemCompleta';

export default class NotFound extends Component {
  static contextTypes = {
  router: React.PropTypes.object.isRequired
  }
  componentDidMount() {


    // this.setState({ servicos: this.props.lavanderia.Services});
  }

  // this.setState({ servicos: this.props.lavanderia.Services});



  render() {

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


return (

<div className={styles.base}>
  {/*<Header></Header>*/}


  <div className={styles.harbinger}>
    <div className={styles.ops}>
      Oops!
    </div>
    <div className={styles.sub}>
      A página que você procura<br/>
    não pôde ser encontrada.
    </div>
  </div>
    <div className={styles.corpo}>


    {/*<Historias></Historias>*/}

    <Destaque></Destaque>

  </div>

  <Footer></Footer>
</div>
)
}
}
//
// function mapStateToProps(state) {
//   return {
//     lavanderia: state.lavanderia.lavanderia,
//     servicos: state.servicos.servicos,
//     produtos: state.carrinho.produtos
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ entrarLavanderia, adicionarCarrinho, removerCarrinho }, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Orders);
