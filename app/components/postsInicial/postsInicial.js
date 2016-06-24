import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostsByCategory } from '../../actions/postsByCategory';
import styles from './postsInicial.css';
import {Link} from 'react-router';

import Post from '../post/post';

class PostsInicial extends Component {

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
    const leao = require('../../img/leao.png');
    const vejamaisbotao = require('../../img/vejamaisbotao.png');
return (

  <div className={styles.corpo}>
  <div className="container">
    {this.renderPosts()}
    <img className={styles.vejamais} src={vejamaisbotao}></img>
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
