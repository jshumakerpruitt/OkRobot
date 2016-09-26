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
  openHome,
}) =>
  <div className={styles.header}>
    <AppBar
      title={<span style={{ cursor: 'pointer' }}>{messages.title}</span>}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={onOpenClick}
      onTitleTouchTap={openHome}
    />
  </div>;

Header.propTypes = {
  onOpenClick: React.PropTypes.func.isRequired,
  openHome: React.PropTypes.func.isRequired,
};

export default Header;
