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


import styles from './Tags.css';
import {Link} from 'react-router';
import Post from '../post/post';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';

class Tags extends Component {
  renderTags(post) {

    var tagsDoPost = this.props.opcoes;
    var tdpl = tagsDoPost.length;
    var tags = this.props.state.tags.tags;
    var l = tags.length;
                  var i = 0;
                  // console.log(tagsDoPost);
    if(tagsDoPost) {
        return tagsDoPost.map((unique) => {
          for(i; i<l; i++) {
            var id = tags[i].id;
            if (id == unique) {
              return (
                    <div key={id} className={styles.boxTags}>{tags[i].name}</div>
              )
            };
          }
        })
    }


    //
    // for(i; i<l; i++) {
    //   tags[i].id;
    // }
  }
  render() {
    const acaoSetaDireita = require('../../img/acaoSetaDireita.png');
    const acaoSetaEsquerda = require('../../img/acaoSetaEsquerda.png');
    const Foto = require('../../img/Foto.png');
    const leao = require('../../img/leao.png');

return (this.props.opcoes && this.props.opcoes.length) ? (
   <div>
    <div className={styles.tagsTitulo}>TAGS</div>
    {this.renderTags()}
  </div>
) : (<div/>)
}
}


function mapStateToProps(state) {
  return {
    state
  };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getPostOpened }, dispatch);
// }

export default connect(mapStateToProps, null)(Tags);
