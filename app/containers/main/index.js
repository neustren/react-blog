import React from 'react';

import styles from './main.less';
 import bg from '../../img/background.jpg';
import Header from '../../components/header/header';

require('../../styles/app.global.less');
require('../../theme/bootstrap/css/bootstrap.global.css');

export default function(props) {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  )
}
