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
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostsByCategory } from '../../actions/postsByCategory';
import styles from './postsInicial.css';
import {Link} from 'react-router';

import Post from '../post/post';

class PostsInicial extends Component {

constructor() {
  super();
  this.state={page: 0};
};
//   componentDidMount() {
//   let category = this.props.state.category.selected;
//   // if(!category) {
//   //    this.props.entrarLavanderia(this.props.params.cep);
//   // }
//   this.props.getPostsByCategory(category);
//   // this.setState({ servicos: this.props.lavanderia.Services});
// }
// componentDidUpdate() {
// let category = this.props.state.category.selected;
// // if(!category) {
// //    this.props.entrarLavanderia(this.props.params.cep);
// // }
// this.props.getPostsByCategory(category);
// // this.setState({ servicos: this.props.lavanderia.Services});
// }

renderPosts() {
  let postagens = this.props.state.postsByCategory;

  if(postagens) {
    return postagens.posts.map((post) => {
      return (

      <Post key={post.id} data={post}></Post>

    )
    })
  }
}

  render() {
    console.log(this.props.state.postsByCategory.hasMore);
    const leao = require('../../img/leao.png');
    const vejamaisbotao = require('../../img/vejamaisbotao.png');
return (

  <div className={styles.corpo}>
  <div className="container">
    <div>
    {this.renderPosts()}
  </div>
    <div className={styles.vejamais}>
    <div onClick={this.props.getPostsByCategory.bind(null, this.props.state.selectedCategory.selected, this.props.state.postsByCategory.page+1)} className={`${styles.btnBlue}`} style={{ display: !this.props.state.postsByCategory.hasMore ? 'none' : 'flex'}}><div>VEJA MAIS</div>
      <svg  width="20pt" height="13pt" viewBox="0 0 20 13" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <path fill="#fff013" d=" M 4.31 2.09 C 6.23 3.83 8.14 5.57 10.06 7.31 C 11.83 5.52 13.60 3.74 15.36 1.95 C 16.27 2.85 17.18 3.76 18.09 4.68 C 15.37 7.23 12.68 9.80 9.96 12.36 C 7.28 9.71 4.59 7.06 1.95 4.37 C 2.74 3.61 3.53 2.85 4.31 2.09 Z" />
    </svg></div>
    </div>
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
  return bindActionCreators({ getPostsByCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsInicial);
