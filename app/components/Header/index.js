/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

import messages from './messages';

import styles from './styles.css';

const Header = ({
  onOpenClick,
}) =>
  <div className={styles.header}>
    <AppBar
      title={<Link className={styles.title} to="/">{messages.title}</Link>}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={onOpenClick}
    />
  </div>;

Header.propTypes = {
  onOpenClick: React.PropTypes.func.isRequired,
};

export default Header;
