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

import React from 'react';

import styles from './main.less';
 import bg from '../../img/background.jpg';
import Header from '../../components/header/header';
import DocumentMeta from 'react-document-meta';
import config from '../../config';
      import Footer from '../../components/footer/footer';

require('../../styles/app.global.less');
require('../../theme/bootstrap/css/bootstrap.global.css');
require('./app.global.less');

export default function(props) {
  return (
    <div className={styles.pidgeott}>
      <DocumentMeta {...config.app}/>
      <Header></Header>
      {props.children}


          <Footer></Footer>
    </div>
  )
}
