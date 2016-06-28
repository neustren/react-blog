import React, {Component} from 'react';

import styles from './contato.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { Modal } from 'react-bootstrap';
import { showModal } from '../../actions/modal';

class Contato extends Component {
  // componentDidMount() {
  //    this.props.getTags();
  //    this.props.getCategories();
  //   // this.setState({ servicos: this.props.lavanderia.Services});
  // }



    //
    // for(i; i<l; i++) {
    //   tags[i].id;
    // }

    close() {
    this.props.showModal(false);
  }

  open() {
  this.props.showModal(true);
  }
  render() {
    // const logo = require('../../img/Logo.png');
    // const mail = require('../../img/Mail.png');
    // const lupa = require('../../img/Lupa.png');
    // const div = require('../../img/Div.png');
    // const Mundo = require('../../img/Mundo.png');
    // const Financas = require('../../img/Financas.png');
    // const Imoveis = require('../../img/Imoveis.png');

        const fecharModal = require('../../img/fecharModal.png');
        var showModal = this.props.state.modal.showModal
return (

<div>
  <Modal bsSize="lg" show={showModal} onHide={(e) => {this.close();}}>
         <Modal.Body className={styles.modalBody}>
           <img src={fecharModal} height="20" width="20" onClick={(e) => {this.close();}} className={styles.fecharModal}></img>
           <div className={styles.bodyInside}>
           <div className="row">
           <div className="col-sm-6">
           <form>
        <div className="form-group">
          <input className={`form-control ${styles.inputModal}`} placeholder="Seu nome"></input>
        </div>
        <div className="form-group">
          <input className={`form-control ${styles.inputModal}`} placeholder="Seu endereço de e-mail"></input>
        </div>
        <div className="form-group">
          <input className={`form-control ${styles.inputModal}`} placeholder="Assunto"></input>
          </div>
          <div className="form-group">
          <textarea rows="6" className={`form-control ${styles.inputModal}`} placeholder="Mensagem"></textarea>
          </div>
      </form>
    </div>
    <div className="col-sm-6" style={{textAlign: 'center'}}>
      <div className={styles.titulo}>Fale com a <span className={styles.brasilcap}>Brasilcap</span></div>
      <div className={styles.content}>Tire suas dúvidas, faça suas sugestões e observações <span className={styles.negrito}>nos campos ao lado</span> que lhe retornaremos.</div>
      <div className={styles.botaoEnviar}>Enviar</div>
    </div>
  </div>
</div>
         </Modal.Body>

       </Modal>
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
  return bindActionCreators({ showModal }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Contato);
