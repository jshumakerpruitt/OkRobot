/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

import messages from './messages';

import styles from './styles.css';

const Header = ({
  onOpenClick,
  isLoggedIn,
}) =>
  <div className={styles.header}>
    { isLoggedIn ?
      <AppBar
        title={<Link className={styles.title} to="/">{messages.title}</Link>}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={onOpenClick}
      /> :
      <AppBar
        title={<Link className={styles.title} to="/">{messages.title}</Link>}
        iconElementLeft={
          <Link to="/signup">
            <IconButton />
          </Link>}
        iconElementRight={
          <div className={styles.join}>
            <Link to="/signup">
              <FlatButton style={{ color: '#FFF' }} label="Join Now" />
            </Link>
          </div>}
      />}
  </div>;

Header.propTypes = {
  onOpenClick: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.bool,
};

export default Header;
