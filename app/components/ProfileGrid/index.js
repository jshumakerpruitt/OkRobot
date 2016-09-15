/**
*
* ProfileGrid
*
*/

import React from 'react';
import { GridTile } from 'material-ui/GridList';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

const ProfileGrid = ({ users }) => (
  <div className={styles.profileGrid}>
    <FormattedMessage {...messages.header} />
    {users.map((user, i) => (
      <GridTile key={i} title={user.title}>
        <img src={user.avatar} alt="profile" />
      </GridTile>
    ))}
  </div>
);

ProfileGrid.propTypes = {
  users: React.PropTypes.array,
};

export default ProfileGrid;
