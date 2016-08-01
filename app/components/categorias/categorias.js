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

import Slider from '../../components/slider/slider';

import styles from './categorias.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTags } from '../../actions/tags';
import { getCategories } from '../../actions/categories';

class Categorias extends Component {

  // componentDidMount() {
  //    this.props.getTags();
  //    this.props.getCategories();
  //   // this.setState({ servicos: this.props.lavanderia.Services});
  // }

  renderCategory(post) {

    var categoriaDoPost = this.props.opcoes;
    if(!categoriaDoPost) return (<div></div>);
    var categories = {4: {"name":"Meu dia-a-dia","slug":"atualidades","id":4},3 : {"name":"Minha Capitalização","slug":"capitalizacao","id":3}, 9: {"name":"Destaque","slug":"destaque","id":9},10: {"name":"Recente","slug":"recente","id":10}, 2: {"name":"Meu Dinheiro","slug":"financas","id":2}, 1: {"name":"Invisível","slug":"invisivel","id":1}, 5: {"name":"Meu Mundo","slug":"meio_ambiente","id":5}};
    var l = categoriaDoPost.length;
                  var n = 0;
    if(categoriaDoPost) {


          for(; n<l; n++) {
            var i=categoriaDoPost[n];
              if ((i!==9) && (i!==1) && (i!==10) && categories[i]) {
                var i=categoriaDoPost[n];

            var id = categories[i].id;

            //console.log('cat' + categoriaDoPost);

              var slug = categories[i].slug;
            var name = categories[i].name;


                    return  <div key={id} className={styles[slug]}>{name}</div>


            };
          }
          return <div/>

    }


    //
    // for(i; i<l; i++) {
    //   tags[i].id;
    // }
  }

  render() {
    // const logo = require('../../img/Logo.png');
    // const mail = require('../../img/Mail.png');
    // const lupa = require('../../img/Lupa.png');
    // const div = require('../../img/Div.png');
    const Mundo = require('../../img/Mundo.png');
    const Financas = require('../../img/Financas.png');
    const Imoveis = require('../../img/Imoveis.png');
return (

<div>
{this.renderCategory()}
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
  return bindActionCreators({ getTags, getCategories }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Categorias);
