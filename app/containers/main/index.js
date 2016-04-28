import React from 'react';

import styles from './main.less';
 import bg from '../../img/background.jpg';

require('../../styles/app.global.less');
require('../../theme/bootstrap/css/bootstrap.global.css');

export default function(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
