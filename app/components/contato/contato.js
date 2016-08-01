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

import { ROOT_URL } from '../../actions/index';

import $ from 'jquery';

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
constructor() {
  super();
  this.state={sent: false}
}

enviar() {
  var fd = new FormData(this.refs.gatlingKing);
  $.ajax({
  url: ROOT_URL+'/wp-content/plugins/bcap/addlead.php',
  type: "POST",
  data: fd,
  processData: false,  // tell jQuery not to process the data
  contentType: false,
  success: function() {
    this.setState({sent:true});
  }.bind(this)   // tell jQuery not to set contentType
});
}

  open() {
  this.props.showModal(true);
  this.setState({sent:false});
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
           {this.state.sent ? "Mensagem enviada!" : <form ref="gatlingKing">
        <div className="form-group">
          <input name="type" type="hidden" value="novolead"></input>
          <input name="name" className={`form-control ${styles.inputModal}`} placeholder="Seu nome"></input>
        </div>
        <div className="form-group">
          <input name="email" className={`form-control ${styles.inputModal}`} placeholder="Seu endereço de e-mail"></input>
        </div>
        <div className="form-group">
          <input name="subject" className={`form-control ${styles.inputModal}`} placeholder="Assunto"></input>
          </div>
          <div className="form-group">
          <textarea name="message" rows="6" className={`form-control ${styles.inputModal}`} placeholder="Mensagem"></textarea>
          </div>
      </form>}
    </div>
    <div className="col-sm-6" style={{textAlign: 'center'}}>
      <div className={styles.titulo}>Fale com a equipe <span className={styles.brasilcap}>Zero Perrengue</span></div>
      <div className={styles.content}>Dê sugestões e mande suas observações <span className={styles.negrito}>preenchendo os campos ao lado</span> e nós retornaremos o contato o mais rápido possível.</div>
      <div onClick={this.enviar.bind(this)} className={styles.botaoEnviar}>Enviar</div>
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
