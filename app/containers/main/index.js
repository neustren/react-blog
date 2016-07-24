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
    <div>
      <DocumentMeta {...config.app}/>
      <Header></Header>
      {props.children}


          <Footer></Footer>
    </div>
  )
}
