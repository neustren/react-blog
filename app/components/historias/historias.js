import React, {Component} from 'react';


import styles from './historias.css';
import {Link} from 'react-router';
import Post from '../post/post';
import { getPostsByCategory } from '../../actions/postsByCategory';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class Historias extends Component {

  componentDidMount() {

  }
  renderPostsLM() {

  }
  render() {
    const acaoSetaDireita = require('../../img/acaoSetaDireita.png');
    const acaoSetaEsquerda = require('../../img/acaoSetaEsquerda.png');
    const Foto = require('../../img/Foto.png');
    const leao = require('../../img/leao.png');

return (
  <div className="container">
    oi
    </div>
)
}
}
function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPostsByCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Historias);
