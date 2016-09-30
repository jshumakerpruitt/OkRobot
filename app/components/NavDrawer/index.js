/*
 *
 * NavDrawer
 *
 */

import React from 'react';
import { Link } from 'react-router';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import classNames from 'classnames';

import styles from './styles.css';

const NavDrawer = ({
  isOpen,
  onCloseClick,
  revokeToken,
  links,
}) =>
  <div>
    <Drawer open={isOpen}>
      <div className={styles.navDrawer}>
        <AppBar
          iconElementLeft={<IconButton onClick={onCloseClick}><NavigationClose /></IconButton>}
          title="OkRobot"
        />
        {links.map(l =>
          <Link
            className={styles.navItem}
            to={l.to}
            key={l.text}
            onClick={onCloseClick}
          >
            {l.text}
            <br />
          </Link>)}
        <Link
          className={classNames(styles.navItem, 'logout')}
          to="/"
          onClick={() => {
            onCloseClick();
            revokeToken();
          }}
        >
          Logout
          <br />
        </Link>
      </div>
    </Drawer>
  </div>;

NavDrawer.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  onCloseClick: React.PropTypes.func.isRequired,
  revokeToken: React.PropTypes.func.isRequired,
  links: React.PropTypes.array,
};

export default NavDrawer;

