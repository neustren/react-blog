// *************************************************************************
// * Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
// *
// * This file is part of Brasilcap Blog Project.
// * The complete set of authors may be found at http://www.effy.com.br
// * Unauthorized copying of this file, via any medium is strictly prohibited
// * This code can not be copied and/or distributed without the express
// * permission of EFFY
// * Effy - support@effy.com.br
// *************************************************************************

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { getSearch, searchOn } from '../../actions/search';
import styles from './searchForm.less';

class searchForm extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  static propTypes = {};

  constructor(props) {
    super(props);
    this.debounceLocate=_.debounce(this.startSearchForm, 300);
    this.state = {
      selected: 0,
      value: ''
    };
  }

  componentDidMount() {
    var searchOn = this.props.state.search.searchOn;
    if(!searchOn) {
          this.props.searchOn(true);
    }
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

  searchEnd(e) {
    var search = 'end';
    // console.log(search);
    var searchOn = this.props.state.search.searchOn;
      this.props.searchOn(false);
      this.context.router.goBack();
  }

  startSearchForm(targetValue) {
    var a = targetValue.target.value;
      var searchOn = this.props.state.search.searchOn;
    if(a.length >= 1 && !searchOn) {
      console.log('tem coisa escrita');
        this.props.searchOn(true);
          this.context.router.push("/busca");
      }
  if(!a && searchOn) {
      this.props.searchOn(false);
        this.context.router.goBack();
  }

    // console.log(a);
    if (a) {
      this.props.getSearch(a);
    }
    else {
    this.props.getSearch();

    }
  };
  onSubmit(props) {
  props.preventDefault()
  //selecao atual:
  //
  // var address=this.state.selected ? this.props.endereco.endereco[this.state.selected-1].cep : (this.props.endereco.endereco.length === 1 ? this.props.endereco.endereco[0].cep : this.state.value);
  // this.props.entrarLavanderia(address)
  // .then((existencia)=> {
  //   if(!existencia) {
  //     this.context.router.push('/contato/');
  //   }
  //   else {
  //     this.context.router.push('/orders/' + address);
  //   }
  // })
};


render() {


    const lupa = require('../../img/lupaBuscaHeader.png');
// const headerzin = this.props.headerzin;

    return (
      <div className={styles.digglet} style={{flexGrow: '1', padding: '0 30px', display: 'flex', alignItems: 'center'}}>

      <form style={{display: 'block', flex: '1'}} onSubmit={this.onSubmit.bind(this)}>

        <div  >
          <input style={{ backgroundImage: 'url(' + lupa + ')' }} placeholder="Digite sua busca..."
            type="text" value={this.state.value}
            onChange={(event) => {event.persist(); this.setState({value: event.target.value});  this.debounceLocate(event);}}
            className={`form-control ${styles.inputBuscaHeader}`}
            />
        </div>
      </form>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSearch, searchOn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(searchForm);
