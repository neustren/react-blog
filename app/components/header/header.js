import React, {Component} from 'react';

import Slider from '../../components/slider/slider';

import styles from './header.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTags } from '../../actions/tags';
import { getCategories } from '../../actions/categories';
import { searchOn } from '../../actions/search';
import Contato from '../../components/contato/contato';
import { showModal } from '../../actions/modal';

class Header extends Component {
  static contextTypes = {
  router: React.PropTypes.object.isRequired,
  location: React.PropTypes.object
};

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchOn: false,
    };
  }

  componentDidMount() {
     this.props.getTags();
     this.props.getCategories();
    // this.setState({ servicos: this.props.lavanderia.Services});
  }

  componentDidUpdate() {
    if((this.context.location.pathname.indexOf('/busca')===-1) && this.props.state.search.searchOn) {
      this.props.searchOn(false);
    }
  }

  close() {
  this.props.showModal(false);
}

open() {
  console.log(this);
this.props.showModal(true);
}

searchStart(e) {
  var search = 'go';
  console.log(search);
  var searchOn = this.props.state.search.searchOn;
  if(searchOn) {
    this.props.searchOn(false);
    this.context.router.goBack();
  }
  else {
    this.props.searchOn(true);

        this.context.router.push("/busca");
  }

}

  render() {
    const logo = require('../../img/Logo.png');
    const mail = require('../../img/Mail.png');
    const lupa = require('../../img/Lupa.png');
    const div = require('../../img/Div.png');

    const fecharBusca = require('../../img/fecharBusca.png');
      var searchOn = this.props.state.search.searchOn;
return (

<div className={`${styles.headerFull}`}>
  <div className={`container`}>
    <div className={styles.headerIn}>
    <div className={styles.LogoNome}>
      <img src={logo}></img>
      <Link to="/">
      <div className={styles.NomeBlog}>Zero Perrengue</div>
      </Link>
    </div>
    <div className={styles.IconesHeader}>
      <img width="21" height="20" className={styles.iconeIndividual} onClick={(e) => {this.open();}} src={mail}></img>
      <img className={styles.iconeIndividual} src={div}></img>
      <img onClick={(e) => {this.searchStart();}} width="20" height="20" className={styles.iconeIndividual} src={searchOn ? fecharBusca : lupa}></img>
    </div>

  </div>
<Contato></Contato>
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
  return bindActionCreators({ getTags, getCategories, searchOn, showModal }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Header);
