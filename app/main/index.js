import React from 'react';

import styles from './main.less';
 import bg from '../img/background.jpg';

require('../styles/app.global.less');

export default function(props) {
  return (
    <div>
      {props.children}
    <div style={{background: "url(" +bg + ") no-repeat center bottom fixed"}} className={styles.background}></div>

    </div>
  )
}
