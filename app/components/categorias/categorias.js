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
    var categories = this.props.state.categories.categories;
    var l = categories.length;
                  var i = 0;
    if(categoriaDoPost) {


          for(i; i<l; i++) {
            var id = categories[i].id;


            if (id == categoriaDoPost) {
              var slug = categories[i].slug;
            var name = categories[i].name;
              switch (slug) {
                case 'mundo':
                return (
                      <div key={id} className={styles.mundo}>{name}</div>
                )
                  break;
                case 'estilo':
                return (
                <div key={id} className={styles.estilo}>{name}</div>
                )
                  break;
                case 'imoveis':
                                return (
                      <div key={id} className={styles.imoveis}>{name}</div>
                      )
                  break;
                case 'financas':
                                return (
                      <div key={id} className={styles.financas}>{name}</div>
                      )
                  break;
                default:

              }

            };
          }

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
