import React, {Component} from 'react';


import styles from './searchResponse.css';
import {Link} from 'react-router';
import Post from '../post/post';
import { getSearch } from '../../actions/search';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchResponse extends Component {

  componentDidMount() {
//     let catsPosts = this.props.state.postsByCategory.posts;
//     var catsPostsl = catsPosts.length;
//     console.log(catsPostsl);
//     if(catsPostsl == 0) {
// console.log("disparou");
//        this.props.getPostsByCategory(this.props.categoria);
//     }
    // this.setState({ servicos: this.props.lavanderia.Services});
  }
  // renderPostsLM() {
  //   var categoria = this.props.categoria;
  //   var post = this.props.post;
  //   var catsPostsA = this.props.state.postsByCategory.posts;
  //
  //   if(catsPostsA) {
  //     var count = 0;
  //     return catsPostsA.map((pt) => {
  //
  //       if(pt.id == post) {
  //         return (<div key="samepost"></div>)
  //       }
  //       else if (count == 3) {
  //         return;
  //       } else {
  //         count++;
  //         return (
  //           <Post key={pt.id} noimage={true} data={pt}></Post>
  //         )
  //       }
  //     })
  //   }

changePage(a) {
  let paginaAtual = this.props.state.search.search.page;
  let query = this.props.state.search.search.query;
  let qntResult = this.props.state.search.search.total;
  let next = paginaAtual + a;
  let qntPaginas = Math.ceil(qntResult/6);
  if(next == 0 || next > qntPaginas ) {
    return;
  }
  else {
    this.props.getSearch(query, next);
  }


}

  renderPosts() {
    let postagens = this.props.state.search.search.data;

    if(postagens) {
let paginaAtual = this.props.state.search.search.page;
console.log(paginaAtual);
      return postagens.map((post) => {
        return (
          <div key={post.id} className={` ${styles.eachBox} col-sm-6`}>
        <Post noimage={true} data={post}></Post>
      </div>


      )
      })
    }
  }
  // }
  render() {

let qntResult = this.props.state.search.search.total;
var paginacaoEsquerda = require('../../img/paginacaoEsquerda.png');
var paginacaoDireita = require('../../img/paginacaoDireita.png');
let qntPaginas = Math.ceil(qntResult/6);
let paginaAtual = this.props.state.search.search.page;
let query = this.props.state.search.search.query;

return (
  <div>
    <div className={styles.boxResults}>
      <span className={styles.qntResultadosEncontrados}>{qntResult}</span> <span className={styles.resultadosEncontrados}>RESULTADOS ENCONTRADOS</span>
    </div>
    <div className="row">
    {this.renderPosts()}
</div>
  <div className="row">
    <div className={styles.paginacao}>
      <img onClick={(e) => {this.changePage(-1)}} height="20" width="14" src={paginacaoEsquerda}></img>
      <div>Pagina <span className={styles.qntResultadosEncontrados}>{paginaAtual || 0}</span> de {qntPaginas || 0}</div>
      <img onClick={(e) => {this.changePage(1)}} height="20" width="14" src={paginacaoDireita}></img>
    </div>
  </div>
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
  return bindActionCreators({ getSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResponse);
