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
    {this.renderPosts()}
    <img onClick={this.props.getPostsByCategory.bind(null, this.props.state.selectedCategory.selected, this.props.state.postsByCategory.page+1)} className={styles.vejamais} src={vejamaisbotao} style={{ display: !this.props.state.postsByCategory.hasMore ? 'none' : ''}}></img>
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
