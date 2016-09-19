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

const Header = ({
  onOpenClick,
}) =>
  <div className={styles.header}>
    <AppBar
      title={messages.title}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={onOpenClick}
    />
  </div>;

Header.propTypes = {
  onOpenClick: React.PropTypes.func.isRequired,
};

export default Header;
