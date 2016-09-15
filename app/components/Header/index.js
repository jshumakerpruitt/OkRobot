/**
*
* Header
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';

// import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.header}>
      <AppBar title={messages.title} />
    </div>
  );
}

export default Header;
