import React, {Component} from 'react';


import styles from './leiaMais.less';
import {Link} from 'react-router';
import Post from '../post/post';
import { getPostsByCategory } from '../../actions/postsByCategory';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class LeiaMais extends Component {

  componentDidMount() {
    let catsPosts = this.props.state.postsByCategory.posts;
    var catsPostsl = catsPosts.length;
    console.log(catsPostsl);
    if(catsPostsl == 0) {
console.log("disparou");
       this.props.getPostsByCategory(this.props.categoria);
    }
    // this.setState({ servicos: this.props.lavanderia.Services});
  }
  renderPostsLM() {
    var categoria = this.props.categoria;
    var post = this.props.post;
    var catsPostsA = this.props.state.postsByCategory.posts;

    if(catsPostsA) {
      var count = 0;
      return catsPostsA.map((pt) => {
        if(pt.id == post) {
          return (<div key="samepost"></div>)
        }
        else if (count == 3) {
          return;
        } else {
          count++;
          console.log(count);
          return (
            <Post key={post} noimage={true} data={pt}></Post>
          )
        }
      })
    }
  }
  render() {
    const acaoSetaDireita = require('../../img/acaoSetaDireita.png');
    const acaoSetaEsquerda = require('../../img/acaoSetaEsquerda.png');
    const Foto = require('../../img/Foto.png');
    const leao = require('../../img/leao.png');

return (
  <div className="container">
          <div className="col-md-offset-2 col-lg-offset-2 col-xl-offset-2 col-sm-offset-2 col-md-8 col-lg-8 col-xl-8 col-sm-8 col-xs-12">
    <div className={styles.tituloLeiaMais}>LEIA TAMBÉM:</div>

{this.renderPostsLM()}
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
  return bindActionCreators({ getPostsByCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LeiaMais);
