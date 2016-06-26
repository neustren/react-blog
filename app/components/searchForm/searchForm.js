import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { getSearch, searchOn } from '../../actions/search';
import styles from './searchForm.css';

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

  startSearchForm(targetValue) {
    var a = targetValue.target.value;
    console.log(a);
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

    return (
      <div className={styles.boxBase}>

      <form onSubmit={this.onSubmit.bind(this)}>

        <div className={`form-group`}>
          <input placeholder="Digite sua busca..."
            type="text" value={this.state.value} onChange={(event) => {event.persist(); this.setState({value: event.target.value});  this.debounceLocate(event);}} className={`form-control ${styles.inputBusca}`}/>
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
